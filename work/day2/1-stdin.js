process.stdin.resume(); // keybord input
process.stdin.setEncoding('utf-8');
const util = require('util'); // 입력을 화면에 출력

process.stdin.on('data', function(text) {
    console.log(`echo : ${text}`); // 그냥 따옴표 아니고 ~ 키보드 누르면 나오는 역따옴표
    // console.log('echo : ' + text);
    
    if(text === 'exit\r\n') { // 맥은 'exit/n' 으로. 개행문자를 같이 처리해줘야 함.같은 문제가 생기면 앞에 \r 붙여보기!
        process.exit();
    }
});