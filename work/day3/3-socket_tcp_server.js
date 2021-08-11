//net -> http, ftp, ssh, smtp
import net from 'net';

const port = 8070;

const tcp_server = net.createServer((_client) =>{
    //packet 처리

    _client.on('data', (playload) => {
        //playload에 data가 담겨있음 (뭔소리야)
        console.log(playload + "");
        _client.write('ok');
        _client.destroy();
    })

    _client.on('close', () => {
        console.log('closed');
    })
}).listen(port);

console.log(`server listen ${port}`);