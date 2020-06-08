## state状态
```js
let isLogin = false;
// login-component组件之中
isLogin = true;
// login-component
isLogin = false;
// 支付

isLogin = 123;
检查isLogin
```


## redux
设计了一套修改我们state 的流程(单项)
在我们修改变量的过程中加入了一些环节,状态的改变变得更可控(函数式编程)

## 