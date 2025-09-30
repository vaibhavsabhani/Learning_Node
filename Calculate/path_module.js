const path = require('path');
console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, 'Calculate', 'multiply.js');
console.log(filePath);

const base = path.basename(filePath);
const ext = path.extname(filePath);
const dir = path.dirname(filePath);
const parse = path.parse(filePath);
const isAbsolute = path.isAbsolute(filePath);
const relative = path.relative(__dirname, filePath);

console.log({base, ext, dir, parse, isAbsolute, relative});