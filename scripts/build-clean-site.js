const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = process.cwd();
const SOURCE_ROOT = path.join(PROJECT_ROOT, "resource/doctrine-of-signatures");
const OUTPUT_ROOT = path.join(PROJECT_ROOT, "clean-site");
const OUTPUT_ASSETS = path.join(OUTPUT_ROOT, "assets");

const PAGE_ROOTS = [
  path.join(SOURCE_ROOT, "zh/home"),
  path.join(SOURCE_ROOT, "en/home-en")
];

const REMOTE_RE = /^(?:https?:)?\/\//i;
const CSS_EXTENSIONS = new Set([".css"]);
const JS_EXTENSIONS = new Set([".js", ".mjs"]);
const FONT_EXTENSIONS = new Set([".woff", ".woff2"]);
const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".ico", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const MEDIA_EXTENSIONS = new Set([".mp3", ".mp4", ".ogg", ".webm"]);
const SINGLE_IMAGE_SRCSET_STEMS = new Set([
  "Whipple-logo-w-words-black-on-transparent"
]);

const STATIC_SCRIPT_ASSETS = new Set([
  "index.html..-eJytkDEOwjAMRS9EGlUIFQ.css",
  "index.html..-eJx9jDsKgDAQRC+k2dioKc.css",
  "index.html..-eJxlzNEKgzAMheEXWhsmw3.css"
]);

const STATIC_ASSET_NAME_STEMS = new Map([
  ["index.html..-eJwrL9DNzEvOKU1JLdbPKt.css", "mediaelement"],
  ["index.html..-eJx1jMEKwjAQRH%2FINCkV.css", "popup-zh-menu"],
  ["index.html..-eJx1jMEKwjAQRH%2FINKQU.css", "popup-en-menu"],
  ["index.html..-eJx9jDsKgDAQRC+k2dioKc.css", "smartmenus-navigation"],
  ["index.html..-eJxlzNEKgzAMheEXWhsmw3.css", "elementor-pro-runtime"],
  ["index.html..-eJyVi1EKgCAQBS+UbcaCX9.css", "google-fonts"],
  ["index.html..-eJyVjssKwjAQRX.css", "elementor-social-icons"],
  ["index.html..-eJydj8sKwkAMRX%2FIdFCk.css", "elementor-spacer"],
  ["index.html..-eJylVF1vgzAM%2FENLGW3V.css", "page-en-s02"],
  ["index.html..-eJylVNFygyAQ%2FKFSqkmj.css", "page-zh-s02"],
  ["index.html..-eJylkN0KwjAMRl%2FIGhTZ.css", "hfe-widgets"],
  ["index.html..-eJyllNFOwzAMRX+IrGxM63.css", "page-en-home"],
  ["index.html..-eJyllNFugzAMRX9oKc06Uf.css", "page-zh-home"],
  ["index.html..-eJytVF1PwzAM%2FEOEsg+t.css", "page-en-s01"],
  ["index.html..-eJytVF1TwyAQ.css", "page-zh-credits"],
  ["index.html..-eJytVMtygzAM%2FKE6lLxI.css", "page-en-s05"],
  ["index.html..-eJytVNFOwzAM%2FCFC1Y11.css", "page-zh-s03"],
  ["index.html..-eJytVNFOwzAM%2FCFClRW2.css", "page-zh-s04"],
  ["index.html..-eJytVNFOwzAM%2FCGyKmOs.css", "page-zh-s05"],
  ["index.html..-eJytVNFugzAM%2FKGljLKV.css", "page-zh-s01"],
  ["index.html..-eJytVNFuwjAM%2FKGFUkDA-2.css", "page-en-s03"],
  ["index.html..-eJytVNtSgzAQ%2FSFTxNZS.css", "page-en-credits"],
  ["index.html..-eJytkDEOwjAMRS9EGlUIFQ.css", "astra-theme"]
]);

const JS_ASSET_NAME_STEMS = new Map([
  ["wp-includes/js/jquery/jquery.min.js", "jquery.min"],
  ["wp-includes/js/jquery/jquery-migrate.min.js", "jquery-migrate.min"],
  ["wp-includes/js/wp-emoji-release.min.js", "wp-emoji-release.min"],
  ["wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js", "font-awesome-v4-shims.min"],
  ["wp-content/plugins/elementor/assets/js/frontend.min.js", "elementor-frontend.min"],
  ["wp-content/plugins/elementor-pro/assets/js/frontend.min.js", "elementor-pro-frontend.min"],
  ["wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js", "elementor-pro-elements-handlers.min"],
  ["wp-content/plugins/gutenberg/build/scripts/hooks/index.min.js", "wp-hooks.min"],
  ["wp-content/plugins/gutenberg/build/scripts/i18n/index.min.js", "wp-i18n.min"]
]);

