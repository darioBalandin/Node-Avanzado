const cluster = require('cluster');
const crypto = require('crypto');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hi there')
    });
});

app.get('/fast', (req,res)=>{

    res.end(`Process ${process.pid} says hello!`);


});

app.listen(3000, () => console.log('Listening on port 3000'));


