import express from 'express';
const app = express();

const server_port = 8080;
app.use(express.static('./www/')); // 정적 웹사이트 지정

app.get('/hello', (req, res) => {
    
    res.send('Hi express');
})


app.listen(server_port)