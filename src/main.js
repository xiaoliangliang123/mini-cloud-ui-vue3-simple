import { createApp } from 'vue'
import App from './App.vue'
import Vue from "vue";

import "./error"; // 日志
import router from "./router/router";
import store from "./store";

Vue.use(router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
