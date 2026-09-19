/* =========================================================================
   Electron 40+ no longer ships a postinstall that downloads the runtime, so
   `npm install` alone leaves node_modules/electron without a binary.

   This runs Electron's installer itself. It deliberately launches the Node
   that is running npm (`npm_node_execpath`) rather than relying on whatever
   `node` happens to be first on the script PATH, so the download still works
   when an older Node is earlier on PATH.
   ========================================================================= */

"use strict";

const { spawnSync } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");

const installer = path.join(__dirname, "..", "node_modules", "electron", "install.js");

if (!fs.existsSync(installer)) {
  console.log("postinstall: electron installer not found; skipping.");
  process.exit(0);
}

const node = process.env.npm_node_execpath || process.execPath;
const result = spawnSync(node, [installer], { stdio: "inherit" });

if (result.error) {
  console.error("postinstall: failed to launch Electron installer:", result.error.message);
  process.exit(1);
}
process.exit(result.status === null ? 1 : result.status);