const assetMap = new Map();
const contentAssetMap = new Map();
const directoryMap = new Map();
const pageRouteMap = new Map();
const copiedCss = new Set();
const copiedDirectories = new Set();

const PAGE_FIXES = {
  "en/home-en/s04-en/index.html": {
    extraCssId: "clean-s04-en-page-css",
    sourceCssPath: path.join(SOURCE_ROOT, "_static/index.html..-eJytVNFOwzAM%2FCFClRW2.css"),
    targetCssStem: "page-en-s04",
    sourceElementorId: "3688",
    targetElementorId: "2016",
    insertAfterHrefIncludes: "page-en-s03"
  }
};

const MISSING_ASSET_FALLBACKS = new Map([
  [
    "wp-content/uploads/2022/06/S04-hero-BK-min.jpg",
    "wp-content/uploads/2022/06/BKCenter.jpg"
  ],
  [
    "wp-content/uploads/2022/06/S04-hero-BK-min-1.jpg",
    "wp-content/uploads/2022/06/BKCenter.jpg"
  ]
]);

const RUNTIME_DIRECTORIES = [
  {
    sourcePath: path.join(SOURCE_ROOT, "wp-content/plugins/elementor/assets"),
    targetPath: path.join(OUTPUT_ASSETS, "runtime/elementor-assets")
  },
  {
    sourcePath: path.join(SOURCE_ROOT, "wp-content/plugins/elementor-pro/assets"),
    targetPath: path.join(OUTPUT_ASSETS, "runtime/elementor-pro-assets")
  },
  {
    sourcePath: path.join(SOURCE_ROOT, "wp-content/plugins/elementor-pro/modules"),
    targetPath: path.join(OUTPUT_ASSETS, "runtime/elementor-pro-modules")
  },
  {
    sourcePath: path.join(
      SOURCE_ROOT,
      "wp-content/mu-plugins/wpcomsh/jetpack_vendor/automattic/jetpack-mu-wpcom/src/build"
    ),
    targetPath: path.join(OUTPUT_ASSETS, "runtime/jetpack-mu-wpcom-build")
  },
  {
    sourcePath: path.join(SOURCE_ROOT, "wp-content/uploads"),
    targetPath: path.join(OUTPUT_ASSETS, "images")
  },
  {
    sourcePath: path.join(SOURCE_ROOT, "wp-includes/js"),
    targetPath: path.join(OUTPUT_ASSETS, "runtime/wp-includes-js")
  }
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function resetDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  ensureDir(dirPath);
}

function walk(dirPath, predicate, output = []) {
  if (!fs.existsSync(dirPath)) {
    return output;
  }

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, predicate, output);
    } else if (!predicate || predicate(fullPath)) {
      output.push(fullPath);
    }
  }

  return output;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function hashFor(value) {
  return crypto.createHash("md5").update(value).digest("hex").slice(0, 8);
}

function contentHashFor(sourcePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(sourcePath)).digest("hex").slice(0, 8);
}

function contentKeyFor(sourcePath) {
  const buffer = fs.readFileSync(sourcePath);
  return `${buffer.length}:${crypto.createHash("sha256").update(buffer).digest("hex")}`;
}

function stripQueryAndHash(rawRef) {
  return rawRef.split("#")[0].split("?")[0].replace(/%3f.*$/i, "");
}

function splitRef(rawRef) {
  const match = rawRef.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
  return {
    pathPart: match ? match[1] : rawRef,
    queryPart: match && match[2] ? match[2] : "",
    hashPart: match && match[3] ? match[3] : ""
  };
}

function decodeMirroredRef(rawRef) {
  return stripQueryAndHash(rawRef).replace(/%25/g, "%");
}

function encodeHtmlRef(filePath) {
  return filePath.replace(/%/g, "%25");
}

function safeName(sourcePath, includeHash = true) {
  const parsed = path.parse(sourcePath);
  const stem = parsed.name
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "asset";
  const suffix = includeHash ? `-${hashFor(sourcePath)}` : "";
  return `${stem}${suffix}${parsed.ext.toLowerCase()}`;
}

function isStaticScriptAsset(sourcePath) {
  return STATIC_SCRIPT_ASSETS.has(path.basename(sourcePath));
}

function outputSubdirFor(sourcePath) {
  const ext = path.extname(sourcePath).toLowerCase();
  if (CSS_EXTENSIONS.has(ext) && isStaticScriptAsset(sourcePath)) return "js";
  if (CSS_EXTENSIONS.has(ext)) return "css";
  if (JS_EXTENSIONS.has(ext)) return "js";
  if (FONT_EXTENSIONS.has(ext)) return "fonts";
  if (IMAGE_EXTENSIONS.has(ext)) return "images";
  if (MEDIA_EXTENSIONS.has(ext)) return "media";
  return null;
}

