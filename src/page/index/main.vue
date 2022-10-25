<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
            :default-active="active"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
         >
          <el-menu-item index="1">系统管理</el-menu-item>
<!--          <el-menu-item index="2" >订单管理</el-menu-item>-->
<!--          <el-menu-item index="3" >商品管理</el-menu-item>-->
          <el-menu-item index="4">统计分析</el-menu-item>
          <el-menu-item index="5">

                <span v-if="username=='游客'"><router-link to="/login">登录</router-link></span>
                <span v-if="username!='游客'" @click="logout" style="color:#2d8cf0;text-decoration-line: underline">退出</span>

          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="1"
              class="el-menu-vertical-demo">
            <el-sub-menu index="1">
              <template #title>
                <el-icon> </el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item-group >
                <el-menu-item index="1-1" @click="goTo('/user/user_list')">用户管理</el-menu-item>
                <el-menu-item index="1-2"  @click="goTo('/role/user_role_list')">角色管理</el-menu-item>
                <el-menu-item index="1-3"  @click="goTo('/org/org_list')">部门管理</el-menu-item>
                <el-menu-item index="1-4"  @click="goTo('/menu/menu_list')">菜单管理</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
<!--            <el-sub-menu index="2">-->
<!--              <template #title>-->
<!--                <el-icon> </el-icon>-->
<!--                <span>订单管理</span>-->
<!--              </template>-->
<!--              <el-menu-item-group >-->
<!--                <el-menu-item index="2-1">订单查询</el-menu-item>-->
<!--              </el-menu-item-group>-->

<!--            </el-sub-menu>-->
<!--            <el-sub-menu index="3">-->
<!--              <template #title>-->
<!--                <el-icon> </el-icon>-->
<!--                <span>商品管理</span>-->
<!--              </template>-->
<!--              <el-menu-item-group >-->
<!--                <el-menu-item index="3-1">商品上架</el-menu-item>-->
<!--              </el-menu-item-group>-->

<!--            </el-sub-menu>-->
          </el-menu>
        </el-aside>
        <el-main>

          <div>
            <router-view></router-view>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import store from "@/store"

export default {
  data() {
    return {
      active: "1",
      username:'游客'
    }
  },
  methods:{
    logout() {
      this.$confirm("是否退出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("LogOut").then(() => {
          this.$router.push({path: "/login"});
        });
      });
    },
    goTo(path){
      this.$router.push(path);
    }

  },

  created() {

    if(store.state.user.userInfo.username!=null){
      this.username = store.state.user.userInfo.username
    }
  }
}
</script>

