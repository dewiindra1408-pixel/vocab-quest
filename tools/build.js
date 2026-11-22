// Menyusun index.html dari src/app.html + src/data.js
// Cara pakai:  node tools/build.js
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const tpl = fs.readFileSync(path.join(root, "src", "app.html"), "utf8");
const data = fs.readFileSync(path.join(root, "src", "data.js"), "utf8");
if (!tpl.includes("/*DATA*/")) throw new Error("Penanda /*DATA*/ tidak ditemukan di src/app.html");
fs.writeFileSync(path.join(root, "index.html"), tpl.replace("/*DATA*/", () => data));
console.log("index.html berhasil dibuat (" + Math.round(fs.statSync(path.join(root, "index.html")).size / 1024) + " KB)");
