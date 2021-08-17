import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.NODE_ENV);

const app = express(); // singleton객체 : instance가 딱 1개 존재하는 객체
const port = 8080;

app.use(express.static('./www')) // 정적 웹서비스 미들웨어 등록
app.use('/text', express.static('./text')) // 텍스트 파일에 대한 미들웨어 등록

app.get('/api/v1/hello', (req, res) => {
    // res.send('hello exporess');
    res.json({r:'ok', info:'hello backend'})
    // res
    // .set('Content-Type', 'application/json')
    // .status(200)
    // .send(JSON.stringify({r:ok, info:'hello backend'}))
})

app.get('/api/v1/addUser/name/:name/age/:age', (req, res)=>{ 
    res.json({
        r:'ok',
        type: 'parameter',
        name: req.params.name,
        age: parseInt(req.params.age)
    })
})

app.get('/api/v1/addUser', (req, res) => {
    res.json({
        r:'ok', 
        type: 'query',
        name: req.query.name, 
        age: parseInt(req.query.age)
    })
})

app.get('/help', (req,res)=>{
    res
    .set('Content-Type', 'text/html') //mine 타입 지정
    .status(200)
    .send('<h1>Help</h1>')
})

app.all('*', (req, res) => {
    // 지정해주지 않은 URL에 대해 작동
    res
    .status(404)
    .send(`page not found at ${req.url}`);
})

app.listen(process.env.PORT, ()=> {
    console.log(`server start at : ${process.env.PORT}`);
})