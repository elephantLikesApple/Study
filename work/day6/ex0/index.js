import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV); // cross-env가 넘겨준 것
console.log(process.env.MONGODB_URL); // dotenv가 넘겨준 것
console.log(process.env.MONGODB_PORT); // dotenv가 넘겨준 것

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
    if(process.env.NODE_ENV == "dev") {
        console.log(`Example app listening at http://localhost:${port}`);
    }
})