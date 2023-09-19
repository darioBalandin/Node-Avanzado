
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const start=new Date();
console.log('Numero hilos USADOS',process.env.UV_THREADPOOL_SIZE);

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash', Date.now() - start);
    });
}
function doRequest() {
    https.request('https://www.google.es', res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    }).end();
}
doRequest();


doHash();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
});

