// const fs = require('fs');
import fs from ('fs'); //writeFile - writeFileSync / readFile - readFileSync
const src = fs.createReadStream('stream_in.txt');
const dest = process.stdout;

src.pipe(dest);