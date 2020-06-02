const https = require('https');
const fs = require('fs');
https.get('https://movie.douban.com/top250', function (res) {
    console.log(res);//继承了流 可读流 提供数据那一方
    //html hrml保存为本地douban.html
    const writeStream = fs.createWriteStream('./douban.html');
    res.pipe(writeStream)
//     let html = '';
//     // 一次性接受所有的数据 一次性交给我们
//     // 分段
//     res.on('data', function (chunk) {
//         html = html + chunk;
//     })
//     console.log(123456789);
//     res.on('end', function () {
//         console.log(html);
//     });
});