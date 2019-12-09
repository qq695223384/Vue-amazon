# Main.js公共配置开发笔记

**一.axios配置公共类**

1.引入axios

2.Vue.prototype.$http = axios

3.之后在其他组件，即可使用this.$http来引用axios

**二.axios接口地址**

1.axios.defaults.baseURL = 'http://localhost:8888/api/private/v1' 

  将接口地址前缀部分写入main.js 

2.之后在其他组件,即可使用/users 最后的不同名字即可

**三.axios拦截器(类似导航守卫)**

1.配置公共token ，之后就无需再写token

```
if (!config.url.endsWith('/login')) {
  config.headers['Authorization'] = localStorage.getItem('token')
}   return config
})
   2.添加拦截器
   axios.interceptors.response.use(function(response) {
  // 在获取到响应数据的时候做一些事情
  // console.log('响应拦截器', response)
  if (response.data.meta.status === 401) {
    // 因为现在不是在组件中,因此无法通过 this.$router 来访问到路由实例
    // 但是，可以直接通过上面导入的路由模块中的 router （路由实例）来访问到路由对象
    router.push('/login')
    localStorage.removeItem('token')
  }

  return response
})
```



------



# Login登录功能开发笔记

###### 登录页面（Login.vue）

**一.写好页面和样式  （利用UI）**

**二.写好规则（利用UI）**

**三.写方法，发送请求methods  （忘记可查看代码或者菜鸟教程axios）**  


关键词：axios，

1.查看接口文档的请求方式(post,get)

2.将请求地址放进请求方式里(post,get)

3.获取用户名和密码数据(const {data, meta} = res.data)

4.对登录状态进行判断  成功状态：200，

   获取成功时的token，用于做导航守卫（可打印时查看）

   然后跳转下个页面（查看VUE ROUTER文档，关键词push）

   失败时：反馈错误信息在页面（利用UI）

**四.导航守卫**

1.在index.js页面中  创建个router 将组件信息放进去

2.创建导航守卫规则（查看VUE ROUTER文档）

   如果等于当前设定的页面，无需拦截

   如果不等于当前设定页面：得到token，对token进行判定

   有token  跳转下个页面，无token返回设定的页面

------

# BackHome后台首页功能开发笔记

###### 后台页面（BackHome.vue）

**一.写好页面和样式（利用UI）**

**二.写好规则（利用UI）** 

**三.退出后台登录功能**

​    确认框确定是否退出后台

​    确定退出，清除token，并跳回登录页面

------



# Users后台局部组件列表功能开发笔记

###### 用户列表（Users.vue）

**一.在主页面(BackHome)设置路由出口和组件地址**

1.页面中设置路由出口

<el-main><router-view></router-view></el-main>

2.在页面的index中引入局部组件的地址/backhome/users

**二.在路由router中的index,js中设置backhome下的子路由**

关键词:children

```
{
  path: '/backhome',
  component: BackHome,
  children: [
    {
      path: 'users',
      component: Users
    }
  ]
}
```

**三.写好页面和样式（利用UI）****

**四.写好规则（利用UI）**** 

**五.写方法，发送请求met**hods  （忘记可查看代码或者菜鸟教程axios）**  

关键词：axios，

1.查看接口文档的请求方式(post,get)

2.将请求地址放进请求方式里(post,get)

3.获取页数(params)

4.写请求头（headers）获取token值将其传入请求头

   then 获取用户名和密码数据(const {data, meta} = res.data)

   对登录状态进行判断  成功状态：200，

   将数据列表反馈到页面

5.页面data值修改为对应的列表接口

将页面的每个prop改写成对应的数据接口

将假数据清除，并在数据头修改对应的列表接口

```
data() {
  return {
    userList: []
  }
```

###### 搜索功能（Users.vue）

**一.写好页面和样式（利用UI)**

**二.用搜索按钮添加点击事件**

1.在搜索框中绑定一个获取输入内容的名字 如v-model="queryStr"

  script:在data中，将queryStr设置为空

2.然后在axios中设置query:this.queryStr||''

3.之后在queryStr方法中，调用axios

  并将页面重置为第一页 this.curPage=1

###### 添加功能（Users.vue）

**一.写好页面和样式（利用UI)**

**二.给添加用户按钮添加一个事件，让其窗口显示**