function semanticAssetName(sourcePath, subdir, stem) {
  const ext = subdir === "js" ? ".js" : path.extname(sourcePath).toLowerCase();
  if (subdir === "css" || subdir === "js") {
    return `${stem}${ext}`;
  }

  return `${stem}-${contentHashFor(sourcePath)}${ext}`;
}

function outputAssetName(sourcePath, subdir) {
  if (subdir === "fonts") {
    return path.basename(sourcePath);
  }

  const staticStem = STATIC_ASSET_NAME_STEMS.get(path.basename(sourcePath));
  if (staticStem) {
    return semanticAssetName(sourcePath, subdir, staticStem);
  }

  const relativeSourcePath = toPosix(path.relative(SOURCE_ROOT, sourcePath));
  const jsStem = subdir === "js" ? JS_ASSET_NAME_STEMS.get(relativeSourcePath) : null;
  if (jsStem) {
    return semanticAssetName(sourcePath, subdir, jsStem);
  }

  return safeName(relativeSourcePath, subdir !== "css" && subdir !== "js");
}

function resolveFromRef(contextFilePath, cleanRef) {
  if (cleanRef.startsWith("/")) {
    return path.join(SOURCE_ROOT, cleanRef.replace(/^\/+/, ""));
  }

  return path.resolve(path.dirname(contextFilePath), cleanRef);
}

function resolveLocalRef(contextFilePath, rawRef) {
  if (!rawRef || rawRef.startsWith("#") || rawRef.startsWith("data:") || REMOTE_RE.test(rawRef)) {
    return null;
  }

  const cleanRef = decodeMirroredRef(rawRef);
  if (!cleanRef) {
    return null;
  }

  const resolvedPath = resolveFromRef(contextFilePath, cleanRef);

  if (fs.existsSync(resolvedPath)) {
    return resolvedPath;
  }

  const normalizedTypoRef = cleanRef
    .replace(/\.\.(eot|woff2?|ttf|otf|svg)$/i, ".$1")
    .replace(/(\.eot|\.woff2?|\.ttf|\.otf|\.svg)\./i, "$1");
  if (normalizedTypoRef !== cleanRef) {
    const normalizedTypoPath = resolveFromRef(contextFilePath, normalizedTypoRef);

    if (fs.existsSync(normalizedTypoPath)) {
      return normalizedTypoPath;
    }
  }

  const logoFallback = cleanRef.replace(
    /cropped-Logo_Color-1-(?:180x180|270x270)\.png$/,
    "cropped-Logo_Color-1-192x192.png"
  );

  if (logoFallback !== cleanRef) {
    const fallbackPath = resolveFromRef(contextFilePath, logoFallback);

    if (fs.existsSync(fallbackPath)) {
      return fallbackPath;
    }
  }

  const normalizedCleanRef = cleanRef
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^(?:\.\.\/)+/, "");
  const fallbackRef = [...MISSING_ASSET_FALLBACKS.entries()]
    .find(([missingRef]) => normalizedCleanRef.endsWith(missingRef))?.[1];
  if (fallbackRef) {
    const fallbackPath = path.join(SOURCE_ROOT, fallbackRef);

    if (fs.existsSync(fallbackPath)) {
      return fallbackPath;
    }
  }

  return resolvedPath;
}

function relativeRef(fromDir, targetPath) {
  return toPosix(path.relative(fromDir, targetPath));
}

function pageUrlPathFor(pagePath) {
  const relativePath = toPosix(path.relative(SOURCE_ROOT, pagePath));

  if (relativePath.endsWith("/index.html")) {
    return `/${relativePath.slice(0, -"index.html".length)}`;
  }

  return `/${relativePath}`;
}

function normalizeRoutePath(routePath) {
  const decodedRoute = decodeURIComponent(routePath || "");
  const withLeadingSlash = decodedRoute.startsWith("/") ? decodedRoute : `/${decodedRoute}`;
  return path.posix.normalize(withLeadingSlash).replace(/\/index\.html$/i, "/");
}

function registerPageRoutes(pageFiles) {
  pageRouteMap.clear();

  for (const pagePath of pageFiles) {
    const outputPath = outputPathForPage(pagePath);
    const routePath = pageUrlPathFor(pagePath);
    const normalizedRoute = normalizeRoutePath(routePath);
    const routeWithoutSlash = normalizedRoute.replace(/\/$/, "");

    pageRouteMap.set(normalizedRoute, outputPath);
    pageRouteMap.set(routeWithoutSlash || "/", outputPath);

    if (normalizedRoute.endsWith("/")) {
      pageRouteMap.set(`${routeWithoutSlash}/index.html`, outputPath);
    } else if (normalizedRoute.endsWith(".html")) {
      pageRouteMap.set(normalizedRoute.replace(/\.html$/i, ""), outputPath);
    }
  }
}

