7天后blog网站
Koa 加速了node web开发 一个服务就是web app
koa在3000端口提供http协议
https://127.0.0.1:3000  图解HTTP

http.createServer()
ctx 约定俗成的 context上下文环境(request response)
http协议诞生于1991，一开始用于传输学术论文
采用基于请求(ctx.request)响应(ctx.response)的模式，在网络间传输HTML超文本的内容

HTTP/0.9版本 1991年

-HTTP(web server应用程协议)基于TCP(transport Control Protocol)协议 
TCP用户 网站 阿里云(IP)传输
应用层 HTTP
TCP连接 三次握手
表示层
会话层
传输层 TCP
网络层
数据链入层
物理层

- 建立连接后，会发送一个GET(request method GET url /)请求行的信息，
GET /  template.html

- 服务器接收到请求信息后，读取对应的html文件，并将数据以ASC码的形式返回给用户请求的浏览器
- 最后断开连接


- http req+res 可以完成一次请求
HTTP协议 基于请求应答模型
- writeHead在做什么事情
- req和res有什么关系

关系是n:1的关系
n太大 产生高并发 node天生优势就是支持高并发(异步)
createServer  I/O file 数据库
php(同步 阻塞) python
带宽 100mb/s
req  res 请求对象  返回对象
请求头       响应头
GO 多核计算

HTTP 网络通信协议  TCP  7层
流动  node流
建立一个通信管道(传输控制协议)，stream
GET/请求行
关闭行

- head 在http是什么

- img 不可以显示
1. img是一个资源，http访问的协议