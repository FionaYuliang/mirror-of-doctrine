const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number(process.env.PORT || 3000);
const SITE_ROOT = path.resolve(
  process.cwd(),
  process.env.SITE_ROOT || "resource/doctrine-of-signatures.net"
);

const MIME_TYPES = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".otf": "font/otf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8"
};

function send(res, statusCode, headers, body) {
  res.writeHead(statusCode, headers);
  res.end(body);
}

function resolveRequestPath(urlPathname) {
  const decodedPath = decodeURIComponent(urlPathname);
  const safePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = path.join(SITE_ROOT, safePath);

  if (decodedPath.endsWith("/")) {
    filePath = path.join(filePath, "index.html");
  }

  return filePath;
}

function serveFile(filePath, res) {
  fs.stat(filePath, (statError, stats) => {
    if (statError) {
      send(
        res,
        404,
        { "Content-Type": "text/plain; charset=utf-8" },
        `Not found: ${filePath}`
      );
      return;
    }

    if (stats.isDirectory()) {
      serveFile(path.join(filePath, "index.html"), res);
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType =
      MIME_TYPES[extension] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store"
    });

    const stream = fs.createReadStream(filePath);
    stream.on("error", () => {
      send(
        res,
        500,
        { "Content-Type": "text/plain; charset=utf-8" },
        `Failed to read: ${filePath}`
      );
    });
    stream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || HOST}`);
  let filePath = resolveRequestPath(requestUrl.pathname);

  if (!filePath.startsWith(SITE_ROOT)) {
    send(
      res,
      403,
      { "Content-Type": "text/plain; charset=utf-8" },
      "Forbidden"
    );
    return;
  }

  if (requestUrl.pathname === "/") {
    filePath = path.join(SITE_ROOT, "zh/home/index.html");
  }

  serveFile(filePath, res);
});

server.listen(PORT, HOST, () => {
  console.log(`Static preview server running at http://${HOST}:${PORT}`);
  console.log(`Serving files from ${SITE_ROOT}`);
  console.log(`Default page: http://${HOST}:${PORT}/zh/home/`);
});
