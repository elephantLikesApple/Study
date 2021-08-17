import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

// middle ware
const rawBody = (req, res, next) => {
    if(req.method == 'POST') {
        req.body='';
        req.setEncoding('utf-8');
        req.on('data', (playload) => {
            //console.log(playload);
            req.body += playload;
        })
        req.on('end', () => {
            // body parsing..
            // let _bodyToken = req.body.split('=');
            // req.body = {}
            // req.body[_bodyToken[0]] = _bodyToken[1]
            //console.log(req.body);
            next();
        })
    }
    else {
        next(); // post가 아니면 body를 만들지 않고 그냥 next
    }
}

//app.use('/api/v1', [express.urlencoded({extended:false})]);
app.use(express.static('../www'));

// method
app.post('/api/v1/hello', rawBody, (req, res) => {
    res.json({r:'ok', body: req.body});
})

//ssr 방식
app.post('/api/v1/addUser', express.urlencoded({extended:false}), (req, res) => {
    res.json({r:'ok', name: req.body.name, age: req.body.age});
})
// csr 방식
app.post('/api/v2/addUser', express.json(), (req, res) => {
    res.json({r:'ok', name:req.body.name, age:parseInt(req.body.age)});
})


app.listen(process.env.PORT, () => {
    if(process.env.NODE_ENV == 'dev') {
        console.log(`server start at : ${process.env.PORT}`);
    }
})

