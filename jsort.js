// JSON をソート & pretty して上書き
const fs = require("fs");
const jsonabc = require("jsonabc");

const path = process.argv[2];
if (!fs.existsSync(path)) {
  console.error("file not exist");
  return;
}

const jsonObj = JSON.parse(fs.readFileSync(path));
const jsonTxt = JSON.stringify(jsonabc.sortObj(jsonObj), null, 2);

fs.writeFileSync(path, jsonTxt);
