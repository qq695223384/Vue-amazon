<template>
  <div class="lights">
    <el-page-header content="权限管理">
    </el-page-header>
    <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="authName"
        label="权限管理"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="权限信息"
        width="180">
      </el-table-column>
      <el-table-column
        prop="level"
        label="层级">
        <template slot-scope="scope">
          <span v-if="scope.row.level==='0'">一级</span>
          <span v-else-if="scope.row.level==='1'">二级</span>
          <span v-else>三级</span>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        tableData: []
      }
    },

    created () {
      this.getRightsList()
    },

    methods: {
      async getRightsList () {
        const res = await
          this.$http.get('/rights/list')
        const {data, meta} = res.data
        if (meta.status === 200) {
          this.tableData = data
        }
      }
    }
  }
</script>

<style scoped>

</style>
