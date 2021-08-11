const http = require('http'); // 요즘은 import써요, require안 써요

const http_server = http.createServer((req, res) => {
    console.log("user-commin-url : "+req.url);
    res.end("hello http server!");
});

http_server.listen(8080);

console.log('start http server at 8080');