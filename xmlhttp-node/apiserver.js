const http  = require("http");
const fs = require("fs");
const server = http.createServer(function(req,res){
    //http://www.baidu.com/
    // GET 参数 url
    // POST 参数
    console.log(req,req.url);
    if(req.url ==='/'){
        const html = fs.readFileSync('./index.html','utf8');//同步处理
        res.end(html);
    }else if(req.url ==='/getPosts'){
        // 没有返回
    }
    let posts = [
        {title:'js',star:1000},
        {title:'php',star:2000}
    ]
    res.end(JSON.stringify(posts))
})
server.listen(8080,function(){
    console.log('server is running 8080');
})