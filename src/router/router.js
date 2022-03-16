import Vue from 'vue'
import VueRouter, {createRouter, createWebHashHistory} from 'vue-router'
import PageRouter from './page/'
Vue.use(VueRouter)
const Router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // 这里也是 直接用导入的
    history: createWebHashHistory(),
});
Router.addRoutes([...PageRouter])
export default Router
