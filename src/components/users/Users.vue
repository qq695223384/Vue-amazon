<template>
  <div class="users">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/backhome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="void:">用户列表</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="10">
        <el-input class="input-with-select" placeholder="请输入用户名" v-model="queryStr">
          <el-button @click="queryUserList" icon="el-icon-search" slot="append"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3"> <el-button @click="showUserAddDialog" class="add-user" round type="warning">添加用户</el-button></el-col>
    </el-row>

    <el-table
      :data="userList"
      stripe
    style="width: 100%">
      <el-table-column
        label="姓名"
        prop="username"
        width="180"
      >

      </el-table-column>
      <el-table-column label="电话" prop="mobile" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)"
            size="mini">编辑</el-button>
          <el-button
            @click="handleDelete(scope.$index, scope.row)"
            size="mini"
            type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page.sync="curPage"
      :page-size="pageSize"
      :total="total"
      @current-change="currentPage"
      background
      layout="prev, pager, next"
    >
    </el-pagination>
    <el-dialog :visible.sync="userAddDialog" title="添加用户">
      <el-form :model="userAddForm" :rules="userAddRules" ref="userAddForm">
        <el-form-item  :label-width="formLabelWidth" label="用户名" prop="username">
        <el-input autocomplete="off" v-model="userAddForm.username"></el-input>
      </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="密码" prop="password">
          <el-input autocomplete="off" v-model="userAddForm.password"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="电话">
          <el-input autocomplete="off" v-model="userAddForm.mobile"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="用户权限">
          <el-select placeholder="请选择权限" v-model="userAddForm.role_id">
            <el-option label="主管" value="30"></el-option>
            <el-option label="程序员" value="42"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="userAddDialog = false">取 消</el-button>
        <el-button @click="userAdd" type="primary">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    created(){
      this.getUsersList()


    },

    data() {
      return {
        userList: [],
        pageSize:3,
        curPage:1,
        total:60,
        queryStr:'',
        // input1: '',
        // input2: '',
        // input3: '',
        // select: '',
        userAddDialog:false,
        userAddForm: {
            username: '',
            password: '',
            mobile: '',
            role_id: '',
            // delivery: false,
          // type: [],
          // resource: '',
          // desc: ''
        },
        formLabelWidth: '120px',
        userAddRules:{
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ],

        }

      }
    },
    methods: {
      getUsersList(curPage=1){
        this.$http
          .get(
            '/users',{
              params:{
                pagenum:curPage,
                pagesize:3,
                query:this.queryStr||''

              },
              headers:{
                Authorization:localStorage.getItem('token')
              //Authorization为接口提供，必须获取token否则没有权限
              }
            }
          )
          .then(res => {
            console.log(res)
            const { data, meta } = res.data
            if (meta.status === 200) {
              // 获取数据成功
              this.userList = data.users
              this.total=data.total
            }
          })

        },
      currentPage(curPage){
        console.log(curPage)
        this.getUsersList(curPage)
      },
      queryUserList(){
        console.log(this.queryStr)
        this.curPage=1
        this.getUsersList()

      },
      showUserAddDialog(){
        this.userAddDialog=true
      },
      userAdd(){
        this.$refs.userAddForm.validate(valid =>{
          if (valid){
            console.log("成功")

          }
            else{
              console.log("失败")
              return false

          }

          }

        )
      },


      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .breadcrumb{
    line-height: 30px;
  }
  .add-user{
    margin-left: 20px;
  }
</style>
