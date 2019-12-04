<template>
  <div class="users">
    <el-table
      :data="userList"
      style="width: 100%"
    stripe>
      <el-table-column
        prop="create_time"
        label="日期"
        width="180">
<!--        <template slot-scope="scope">-->
<!--          <i class="el-icon-time"></i>-->
<!--          <span style="margin-left: 10px">{{ scope.row.date }}</span>-->
<!--        </template>-->
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180"
        prop="role_name"
      >

      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
        userList: []
      }
    },
    methods: {
      getUsersList(){
        this.$http
          .get(
            '/users',{
              params:{
                pagenum:1,
                pagesize:3
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
            }
          })

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

<style scoped lang="less">

</style>