function resolvePageRef(contextFilePath, rawRef) {
  if (!rawRef || rawRef.startsWith("#") || rawRef.startsWith("data:") || REMOTE_RE.test(rawRef)) {
    return null;
  }

  if (/^(?:mailto|tel|javascript):/i.test(rawRef)) {
    return null;
  }

  const { pathPart, queryPart, hashPart } = splitRef(rawRef);
  if (!pathPart) {
    return null;
  }

  const contextRoute = pageUrlPathFor(contextFilePath);
  const contextDir = contextRoute.endsWith("/")
    ? contextRoute
    : contextRoute.slice(0, contextRoute.lastIndexOf("/") + 1);
  const resolvedRoute = pathPart.startsWith("/")
    ? pathPart
    : path.posix.normalize(path.posix.join(contextDir, pathPart));
  const normalizedRoute = normalizeRoutePath(resolvedRoute);
  let targetPath = pageRouteMap.get(normalizedRoute) || pageRouteMap.get(normalizedRoute.replace(/\/$/, ""));

  if (!targetPath) {
    const basename = path.posix.basename(pathPart);
    if (basename === "creadit.html") {
      targetPath = pageRouteMap.get("/zh/home/creadit.html");
    } else if (basename === "credits-en.html") {
      targetPath = pageRouteMap.get("/en/home-en/credits-en.html");
    }
  }

  if (!targetPath) {
    return null;
  }

  return { targetPath, queryPart, hashPart };
}

function rewritePageRef(contextFilePath, outputDir, rawRef) {
  const pageRef = resolvePageRef(contextFilePath, rawRef);

  if (!pageRef) {
    return rawRef;
  }

  let rewritten = relativeRef(outputDir, pageRef.targetPath);

  if (!rewritten) {
    rewritten = path.basename(pageRef.targetPath);
  }

  return `${rewritten}${pageRef.queryPart}${pageRef.hashPart}`;
}

function outputRouteForHref(outputPath, rawRef) {
  const { pathPart, queryPart, hashPart } = splitRef(rawRef);
  if (!pathPart) {
    return null;
  }

  const targetPath = path.resolve(path.dirname(outputPath), pathPart);
  let routePath = toPosix(path.relative(OUTPUT_ROOT, targetPath));

  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
    routePath = toPosix(path.relative(OUTPUT_ROOT, path.join(targetPath, "index.html")));
  } else if (!path.extname(targetPath) && fs.existsSync(`${targetPath}.html`)) {
    routePath = `${routePath}.html`;
  }

  return {
    routePath,
    queryPart,
    hashPart
  };
}

function englishRouteForChineseRoute(routePath) {
  const normalized = routePath.replace(/\/index\.html$/i, "").replace(/\/$/, "");
  const routeMap = new Map([
    ["zh/home", "en/home-en/index.html"],
    ["zh/home/s01", "en/home-en/s01-en/index.html"],
    ["zh/home/s02", "en/home-en/s02-en/index.html"],
    ["zh/home/s03", "en/home-en/s03-en/index.html"],
    ["zh/home/s04", "en/home-en/s04-en/index.html"],
    ["zh/home/s05", "en/home-en/s05-en/index.html"],
    ["zh/home/creadit.html", "en/home-en/credits-en.html"]
  ]);

  return routeMap.get(normalized) || null;
}

