const express = require("express");
const fs = require("fs");
const path = require("path");

function normalizeMountPath(input) {
  if (!input || input === "/") {
    return "/";
  }

  const trimmed = `/${input}`.replace(/\/+/g, "/").replace(/\/$/, "");
  return trimmed === "" ? "/" : trimmed;
}

function normalizeStartPage(input) {
  const normalized = `/${input || ""}`.replace(/\/+/g, "/");
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

function stripMountPrefix(requestPath, mountPath) {
  if (mountPath === "/") {
    return requestPath;
  }

  if (requestPath === mountPath) {
    return "/";
  }

  if (requestPath.startsWith(`${mountPath}/`)) {
    return requestPath.slice(mountPath.length) || "/";
  }

  return null;
}

function resolveSafePath(siteRoot, urlPath) {
  const decodedPath = decodeURIComponent(urlPath);
  const normalized = path.normalize(decodedPath);
  const relativePath = normalized.replace(/^(\.\.(\/|\\|$))+/, "");
  const resolvedPath = path.resolve(siteRoot, `.${path.sep}${relativePath}`);

  if (!resolvedPath.startsWith(siteRoot)) {
    return null;
  }

  return resolvedPath;
}

function findExistingFile(siteRoot, urlPath) {
  const basePath = resolveSafePath(siteRoot, urlPath);

  if (!basePath) {
    return { type: "forbidden" };
  }

  if (fs.existsSync(basePath)) {
    const stats = fs.statSync(basePath);

    if (stats.isDirectory()) {
      const indexPath = path.join(basePath, "index.html");
      if (fs.existsSync(indexPath)) {
        return { type: "directory", filePath: indexPath };
      }
    } else {
      return { type: "file", filePath: basePath };
    }
  }

  if (!path.extname(basePath)) {
    const htmlPath = `${basePath}.html`;
    if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
      return { type: "file", filePath: htmlPath };
    }
  }

  return { type: "missing" };
}

function requestLogger(req, _res, next) {
  const now = new Date().toISOString();
  console.log(`${now} ${req.method} ${req.originalUrl}`);
  next();
}

function createPreviewHandler(siteRoot, mountPath, startPage) {
  return function previewHandler(req, res, next) {
    const relativePath = stripMountPrefix(req.path, mountPath);

    if (relativePath === null) {
      return next();
    }

    if (relativePath === "/") {
      const redirectTarget =
        mountPath === "/"
          ? startPage
          : `${mountPath}${startPage === "/" ? "" : startPage}`;
      return res.redirect(302, redirectTarget);
    }

    const match = findExistingFile(siteRoot, relativePath);

    if (match.type === "forbidden") {
      return res.status(403).type("text/plain; charset=utf-8").send("Forbidden");
    }

    if (match.type === "directory") {
      if (!req.path.endsWith("/")) {
        const query = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
        return res.redirect(301, `${req.path}/${query}`);
      }

      return res.sendFile(match.filePath, {
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    if (match.type === "file") {
      return res.sendFile(match.filePath, {
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    return next();
  };
}

function createApp(config = {}) {
  const siteRoot = path.resolve(
    process.cwd(),
    config.siteRoot || process.env.SITE_ROOT || "resource/doctrine-of-signatures.net"
  );
  const mountPath = normalizeMountPath(config.mountPath || process.env.MOUNT_PATH || "/");
  const startPage = normalizeStartPage(config.startPage || process.env.START_PAGE || "/zh/home/");
  const app = express();

  app.disable("x-powered-by");
  app.use(requestLogger);

  if (mountPath !== "/") {
    app.use(createPreviewHandler(siteRoot, mountPath, startPage));
  }

  app.use(createPreviewHandler(siteRoot, "/", startPage));

  app.use((req, res) => {
    res.status(404).type("text/plain; charset=utf-8").send(`Not found: ${req.originalUrl}`);
  });

  return {
    app,
    config: {
      host: config.host || process.env.HOST || "127.0.0.1",
      port: Number(config.port || process.env.PORT || 3000),
      siteRoot,
      mountPath,
      startPage
    }
  };
}

function startServer(config = {}) {
  const { app, config: resolved } = createApp(config);
  const server = app.listen(resolved.port, resolved.host, () => {
    const origin = `http://${resolved.host}:${resolved.port}`;
    const mountedHome =
      resolved.mountPath === "/"
        ? `${origin}${resolved.startPage}`
        : `${origin}${resolved.mountPath}${resolved.startPage}`;

    console.log(`Static preview server running at ${origin}`);
    console.log(`Serving files from ${resolved.siteRoot}`);
    console.log(`Mount path: ${resolved.mountPath}`);
    console.log(`Default page: ${mountedHome}`);
  });

  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = {
  createApp,
  startServer
};
