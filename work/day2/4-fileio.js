import fs from "fs";

fs.writeFile(
    'stream_out.txt',  // 파일이름
    'hello',  // 데이터
    {
    encoding : 'utf-8' // 인코딩 지정
    },
    function(err) { // 콜백함수 - 파일 입력이 끝나면 나옴
        if(err) {
            console.log(err);
        }
        else {
            console.log('ok');
        }
    }
);

console.log('done');