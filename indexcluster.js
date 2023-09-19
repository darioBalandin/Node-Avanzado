const cluster = require('cluster');

cluster.schedulingPolicy = cluster.SCHED_RR;
if(cluster.isMaster){
    console.log(`Master ${process.pid} started`);
    cluster.fork();
    cluster.fork();
    cluster.fork();


} else {
const express = require('express');
const app = express();



function doWork(duration) {

    const start = Date.now();
    while(Date.now() - start < duration) {}

}

app.get('/', (req, res) => {

    doWork(5000);
    res.end(`Process ${process.pid} says hello!`);
    }
);

app.get('/fast', (req,res)=>{

    res.end(`Process ${process.pid} says hello!`);


});

app.listen(3000, () => console.log('Listening on port 3000'));

}