<template>
  <div class="Login">
    <title>Amazon登录</title>
    <el-row type="flex" class="row-bg" justify="center" align="middle">
      <el-col :span="6">

        <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        ruleForm: {
          username: 'admin',
          password: '123456',
        },
        rules: {
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
      login () {
        axios
          .post('http://localhost:8888/api/private/v1/login', this.ruleForm)
          .then(res => {
              // console.log(res)
              const {data, meta} = res.data
              // console.log(data)
              if (meta.status === 200) {
                console.log('登录成功')
                localStorage.setItem('token',data.token)
                this.$router.push('/home')
              } else {
                console.log(meta.msg)
                this.$message({
                  type: 'error',
                  message: meta.msg,
                  duration: 1000
                })
              }

            }
          )

      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.login()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>
  .Login,.row-bg{
    height: 100%;
  }
</style>
