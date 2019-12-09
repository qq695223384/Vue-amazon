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
      <el-col :span="3">
        <el-button @click="showUserAddDialog" class="add-user" round type="warning">添加用户</el-button>
      </el-col>
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
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button
            @click="showUserEditDialog(scope.row)"
            size="mini">编辑
          </el-button>
          <el-button
            @click="delUserById(scope.row.id)"
            size="mini"
            type="danger">删除
          </el-button>
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
    <el-dialog :visible.sync="userAddDialog" title="添加用户" @close="closeUserAddDialog">
      <el-form :model="userAddForm" :rules="userAddRules" ref="userAddForm">
        <el-form-item :label-width="formLabelWidth" label="用户名" prop="username">
          <el-input autocomplete="off" v-model="userAddForm.username"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="密码" prop="password">
          <el-input autocomplete="off" v-model="userAddForm.password"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="电话" prop="mobile">
          <el-input autocomplete="off" v-model="userAddForm.mobile"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="用户权限" prop="role_id">
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
    <el-dialog :visible.sync="userEditDialog" title="编辑用户">
      <el-form :model="userEditForm" :rules="userEditRules" ref="userEditForm">
        <el-form-item disabled  :label-width="formLabelWidth" label="用户名" prop="username">
          <el-input v-model="userEditForm.username"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="电话" prop="mobile">
          <el-input v-model="userEditForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  :label-width="formLabelWidth" label="用户权限" prop="role_id">
          <el-select disabled placeholder="请选择权限" v-model="userEditForm.role_name">
            <el-option label="主管" value="30"></el-option>
            <el-option label="程序员" value="42"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="userEditDialog = false">取 消</el-button>
        <el-button @click="editUser" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    created () {
      this.getUsersList()

    },

    data () {
      return {
        userList: [],
        pageSize: 3,
        curPage: 1,
        total: 60,
        queryStr: '',
        // input1: '',
        // input2: '',
        // input3: '',
        // select: '',
        userAddDialog: false,
        userAddForm: {
          username: '',
          password: '',
          mobile: '',
          role_id:'',
          // delivery: false,
          // type: [],
          // resource: '',
          // desc: ''
        },
        formLabelWidth: '120px',
        userAddRules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ],
          mobile: [
            {
              pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
              message: '手机号码格式不正确',
              // 如果需要在值改变或者失去焦点的时候，都触发验证，可以传递两个
              // trigger: 'change, blur'

              // 当前值改变，就会触发
              trigger: 'blur'
            }
          ]

        },
        userEditDialog: false,
        userEditForm: {
          id:-1,
          username: '',
          mobile: '',
          role_name: '',
          roles:''
          // delivery: false,
          // type: [],
          // resource: '',
          // desc: ''
        },
        userEditRules: {
          mobile: [
            {
              pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
              message: '手机号码格式不正确',
              // 如果需要在值改变或者失去焦点的时候，都触发验证，可以传递两个
              // trigger: 'change, blur'

              // 当前值改变，就会触发
              trigger: 'blur'
            }
          ]

        }

      }
    },
    methods: {
      getUsersList (curPage = 1) {
        this.$http
          .get(
            '/users', {
              params: {
                pagenum: curPage,
                pagesize: 3,
                query: this.queryStr || ''

              },
              headers: {
                Authorization: localStorage.getItem('token')
                //Authorization为接口提供，必须获取token否则没有权限
              }
            }
          )
          .then(res => {
            console.log(res)
            const {data, meta} = res.data
            if (meta.status === 200) {
              // 获取数据成功
              this.userList = data.users
              this.total = data.total

            }

          })

      },
      currentPage (curPage) {
        console.log(curPage)
        this.getUsersList(curPage)
      },
      queryUserList () {
        console.log(this.queryStr)
        this.curPage = 1
        this.getUsersList()

      },
      showUserAddDialog () {
        this.userAddDialog = true
      },
      showUserEditDialog(curUser){

        console.log(curUser)
        for (const key in this.userEditForm){
          this.userEditForm[key]=curUser[key]
        }
        this.userEditDialog = true
      },
      userAdd () {
        this.$refs.userAddForm.validate(valid => {
            if (valid) {
              console.log('成功')
              this.$http
                .post('/users', this.userAddForm)
                .then(res => {
                    console.log(res)
                  const {meta}=res.data
                  if (meta.status===201){
                    this.userAddDialog = false
                    this.getUsersList()
                  }
                  if (meta.status === 400) {
                    // 获取数据成功
                    console.log(meta.msg)
                    this.$message({
                      type: 'warning',
                      message: meta.msg,
                      duration: 1000
                    })
                  }
                  }
                )

            } else {
              console.log('失败')
              return false

            }

          }
        )
      },
      closeUserAddDialog () {
        this.$refs.userAddForm.resetFields()
      },
      editUser(){
        this.$refs.userEditForm.validate(valid => {
          if (valid){
            const{id,mobile,username}=this.userEditForm
            console.log("成功")
            this.$http
              .put(`/users/${id}`,{
                mobile,
                username
              })
              .then(res=>{
                console.log(res)
                const {data,meta}=res.data
                if (meta.status===200){
                  console.log("更新成功")
                  const editUser=this.userList.find(item=>item.id===id)
                  editUser.mobile=data.mobile
                  editUser.username=data.username
                  this.userEditDialog=false
                }
              })

          } else {
            console.log("失败")
            return false
          }
        })
      },
      delUserById (id) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$http
            .delete(`users/${id}`)
            .then(res=>{
              console.log(res)
              const {meta}=res.data
              if (meta.status===200) {
                this.$message({
                  type: 'success',
                  message: meta.msg,
                });
                this.getUsersList()
                this.curPage=1
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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

  .breadcrumb {
    line-height: 30px;
  }

  .add-user {
    margin-left: 20px;
  }
</style>
