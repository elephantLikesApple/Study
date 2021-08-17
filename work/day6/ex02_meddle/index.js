import express from 'express';
import dotenv from 'dotenv';
import {logger, autholize, testmw_1, testmw_2} from './mw.js';
dotenv.config();

const app = express();

// const logger = (req, res, next) => {
//     console.log(req.method, req.url, (new Date()).toISOString());
//     next();
// }

// const autholize = (req, res, next) => {
//     if(req.query.apikey == 'qwer') {
//         next()
//     }
//     else {
//         res.send('<h1>로그인이 필요한 서비스입니다.</h1>');
//     }
// }

app.use(logger);
app.use(autholize); // 전역 스코프
// app.use([logger, autholize]) //배열로 다수 미들웨어를 넘길 수 있다.
app.use('/home', testmw_1); // home 스코프
app.use('/about', testmw_2); // about 스코프

// app.use((req, res, next) => {
//     console.log(req.method, req.url, (new Date()).toISOString());
//     next();
// })

// app.use((req, res, next) => {
//     // 인증된 사용자를 받는 미들웨어
//     if(req.query.apikey == 'qwer') {
//         next();
//     }
//     else {
//         res.send('<h1>로그인이 필요한 서비스입니다.</h1>');
//     }
// })

app.get('/home', (req, res) => {
    res.send('<h1>home page</h1>');
})

app.get('/home/welcome', (req, res) => {
    res.send('<h1>welcome</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>');
})

// use 쓰지 않고 직접 미들웨어 등록하기
app.get('/blog',
    (req, res, next) => { // 미들웨어 임배딩
        console.log('blog middel ware');
        next();
    }, 
    (req, res) => { // 콜백
        res.send('<h1>blog</h1>');
})

app.listen(process.env.PORT, ()=>{
    console.log(`server start at ${process.env.PORT}`);
})