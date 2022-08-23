<template>
  <div>

    <div style="margin: 20px"/>
    <el-form
        label-position="left"
        label-width="100px"
        :model="roleForm"
        style="max-width: 460px">
      <el-form-item label="角色名称">
        <el-input v-model="roleForm.roleName"/>
      </el-form-item>
      <el-form-item label="角色编码">
        <el-input v-model="roleForm.roleCode"/>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input v-model="roleForm.roleDesc"/>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saveOrEdit()">保存</el-button>
    <el-button type="success" @click="backToList()">返回</el-button>

  </div>

</template>

<script>
import {saveOrEdit} from "@/api/sys/role"
import { ElMessage } from 'element-plus'

export default {
  name: "user_role_add",
  data() {
    return {

      roleForm: {
        roleId:'',
        roleName:'',
        roleCode:'',
        roleDesc:''
      }
    }
  },
  created() {
    debugger
    this.roleForm.roleId = this.$route.params.roleId;
    if(this.roleForm.roleId =='new'){
      this.roleForm.roleId = null;
    }
  },
  methods:{
    backToList(){
      this.$router.push('/role/user_role_list');
    },
    saveOrEdit(){
      let that = this;
      saveOrEdit(that.roleForm).then(response=>{
        if(response.status ==200){
          this.roleForm.roleId = response.data;
          ElMessage({
            message: '操作成功',
            type: 'success',
          })
        }
        console.log(JSON.stringify(response));
      }).catch(err=>{
        console.log(err)
      });
    }
  }
}
</script>

<style scoped>

</style>