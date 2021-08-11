import net from 'net';

const host = 'localhost';
const port = 8070;

// 소캣 생성
const socket = new net.Socket();

// 접속 시도 host는 서버 ip주소..
socket.connect(port, host, () => {
    // 접속 성공하면...
    socket.write('hello\r\n', 'utf-8', ()=>{
        console.log('send message');
    })

});

socket.on('data', (playload)=> {
    console.log('recv from server : ' + playload);
});

socket.on('close', ()=>{
    console.log('closed');
});