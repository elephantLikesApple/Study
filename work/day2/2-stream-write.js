const fs = require('fs');
const dest = fs.createWriteStream('stream_out.txt');
const src = process.stdin;

src.pipe(dest);