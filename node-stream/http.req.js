const fs = require('fs');
const http = require('http');
const request = require('request');
request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'));
http.createServer((req,res)=>{
    // console.log(req);
    const writeStream = fs.createWriteStream('./params.txt');
    req.pipe(writeStream);
    res.end('ok');
    // GET:数据放到URL里
    // POST：数据放到body里
})
.listen(8088,()=>{
// console.log('8088');

})