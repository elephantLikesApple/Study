import http from 'http';
import {URL} from 'url';

const port = 8090;

http.createServer((req, res) => {

    //console.log(req.headers);
    let _myCustomHeader = req.headers['my-custom-header'];
    console.log('my header : ' + _myCustomHeader);
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

    let method = req.method; //GET인지 POS인지 구분

    if(method === 'GET') { // GET 처리
        // 주소에 데이터 넘어옴 ( 2MB까지 )
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
    }
    else if (method === 'POST') { // POST 처리
        // 주소에 인자가 오지 않음. -> body에 인자가 넘어온다
        // body : 헤더 이후에 개행문자 두개연속 뒤에 나오는 데이터(용량제한 X -> 비동기 처리)
        if(urlObj.pathname === '/echo') { // echo 요쳥을 처리
            let body_data ='';
            req.on('data',(playlod)=> { // 데이터를 받는 부분::데이터가 한번에 오지 않을수도 있다.
                body_data += playlod;
            })
            req.on('end', ()=> { // 데이터 전송이 끝났을 때 동작~
                result.data = body_data;
                result.myheader = _myCustomHeader;
                res.end(JSON.stringify(result)); // 꼭!! 데이터가 다 받아졌을 때 동작해야하기 때문에 여기에 위치
            })
        }
    }

    


}).listen(port);

console.log(`listen : ${port}`);

// curl 요청 예시
// curl -X POST -d "hello" -H 'my-custom-header':'hello' http://192.168.1.106:8090/echo
// -X : method POST/GET 선택
// -d : 전달 데이터(body에 있는 데이터) data
// -H : 헤더를 전송 key:data