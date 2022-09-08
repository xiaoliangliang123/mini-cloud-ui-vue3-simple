<template>

  <div>


    <el-form
        label-position="left"
        label-width="100px"
        :model="userForm"
        style="max-width: 660px">

      <el-form-item>
        <el-upload
            class="avatar-uploader"
            action="/files/files"
            :show-file-list="false"
            :headers="headerObj"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <img v-if="userForm.imageUrl" :src="userForm.imageUrl" class="avatar"/>
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>

        </el-upload>
      </el-form-item>
      <el-form-item label="用户名称">
        <el-input v-model="userForm.username"/>
      </el-form-item>
      <el-form-item label="用户实名">
        <el-input v-model="userForm.realname"/>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="userForm.nickname"/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="userForm.mobile"/>
      </el-form-item>
      <el-form-item label="角色">
        <el-tag
            style="margin-right: 10px"
            v-for="tag in userForm.userRoles"
            :key="tag"
            class="mx-1"
            closable
            :disable-transitions="false"
            @close="removeTag(tag)"
        >{{ tag }}
        </el-tag>
        <el-select v-model="value" filterable placeholder="Select" @change="handSelectRole">
          <el-option
              v-for="item in roles"
              :key="item.roleId"
              :label="item.roleName"
              :value="item.roleCode"
          >
            <span style="float: left">{{ item.roleName }}</span>
            <span
                style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;
        "
            >{{ item.roleCode }}</span
            >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saveOrEdit()">保存</el-button>
    <el-button type="success" @click="backToList()">返回</el-button>
  </div>
</template>

<script>
import {getObj, saveOrEdit,queryAllRoles} from "@/api/sys/role";
import {ElNotification} from 'element-plus'
import store from '@/store'


export default {
  name: "user_add",
  data() {
    return {

      roles:[],
      headerObj: {
        Authorization: 'Bearer ' + store.getters.access_token
      },
      userForm: {
        imageUrl: '',
        userId: '',
        username: '',
        realname: '',
        nickname: '',
        mobile: '',
        userRoles: []
      }
    }
  },
  created() {

    this.userForm.userId = this.$route.params.userId;
    if (this.userForm.userId == 'new') {
      this.userForm.userId = null;
    } else {
      this.getObj();
    }


  },
  methods: {

    handSelectRole(val){
      if(this.userForm.userRoles.indexOf(val)<0) {
        this.userForm.userRoles.push(val);
      }
    },
    removeTag(tag) {
      this.userForm.userRoles.splice(this.userForm.userRoles.indexOf(tag),1)

    },
    handleAvatarSuccess(response) {
      this.userForm.imageUrl = '/files/files?filename=' + response;
    },
    beforeAvatarUpload() {
    },
    queryRoles(){
      queryAllRoles().then(res=>{
         this.roles = res.data;
      })
    },
    getObj() {
      let that = this;
      getObj(this.userForm.userId).then(response => {
        that.userForm.userId = response.data.userId
        that.userForm.username = response.data.username;
        that.userForm.realname = response.data.realname;
        that.userForm.nickname = response.data.nickname;
        that.userForm.mobile = response.data.mobile;
      }).catch(err => {
        console.log(err)
      })
    },

    backToList() {
      this.$router.push('/user/user_list');
    },
    success(title) {
      ElNotification({
        title: title,
        message: "操作成功",
        position: 'bottom-right',
        type: 'success'
      })
    },
    saveOrEdit() {
      let that = this;
      saveOrEdit(this.userForm).then(response => {

        if (response.status == 200) {
          that.userForm.userId = response.data;
          that.success('保存成功');
        }
        console.log(JSON.stringify(response));
      }).catch(err => {
        console.log(err)
      });
    }
  },
  mounted() {
    this.queryRoles();
  }
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>