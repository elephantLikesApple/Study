import fs from 'fs';

fs.writeFileSync(
    'stream_out.txt',
    'bye',
    {
        encoding:'utf-8'
    }
); // 입력이 끝날 때까지 기다려서 콜백함수가 필요없다

console.log('done');