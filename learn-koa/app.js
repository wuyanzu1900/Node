const http = require('http');//node的内置模块
// web编程的基石HTTP协议
http.createServer((req,res)=>{
    // req web访问者通过浏览器访问
    // res 服务器 通过服务器返回数据
    if(req.url === '/'){
        //设置响应头
        res.writeHead(200,{'Content-type':'text/html;charset=utf8'})//200是请求码，200请求成功，404未找到
        res.end('刘琦')
    }else if(req.url === 'about'){
        res.end('朱明')
    }
    
})
.listen(1314)