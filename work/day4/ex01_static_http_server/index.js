import http from 'http'; // http
import fs from 'fs'; // 파일 시스템
import {URL} from 'url' // 주소 파싱을 위한 url객체 사용 !표준! {}는 따로 export한 것(무슨소리?)

const port = 8080; // 사용할 포트 번호

// http 정적 웹 서버 생성
http.createServer((req, res) => {

    console.log(req.url);
    console.log(req.method); // GET, POST 구분
    const urlObj = new URL(
        req.url,
        "http://exam.com" // url 상대경로일 경우 앞에다가 붙이는 주소
    )
    
    console.log(urlObj.pathname);

    let header = {
        'Content-Type' : 'text/html'
    }

    // 파일경로 완성
    let _path = './www' + urlObj.pathname;
    console.log(_path);
    
    try{ // 서버 응답
        let data = fs.readFileSync(_path);
        res.writeHeader(200, header); // 200: 요청을 성공적으로 받았다.
        res.end(data); 
    }
    catch(e) {
        header['Content-Type'] = 'text/plain'
        res.writeHeader(200, header); // 200: 요청을 성공적으로 받았다.
        res.end('file not found');
    }


}).listen(port);

console.log(`listen port ${port}`);
