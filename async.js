const https= require ('https')
const OS = require('os')
const start= Date.now();
console.log(OS.cpus().length);
console.log('Numero hilos USADOS',process.env.UV_THREADPOOL_SIZE)
function doRequest() {
    https.request('https://www.google.es', res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    }).end();
}
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