在方法中，点击按钮 让表单显示 this.userAddDialog=true

**三.将表单的每个输入框的绑定更改为对应的接口**

 script:在data中，也将其修改为对应的接口名字

并添加其添加用户对应的规则，可参考Login的登录规则

**四.表单中的确定按钮添加一个事件**

1.在方法中，对表单的输入的内容进行判断是否符合规则

注意：在页面中model里面的单词,要与<code>ref</code>一样，否则会出现validate未定义

关键词validate

```
this.$refs.userAddForm.validate(valid =>{
  if (valid){
    console.log("成功")

  }
    else{
      console.log("失败")
      return false

  }

  }
  2.对表单验证成功状态，加入axios请求
  
    对状态201进行判断，将数据渲染到页面，调用之前列表方法this.getUsersList()
```

对状态400进行判断，对其进行错误提示

###### 编辑功能（Users.vue）

**一.写好页面和样式（利用UI)**

**二.给添加用户按钮添加一个事件，让其窗口显示**

1.在方法中，点击按钮 让表单显示 this.userEditDialog=true

2.并且获取数据展现在窗口中 在编辑按钮那获取数据



@click="showUserEditDialog(scope.row)"

 for (const key in this.userEditForm){
          this.userEditForm[key]=curUser[key]
        }

   **三.在其窗口确定按钮，添加事件editUser**  

   1.对表单验证进行判断，成功状态 获取对应接口的值， 调用axios 用put方法获取到接口

   2.对状态200进行判断，成功状态寻找其对应接口，并关闭其接口

######    删除功能（Users.vue）

一.给添加用户按钮添加一个事件delUserById，让其窗口显示

​    在方法中，将窗口写入，之后再其后面写入axios，

   获取请求地址和请求方式。

  之后获取对应的值meta,对状态200进行判断，成功状态更新页面，并将页面重置为第一页

# Lights后台局部组件权限列表开发笔记

###### 列表功能（Lights.vue）

**一.写好页面和样式  （利用UI）**

**二.写好规则（利用UI）**

​       **三.发送axios请求**

1.获取data,meta

对状态200进行判断，将表格接口数据渲染到页面

2.将数字反应为对应的要求

```
<template slot-scope="scope">
  <span v-if="scope.row.level==='0'">一级</span>
  <span v-else-if="scope.row.level==='1'">二级</span>
  <span v-else>三级</span>
</template>
```

# Roles后台局部组件角色列表开发笔记

###### 列表功能（Roles.vue）

**一.写好页面和样式  （利用UI）**

**二.写好规则（利用UI）***

**三.发送axios请求****

1.创建一个名字出来，用来发送axios方法

2.获取data,meta

对状态200进行判断，将表格接口数据渲染到页面

###### 编辑功能（Roles.vue）

**一.写好页面和样式  （利用UI）**

**二.在data中写对应接口的初始值**

```
form: {
  id: -1,
  roleName: '',
  roleDesc: ''
}
```

**三.将其窗口dialog展示出来，并在里面遍历**

```
showRoleEditDialog (curRole) {
  this.roleEditDialog = true
  for (const key in this.form) {
    this.form[key] = curRole[key]
  }
},
```

**四.点击“确认”按钮进行修改**

1.获取对应的ID和所需的接口值

2.发送axios方法，用PUT方法

3。对状态200进行判断，将表格接口数据渲染到页面

###### 权限展示（Roles.vue）

**一.写好页面和样式  （利用UI）**

**二.对权限列表进行遍历**

1.用v-for遍历第一层，之后在第一层里面遍历第二层，之后在第二层里面遍历第三层，并且传入KEY

```
v-for="level1 in scope.row.children" :key="level1.id"
```

**三.删除权限**

1.在每一层里加入一个事件

2.获取权限列表的ID

3.发送axios请求

获取其ID,

对状态200进行判断，将表格接口数据渲染到页面



###### 权限修改（Roles.vue）

**一.写好页面和样式  （利用UI）**

二.对窗口dialog进行展示

三.创建一个名字出来，用来发送axios方法

获取对应接口地址，对状态 200进行判断，将数据渲染到页面

四.对"确定"按钮添加一个事件

1.获取树形结构的属性值，查看elements对应方法

2.获取其ID

3.对状态200进行判断，将数据渲染到页面