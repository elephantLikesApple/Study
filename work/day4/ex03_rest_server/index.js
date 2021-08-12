import http from 'http';
import {URL} from 'url';

const port = 8090;

http.createServer((req, res) => {

    const urlObj = new URL(
        req.url,
        'http://ex.com'
    );

    console.log(`pathname : ${urlObj.pathname}`);
    console.log(`search : ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);

    let result = {
        result: 'ok'
    }
    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        'Access-Control-Allow-Headers': '*',
    }
    res.writeHead(200, header);

    if (urlObj.pathname === "/echo") { // echo 요청을 처리
        let _title = urlObj.searchParams.get('title');
        let _msg = urlObj.searchParams.get('msg');
        
        result._title = _title;
        result._msg = _msg;
    }
    else if (urlObj.pathname === "/sum") { // sum 요청을 처리
        let num1 = urlObj.searchParams.get('a');
        let num2 = urlObj.searchParams.get('b');

        result.calc = (num1*1) + (num2*1);
    }
    else if (urlObj.pathname === "/sub") { // sub 요청을 처리
        let num1 = urlObj.searchParams.get('a');
        let num2 = urlObj.searchParams.get('b');

        result.calc = (num1*1) - (num2*1);
    }
    else if (urlObj.pathname === "/avg") { // avg 요청을 처리
        
        let num1 = urlObj.searchParams.get('a');
        let num2 = urlObj.searchParams.get('b');
        let num3 = urlObj.searchParams.get('c');
        let num4 = urlObj.searchParams.get('d');
        let num5 = urlObj.searchParams.get('e');

        result.calc = ((num1*1) + (num2*1) + (num3*1) + (num4*1) + (num5*1)) / 5
    }
    /// else if문이 많아지면 swith case문을 쓰는 것이 적절하다.

    res.end(JSON.stringify(result));

}).listen(port);

console.log(`listen : ${port}`);