

# Login登录功能开发笔记（第一天）

登录页面（Login.vue）

一.写好页面和样式  （利用UI）

二.写好规则（利用UI）

三.写方法，发送请求methods  （忘记可查看代码或者菜鸟教程axios）  


关键词：axios，

1.查看接口文档的请求方式(post,get)

2.将请求地址放进请求方式里(post,get)

3.获取用户名和密码数据(const {data, meta} = res.data)
4.对登录状态进行判断
   成功状态：200，

   获取成功时的token，用于做导航守卫（可打印时查看）

   然后跳转下个页面（查看VUE ROUTER文档，关键词push）

   失败时：反馈错误信息在页面（利用UI）

四.导航守卫
1.在index.js页面中  创建个router 将组件信息放进去

2.创建导航守卫规则（查看VUE ROUTER文档）

   如果等于当前设定的页面，无需拦截

   如果不等于当前设定页面：得到token，对token进行判定

   有token  跳转下个页面，无token返回设定的页面