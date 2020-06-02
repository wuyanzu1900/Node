const fs = require('fs');

function copy(sourceUrl,destUrl){
    // fs.readFile(sourceUrl,(err,info)=>{
    // if(!err){
    //     fs.writeFile(destUrl,info,(err)=>{
    //         if(!err){
    //             console.log('拷贝完毕')
    //         }
    //     })
    // }
    // })
    // 可读流/可写流 源头 转换流
    // 流：基础类 stream
    const readStream = fs.createReadStream(sourceUrl);
    const writeStream = fs.createReadStream(destUrl);
    readStream.pipe(writeStream);
}
// 不用流：
// 读取一个文件得到内容  info变量放到计算机内存里的  把写到某个地方
// 区别
// 前端：用户访问baidu.com->html,css,js 浏览器->用户看到页面内容
// 浏览器执行js，浏览器会申请内存  浏览器在各自的电脑上运行  天然就是分布式  (集中)
// 高并发


// 后端  baidu.com  一台服务器(linux电脑)需要处理很多请求
copy('./README.md','./copy.md')