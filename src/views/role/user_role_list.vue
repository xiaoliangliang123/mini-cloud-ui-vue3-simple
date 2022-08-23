<template>
<div style="width: 100%">
  <div>
    <el-container>

      <el-main>
        <el-button type="success" @click="handleAdd()">新建</el-button>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="roleName" label="角色名称" width="180" />
          <el-table-column prop="roleCode" label="角色编码" width="180" />
          <el-table-column prop="roleDesc" label="角色描述" width="220" />
          <el-table-column fixed="right" label="Operations" width="220">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="handleDel(scope.row)">删除</el-button>
              <el-button link type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

  </div>
</div>
</template>


<script>
import {queryList} from "@/api/sys/role"

export default {
  name: "user_role_list",
  data(){
    return {
      tableData : [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      form: {},
      listLoading: true,

    }
  },
  created() {
     this.queryRoles();
  },
  methods:{
    goTo(path){
      this.$router.push(path);
    },
    handleAdd(){
      this.goTo('/role/user_role_add/new');
    },
    handleEdit(row){
      this.goTo('/role/user_role_add/'+row.roleId);
    },
    handleDel(row){

      console.log(row.roleId);
    },
    queryRoles(){
      let that = this;
      queryList().then(response=>{
        that.tableData = response.data.data;
      }).catch(err=>{
        console.log(err)
      });
    }
  }


}
</script>

