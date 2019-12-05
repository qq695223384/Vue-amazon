<template>
<div class="backhome">
  <title>后台首页管理页面</title>
  <el-container class="back-wrapper">
    <el-header><el-row>
      <el-col :span="1"><a href="/"><div class="login"></div></a></el-col>
      <el-col :span="18"><div class="title">后台首页管理页面</div></el-col>
      <el-col :span="5">  <el-button type="text" @click="open">退出</el-button>
      </el-col>
    </el-row></el-header>
    <el-container>
      <el-aside width="202px">
        <el-col :span="12">
          <el-menu
            :router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
<!--            index=1-1 设置点击高亮-->
            <el-submenu index="1-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <!--     局部组件设置-->
                <el-menu-item index="/backhome/users">用户列表</el-menu-item>

                <el-menu-item index="1-2">用户添加</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">订单列表</el-menu-item>
                <el-menu-item index="2-2">订单添加</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('是否退出后台首页系统？？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.removeItem('token')
          this.$router.push('/login')
          this.$message({
            type: 'info',
            message: '已退出后台首页系统，返回登录页面'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消'
          });
        });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /*text-align: center;*/
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    padding: 0;

  }

  .back-wrapper {
    margin-bottom: 40px;
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .login {

    width: 90px;
    height: 40px;
    background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) -10px -120px no-repeat;
    /*display: inline-block;*/
    padding-left: 0;
    margin-top: 10px;

  }
  .title{
    font-size: 30px;
    text-align: center;
    line-height: 55px;
    padding-left: 20%;
    color: black;

  }
  .el-button{
    background-color: black;
    width: 100px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
