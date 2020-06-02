const Koa = require('koa'); // 请上KOA 
const app = new Koa(); // web server 
const fs = require('fs')//node 内置模块 file sysstem
const func = ctx =>{
    console.log('func');
    ctx.response.body = 'func';
}
const main = ctx  => {
  console.log(ctx.request,'--------');
//   ctx.response.body = 'Hello World';
    ctx.response.type = 'html';//响应头
    // 网络分层,做一个大网站，返回一个html文件（MVC view）
    // 协议 操作系统（内存node 文件系统）
    const html = fs.readFileSync('./template.html','utf-8');
    // fs.readFile('./template.html','utf-8',function(err,data){
    //     console.log(data);
        ctx.response.body = html;
    // })
    // console.log(html);
    // ctx.response.body = html;//发送出去 
}
// app.use(func);
app.use(main);//启用了一个服务  给访问者request用
app.listen(3000); 