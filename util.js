const fs = require("fs");
const path = require("path");

const serverDir = "server";
const finalDir = "appscript";
const distDir = "dist";
const htmlFile = "index.html";

fs.copyFileSync(path.resolve(__dirname,distDir,htmlFile),path.resolve(__dirname,finalDir,htmlFile));

const serverFiles = fs.readdirSync(path.resolve(__dirname,serverDir));

serverFiles.forEach(f => {
    fs.copyFileSync(path.resolve(__dirname,serverDir,f),path.resolve(__dirname,finalDir,f));
});

console.log("files copied successfully to ./appscript");