function rewriteEnglishContentLinks(html, sourcePath, outputPath) {
  if (!toPosix(path.relative(SOURCE_ROOT, sourcePath)).startsWith("en/home-en/")) {
    return html;
  }

  const outputDir = path.dirname(outputPath);

  return html.replace(/<a\b[^>]*\bhref=(["'])([^"']+)\1[^>]*>/gi, (tag, quote, href) => {
    if (/\b(?:href)?lang\s*=/i.test(tag) || !href.includes("zh/home")) {
      return tag;
    }

    const route = outputRouteForHref(outputPath, href);
    if (!route) {
      return tag;
    }

    const englishRoute = englishRouteForChineseRoute(route.routePath);
    if (!englishRoute) {
      return tag;
    }

    const targetPath = path.join(OUTPUT_ROOT, englishRoute);
    const rewritten = `${relativeRef(outputDir, targetPath)}${route.queryPart}${route.hashPart}`;
    return tag.replace(`href=${quote}${href}${quote}`, `href=${quote}${rewritten}${quote}`);
  });
}

function registerAsset(sourcePath) {
  if (!sourcePath || !fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isFile()) {
    return null;
  }

  const subdir = outputSubdirFor(sourcePath);
  if (!subdir) {
    return null;
  }

  if (assetMap.has(sourcePath)) {
    return assetMap.get(sourcePath);
  }

  if (subdir === "images") {
    const contentKey = contentKeyFor(sourcePath);
    const existing = contentAssetMap.get(contentKey);

    if (existing) {
      assetMap.set(sourcePath, existing);
      return existing;
    }
  }

  const targetPath = path.join(OUTPUT_ASSETS, subdir, outputAssetName(sourcePath, subdir));
  const record = { sourcePath, targetPath, subdir };
  assetMap.set(sourcePath, record);

  if (subdir === "images") {
    contentAssetMap.set(contentKeyFor(sourcePath), record);
  }

  return record;
}

function findRuntimeDirectory(sourcePath) {
  if (!sourcePath) {
    return null;
  }

  const normalizedSource = path.resolve(sourcePath);

  return RUNTIME_DIRECTORIES.find((runtimeDirectory) => {
    const root = path.resolve(runtimeDirectory.sourcePath);
    return normalizedSource === root || normalizedSource.startsWith(`${root}${path.sep}`);
  });
}

function registerDirectory(sourcePath) {
  if (!sourcePath || !fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isDirectory()) {
    return null;
  }

  if (directoryMap.has(sourcePath)) {
    return directoryMap.get(sourcePath);
  }

  const runtimeDirectory = findRuntimeDirectory(sourcePath);
  if (!runtimeDirectory) {
    return null;
  }

  const relativePath = path.relative(runtimeDirectory.sourcePath, sourcePath);
  const targetPath = path.join(runtimeDirectory.targetPath, relativePath);
  const record = { sourcePath, rootSourcePath: runtimeDirectory.sourcePath, rootTargetPath: runtimeDirectory.targetPath, targetPath };
  directoryMap.set(sourcePath, record);
  return record;
}

function isLegacyRuntimeFont(sourceFile) {
  const ext = path.extname(sourceFile).toLowerCase();
  if (![".eot", ".svg", ".ttf"].includes(ext)) {
    return false;
  }

  const parts = toPosix(path.relative(SOURCE_ROOT, sourceFile)).split("/");
  return parts.includes("fonts") || parts.includes("webfonts");
}

function copyDirectory(directory) {
  if (copiedDirectories.has(directory.rootSourcePath)) {
    return;
  }

  if (!fs.existsSync(directory.rootSourcePath)) {
    return;
  }

  ensureDir(path.dirname(directory.rootTargetPath));

  const isUploadsRoot = path.resolve(directory.rootSourcePath) === path.resolve(path.join(SOURCE_ROOT, "wp-content/uploads"));

  for (const sourceFile of walk(directory.rootSourcePath)) {
    const relativePath = path.relative(directory.rootSourcePath, sourceFile);
    const subdir = outputSubdirFor(sourceFile);

    if (isUploadsRoot) {
      if (!subdir || subdir === "images" || subdir === "media") {
        continue;
      }
    }

    if (isLegacyRuntimeFont(sourceFile)) {
      continue;
    }

    const targetFile = isUploadsRoot && subdir === "fonts"
      ? path.join(OUTPUT_ASSETS, "fonts", path.basename(sourceFile))
      : path.join(directory.rootTargetPath, relativePath);

    ensureDir(path.dirname(targetFile));
    fs.copyFileSync(sourceFile, targetFile);
  }

  copiedDirectories.add(directory.rootSourcePath);
}

function rewriteCssUrls(cssText, cssSourcePath, cssOutputPath) {
  const cssOutputDir = path.dirname(cssOutputPath);

  return cssText.replace(/url\(([^)]+)\)/g, (match, rawValue) => {
    const quote = rawValue.trim().startsWith("'") ? "'" : rawValue.trim().startsWith('"') ? '"' : "";
    const value = rawValue.trim().replace(/^['"]|['"]$/g, "");
    const sourcePath = resolveLocalRef(cssSourcePath, value);
    const asset = registerAsset(sourcePath);

    if (!asset) {
      return match;
    }

    copyAsset(asset);
    const nextRef = relativeRef(cssOutputDir, asset.targetPath);
    return `url(${quote}${nextRef}${quote})`;
  });
}

function fontFallbackStems(stem) {
  const stems = [stem];

  if (/^times-new-roman-\d+$/i.test(stem)) {
    stems.push("times-new-roman");
  }

  return stems;
}

function fontReplacementRefs(contextFilePath, rawRef) {
  const sourcePath = resolveLocalRef(contextFilePath, rawRef);

  if (!sourcePath || !fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isFile()) {
    return [];
  }

  const ext = path.extname(sourcePath).toLowerCase();
  if (FONT_EXTENSIONS.has(ext)) {
    return [rawRef];
  }

  const { pathPart, queryPart, hashPart } = splitRef(rawRef);
  const refDir = pathPart.includes("/") ? pathPart.slice(0, pathPart.lastIndexOf("/") + 1) : "";
  const sourceDir = path.dirname(sourcePath);
  const sourceStem = path.basename(sourcePath, ext);
  const refs = [];

  for (const stem of fontFallbackStems(sourceStem)) {
    for (const nextExt of [".woff2", ".woff"]) {
      const nextPath = path.join(sourceDir, `${stem}${nextExt}`);

      if (fs.existsSync(nextPath)) {
        refs.push(`${refDir}${stem}${nextExt}${queryPart}${hashPart}`);
      }
    }
  }

  return refs;
}

function fontFormatForRef(ref) {
  const ext = path.extname(stripQueryAndHash(ref)).toLowerCase();
  if (ext === ".woff2") return "woff2";
  if (ext === ".woff") return "woff";
  return null;
}

function rewriteFontFaceBlocks(text, contextFilePath) {
  return text.replace(/@font-face\s*{[^}]*}/gi, (block) => {
    if (!/url\(/i.test(block)) {
      return block;
    }

    const entries = [];
    const seen = new Set();

    for (const match of block.matchAll(/url\(\s*(["']?)([^"')]+)\1\s*\)/gi)) {
      for (const ref of fontReplacementRefs(contextFilePath, match[2])) {
        const format = fontFormatForRef(ref);

        if (!format) {
          continue;
        }

        const key = `${ref}\0${format}`;
        if (seen.has(key)) {
          continue;
        }

        seen.add(key);
        entries.push({ ref, format });
      }
    }

    if (entries.length === 0) {
      return "";
    }

    const src = entries
      .map((entry, index) => `${index === 0 ? "" : "\t\t"}url('${entry.ref}') format('${entry.format}')`)
      .join(",\n");
    const withoutSrc = block.replace(/\s*src\s*:[^;}]+;?/gi, "");

    return withoutSrc.replace(/\s*}\s*$/, `\n\tsrc: ${src};\n}`);
  });
}

function copyAsset(asset) {
  ensureDir(path.dirname(asset.targetPath));

  if (asset.subdir === "css") {
    if (copiedCss.has(asset.sourcePath)) {
      return;
    }

    copiedCss.add(asset.sourcePath);
    const cssText = fs.readFileSync(asset.sourcePath, "utf8");
    const fontCleanedCss = rewriteFontFaceBlocks(cssText, asset.sourcePath);
    fs.writeFileSync(asset.targetPath, rewriteCssUrls(fontCleanedCss, asset.sourcePath, asset.targetPath));
    return;
  }

  fs.copyFileSync(asset.sourcePath, asset.targetPath);
}

function rewriteSingleAssetRef(contextFilePath, outputDir, rawRef) {
  const sourcePath = resolveLocalRef(contextFilePath, rawRef);
  const asset = registerAsset(sourcePath);

  if (asset) {
    copyAsset(asset);
    return encodeHtmlRef(relativeRef(outputDir, asset.targetPath));
  }

  const directory = registerDirectory(sourcePath);

  if (directory) {
    copyDirectory(directory);
    const rewritten = relativeRef(outputDir, directory.targetPath);
    return rawRef.endsWith("/") && !rewritten.endsWith("/") ? `${rewritten}/` : rewritten;
  }

  const runtimeDirectory = findRuntimeDirectory(sourcePath);
  if (runtimeDirectory) {
    copyDirectory({
      rootSourcePath: runtimeDirectory.sourcePath,
      rootTargetPath: runtimeDirectory.targetPath
    });
    const relativePath = path.relative(runtimeDirectory.sourcePath, sourcePath);
    const targetPath = path.join(runtimeDirectory.targetPath, relativePath);
    const rewritten = relativeRef(outputDir, targetPath);
    return rawRef.endsWith("/") && !rewritten.endsWith("/") ? `${rewritten}/` : rewritten;
  }

  return rawRef;
}

function rewriteSrcset(contextFilePath, outputDir, rawSrcset) {
  return rawSrcset
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const parts = entry.split(/\s+/);
      const rewritten = rewriteSingleAssetRef(contextFilePath, outputDir, parts[0]);
      return [rewritten, ...parts.slice(1)].join(" ");
    })
    .join(", ");
}

function rewriteHtmlCssUrls(html, contextFilePath, outputDir) {
  return html.replace(/url\(([^)]+)\)/g, (match, rawValue) => {
    const quote = rawValue.trim().startsWith("'") ? "'" : rawValue.trim().startsWith('"') ? '"' : "";
    const value = rawValue.trim().replace(/^['"]|['"]$/g, "");
    const rewritten = rewriteSingleAssetRef(contextFilePath, outputDir, value);

    if (rewritten === value) {
      return match;
    }

    return `url(${quote}${rewritten}${quote})`;
  });
}

function collapseSingleImageSrcsets(html) {
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const shouldCollapse = [...SINGLE_IMAGE_SRCSET_STEMS].some((stem) => tag.includes(stem));

    if (!shouldCollapse) {
      return tag;
    }

    return tag
      .replace(/\s+srcset=("([^"]*)"|'([^']*)')/i, "")
      .replace(/\s+sizes=("([^"]*)"|'([^']*)')/i, "");
  });
}

function rewriteEscapedLocalRefs(html, sourcePath, outputPath) {
  const outputDir = path.dirname(outputPath);

  return html.replace(/(?:\.\.(?:\\\/|\/))+(?:wp-content|wp-includes|_static)(?:(?:\\\/|\/)[^&"'<>]+)*/g, (escapedRef) => {
    const unescapedRef = escapedRef.replace(/\\\//g, "/");
    const rewritten = rewriteSingleAssetRef(sourcePath, outputDir, unescapedRef);

    if (rewritten === unescapedRef) {
      return escapedRef;
    }

    return rewritten.replace(/\//g, "\\/");
  });
}

function rewritePlainEmbeddedLocalRefs(html, sourcePath, outputPath) {
  const outputDir = path.dirname(outputPath);

  return html.replace(/(?:\.\.\/)+(?:wp-content|wp-includes|_static)(?:\/[^&"'<>\\\s,)]+)*/g, (plainRef) => {
    const rewritten = rewriteSingleAssetRef(sourcePath, outputDir, plainRef);
    return rewritten === plainRef ? plainRef : rewritten;
  });
}

function rewriteHtmlAttributes(html, sourcePath, outputPath) {
  const outputDir = path.dirname(outputPath);
  let rewritten = collapseSingleImageSrcsets(html);

  rewritten = rewritten.replace(/\s(href|src|poster|content)=("([^"]*)"|'([^']*)')/gi, (match, attr, quoted, doubleQuoted, singleQuoted) => {
    const value = doubleQuoted || singleQuoted || "";
    const pageValue = attr.toLowerCase() === "href"
      ? rewritePageRef(sourcePath, outputDir, value)
      : value;
    const nextValue = pageValue === value
      ? rewriteSingleAssetRef(sourcePath, outputDir, value)
      : pageValue;
    const quote = quoted.startsWith('"') ? '"' : "'";
    return ` ${attr}=${quote}${nextValue}${quote}`;
  });

  rewritten = rewritten.replace(/\ssrcset=("([^"]*)"|'([^']*)')/gi, (match, quoted, doubleQuoted, singleQuoted) => {
    const value = doubleQuoted || singleQuoted || "";
    const nextValue = rewriteSrcset(sourcePath, outputDir, value);
    const quote = quoted.startsWith('"') ? '"' : "'";
    return ` srcset=${quote}${nextValue}${quote}`;
  });

  rewritten = rewriteFontFaceBlocks(rewritten, sourcePath);
  rewritten = rewriteHtmlCssUrls(rewritten, sourcePath, outputDir);
  rewritten = rewriteEscapedLocalRefs(rewritten, sourcePath, outputPath);
  rewritten = rewritePlainEmbeddedLocalRefs(rewritten, sourcePath, outputPath);
  return rewriteEnglishContentLinks(rewritten, sourcePath, outputPath);
}

function writeElementorPageCssFix(fix) {
  if (!fs.existsSync(fix.sourceCssPath)) {
    return null;
  }

  const targetCssPath = path.join(
    OUTPUT_ASSETS,
    "css",
    semanticAssetName(fix.sourceCssPath, "css", fix.targetCssStem)
  );

  ensureDir(path.dirname(targetCssPath));
  const sourceCss = fs.readFileSync(fix.sourceCssPath, "utf8");
  const fontCleanedCss = rewriteFontFaceBlocks(sourceCss, fix.sourceCssPath);
  const rewrittenCss = rewriteCssUrls(fontCleanedCss, fix.sourceCssPath, targetCssPath)
    .replace(new RegExp(`\\belementor-${fix.sourceElementorId}\\b`, "g"), `elementor-${fix.targetElementorId}`);
  fs.writeFileSync(targetCssPath, rewrittenCss);
  return targetCssPath;
}

function applyPageFixes(html, sourcePath, outputPath) {
  const relativePagePath = toPosix(path.relative(SOURCE_ROOT, sourcePath));
  const fix = PAGE_FIXES[relativePagePath];

  if (!fix || html.includes(`id='${fix.extraCssId}'`) || html.includes(`id="${fix.extraCssId}"`)) {
    return html;
  }

  const cssPath = writeElementorPageCssFix(fix);
  if (!cssPath) {
    return html;
  }

  const href = encodeHtmlRef(relativeRef(path.dirname(outputPath), cssPath));
  const tag = `<link rel='stylesheet' id='${fix.extraCssId}' href='${href}' type='text/css' media='all' />`;
  const hrefNeedle = fix.insertAfterHrefIncludes.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pageStyleMatch = new RegExp(`(<link[^>]+id=['"]all-css-[^'"]+['"][^>]+href=['"][^'"]+${hrefNeedle}[^'"]+['"][^>]*>\\s*)`, "i");

  if (pageStyleMatch.test(html)) {
    return html.replace(pageStyleMatch, `$1${tag}\n`);
  }

  return html.replace(/(<style id=['"]jetpack-global-styles-frontend-style-inline-css['"]>)/i, `${tag}\n$1`);
}

function outputPathForPage(pagePath) {
  return path.join(OUTPUT_ROOT, path.relative(SOURCE_ROOT, pagePath));
}

function buildPages(pageFiles) {
  for (const pagePath of pageFiles) {
    const outputPath = outputPathForPage(pagePath);
    ensureDir(path.dirname(outputPath));
    const html = fs.readFileSync(pagePath, "utf8");
    const rewritten = applyPageFixes(rewriteHtmlAttributes(html, pagePath, outputPath), pagePath, outputPath);
    fs.writeFileSync(outputPath, rewritten);
  }
}

function copyAllFonts() {
  const fontFiles = walk(SOURCE_ROOT, (filePath) => FONT_EXTENSIONS.has(path.extname(filePath).toLowerCase()));

  for (const fontPath of fontFiles) {
    const asset = registerAsset(fontPath);
    if (asset) {
      copyAsset(asset);
    }
  }
}

function validateLocalAssets(pageFiles) {
  const missing = [];

  function checkRef(outputPath, outputDir, ref) {
    if (!ref || ref.startsWith("#") || ref.startsWith("data:") || REMOTE_RE.test(ref)) {
      return;
    }

    const clean = stripQueryAndHash(ref.replace(/\\\//g, "/")).replace(/%25/g, "%");
    const ext = path.extname(clean).toLowerCase();
    if (!outputSubdirFor(clean) && !clean.includes("/assets/")) {
      return;
    }

    const resolved = path.resolve(outputDir, clean);
    if (!fs.existsSync(resolved)) {
      missing.push(`${path.relative(OUTPUT_ROOT, outputPath)} -> ${ref}`);
    }
  }

  for (const pagePath of pageFiles) {
    const outputPath = outputPathForPage(pagePath);
    const outputDir = path.dirname(outputPath);
    const html = fs.readFileSync(outputPath, "utf8");

    for (const match of html.matchAll(/\s(?:href|src|poster|content)=["']([^"']+)["']/gi)) {
      checkRef(outputPath, outputDir, match[1]);
    }

    for (const match of html.matchAll(/\ssrcset=["']([^"']+)["']/gi)) {
      for (const entry of match[1].split(",")) {
        const ref = entry.trim().split(/\s+/)[0];
        checkRef(outputPath, outputDir, ref);
      }
    }

    for (const match of html.matchAll(/(?:\.\.(?:\\\/|\/))+(?:assets(?:\\\/|\/)[^&"'<>\\\s,)]+)/g)) {
      checkRef(outputPath, outputDir, match[0]);
    }
  }

  return missing;
}

function main() {
  resetDir(OUTPUT_ROOT);

  const pageFiles = PAGE_ROOTS
    .flatMap((pageRoot) => walk(pageRoot, (filePath) => path.extname(filePath).toLowerCase() === ".html"))
    .sort();

  registerPageRoutes(pageFiles);
  buildPages(pageFiles);
  copyAllFonts();

  const robotsPath = path.join(SOURCE_ROOT, "robots.txt");
  if (fs.existsSync(robotsPath)) {
    fs.copyFileSync(robotsPath, path.join(OUTPUT_ROOT, "robots.txt"));
  }

  const missing = validateLocalAssets(pageFiles);
  console.log(`Built ${pageFiles.length} pages into ${path.relative(PROJECT_ROOT, OUTPUT_ROOT)}`);
  console.log(`Copied ${assetMap.size} local assets`);

  if (missing.length > 0) {
    console.log("Missing local asset references:");
    for (const item of missing) {
      console.log(`- ${item}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("All rewritten local asset references resolved.");
}

main();
