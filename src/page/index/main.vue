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
          <el-menu-item :key="index" v-for="(item,index) in topMenus" :index="index" @click="topMenu(item)">
            {{ item.name }}
          </el-menu-item>
          <!--          <el-menu-item index="2" >订单管理</el-menu-item> -->
          <!--          <el-menu-item index="3" >商品管理</el-menu-item>-->
          <!--          <el-menu-item index="4">统计监控</el-menu-item>-->
          <el-menu-item index="10">

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
            <el-sub-menu :index="subIndex" v-for="(subMenu,subIndex) in leftMenus" :key="subIndex">
              <template #title>
                <el-icon></el-icon>
                <span>{{ subMenu.name }}</span>

              </template>
              <el-menu-item-group>
                <el-menu-item  :index="index" v-for="(menu,index) in subMenu.children" :key="index" @click="goTo(menu)" >{{ menu.name }}</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

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
import {useRouter} from 'vue-router'

export default {
  name: "main-view",
  data() {
    return {
      active: "1",
      username: '游客',
      topMenus: [],
      currentTopMenu: null,
      leftMenus: []
    }
  },
  methods: {
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
    topMenu(item) {

      this.currentTopMenu = item;
      this.leftMenus = this.currentTopMenu.children;
    },
    goTo(item) {
      this.$router.push(item.path);
    }

  },
  mounted() {

    const Router = useRouter();
    console.log(Router.options.routes);
    this.topMenus = Router.options.routes.filter(function (item) {
      return (item.tag != 'indefined' && item.tag == 'top');
    })
    this.currentTopMenu = this.topMenus[0];
    this.leftMenus = this.currentTopMenu.children;

  },
  created() {

    if (store.state.user.userInfo.username != null) {
      this.username = store.state.user.userInfo.username
    }
  }
}
</script>

