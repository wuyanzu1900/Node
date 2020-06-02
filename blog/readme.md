- 博客网站，还欠缺哪些技能
react 做UI组件化思维
- 列表
- 详情页
- 评论
node做后端， 后台数据库  mysql mongodb
不用后台数据库向应用提供数据
- 爬取 cherrio
- MVC  Model(Mysql)-View(react)-Controller(Node)
可以实现增删改查 但不启用mysal这么繁琐

JSON 是数据格式，前后端交流的首推格式
- 简单服务的话，json文件中作为资源，代替数据库
使用json-server来启动他 restful api 格式
/posts post {id:,title:.content:}

面试题：
/posts/show/1 看某篇文章的URL
不能有动词 改成  /posts/1  show的概念由谁来表达？
/ GET动词
/posts POST
设计一个URL
汇款需求  从账户1向账户2汇款500元如何设计？
/accounts/:1/transfer/:520/to/:2
restful 动词 + url

/transform 转账 POST
{from:1,to:2,amount:500.00}



