/* =========================================================================
   Electron shell for the curriculum site.

   The site is served from an in-process HTTP server on a fixed loopback
   port rather than loaded over file://. A fixed origin means the browser's
   localStorage (which holds lesson, exercise, and quiz progress) persists
   across launches.

   External links, such as the YouTube videos, open in the default browser.
   ========================================================================= */

"use strict";

const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("node:path");
const fs = require("node:fs");
const http = require("node:http");
const HUB = require("./catalog.js");

const ROOT = __dirname;
const PREFERRED_PORT = 47615;
const PORT_CANDIDATES = [PREFERRED_PORT, 47616, 47617, 47618, 47619];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".md": "text/plain; charset=utf-8"
};

let server = null;
let origin = null;

/* ----------------------------- static server ----------------------------- */
function handleRequest(req, res) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
  } catch (err) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad request");
    return;
  }

  // A trailing slash means a directory, so serve its index.html.
  if (pathname === "" || pathname.endsWith("/")) pathname += "index.html";

  const filePath = path.join(ROOT, path.normalize(pathname));

  // Keep every request inside the project directory.
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found: " + pathname);
      return;
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(data);
  });
}

function startServer(ports) {
  return new Promise((resolve, reject) => {
    const tryPort = (index) => {
      if (index >= ports.length) {
        reject(new Error("No free port for the local site server."));
        return;
      }
      const candidate = http.createServer(handleRequest);
      candidate.once("error", (err) => {
        if (err.code === "EADDRINUSE") {
          tryPort(index + 1);
        } else {
          reject(err);
        }
      });
      candidate.listen(ports[index], "127.0.0.1", () => {
        server = candidate;
        resolve(ports[index]);
      });
    };
    tryPort(0);
  });
}

/* ------------------------------- window -------------------------------- */
function appIcon() {
  const ico = path.join(ROOT, "build", "icon.ico");
  return fs.existsSync(ico) ? ico : undefined;
}

function buildMenu() {
  const template = [
    {
      label: "File",
      submenu: [{ role: "quit" }]
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" },
        { role: "toggleDevTools" }
      ]
    },
    {
      label: "Go",
      submenu: buildGoMenu()
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

let mainWindow = null;

function openPath(p) {
  if (mainWindow && origin) mainWindow.loadURL(origin + p);
}

function buildGoMenu() {
  const items = [{ label: "Home", click: () => openPath("/") }];
  const available = (HUB.courses || []).filter((c) => c.status === "available");

  /* Optional per-course quick links, keyed by course id. Courses without an
     entry get a plain Overview link. */
  const QUICK_LINKS = {
    "linear-regression-to-deepseek": [
      { label: "Phase 6: DeepSeek architecture", hash: "#/phase/p6" },
      { label: "Phase 7: Deployment", hash: "#/phase/p7" }
    ]
  };

  available.forEach((course) => {
    const submenu = [{ label: "Overview", click: () => openPath("/" + course.path + "#/") }];
    (QUICK_LINKS[course.id] || []).forEach((link) => {
      submenu.push({ label: link.label, click: () => openPath("/" + course.path + link.hash) });
    });
    items.push({ type: "separator" });
    items.push({ label: course.shortTitle || course.title, submenu });
  });

  items.push({ type: "separator" });
  items.push({ label: "Open project folder", click: () => shell.openPath(ROOT) });
  return items;
}

async function createWindow() {
  const port = await startServer(PORT_CANDIDATES);
  origin = "http://127.0.0.1:" + port;

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 880,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: "#f5f6fa",
    title: "Learning Hub",
    icon: appIcon(),
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => { mainWindow = null; });

  // Open external links (the YouTube videos) in the user's browser.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (origin && url.startsWith(origin)) return;
    event.preventDefault();
    if (/^https?:/i.test(url)) shell.openExternal(url);
  });

  await mainWindow.loadURL(origin + "/");
  buildMenu();
}

/* ------------------------------ lifecycle ------------------------------- */
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(createWindow).catch((err) => {
    console.error(err);
    app.quit();
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on("window-all-closed", () => {
    if (server) server.close();
    app.quit();
  });
}
