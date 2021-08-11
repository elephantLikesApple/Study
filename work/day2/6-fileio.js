import fs from 'fs';

let data = fs.readFileSync(
    'stream_in.txt',
    {
        encoding:'utf-8'
    }
);
console.log(data);

data = fs.readFile(
    'stream_in.txt',
    {
        encoding:'utf-8'
    },
    function (err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log('ok');
            console.log(data);
        }
    }
);
