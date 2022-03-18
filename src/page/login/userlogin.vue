<template>
  <div>
    <el-form
        class="login-form"
        status-icon
        :rules="loginRules"
        :model="loginForm"
        ref="loginForm"
        label-width="0"
    >
      <el-form-item prop="username">
        <el-input
            size="small"
            v-model="loginForm.username"
            auto-complete="off"
            placeholder="请输入用户名"
        >
          <i class="icon-yonghu"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            size="small"
            :type="passwordType"
            v-model="loginForm.password"
            auto-complete="off"
            placeholder="请输入密码"
        >
          <i
              class="el-icon-view el-input__icon"
              @click="showPassword"
          ></i>
          <i class="icon-mima"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
            type="primary"
            @click="handleLogin"
            class="login-submit"
        >登录
        </el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "userLogin",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "admin",
        code: "",
        randomStr: ""
      },
      checked: false,
      code: {
        src: "/code",
        value: "",
        len: 4,
        type: "image"
      },
      loginRules: {
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"}
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
          {min: 3, message: "密码长度最少为6位", trigger: "blur"}
        ],
        code: [{required: true, message: "请输入验证码", trigger: "blur"}]
      },
      passwordType: "password"
    };
  },
  created() {
  },
  computed: {
    ...mapGetters(["tagWel"])
  },
  methods: {

    showPassword() {
      this.passwordType == ""
          ? (this.passwordType = "password")
          : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store
              .dispatch("LoginByUsername", this.loginForm)
              .then(() => {

                this.$router.push({path: "/main"});
              })
              .catch(() => {
              });
        }
      });
    }
  }
};
</script>

<style></style>
