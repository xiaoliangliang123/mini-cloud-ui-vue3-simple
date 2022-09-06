import {createRouter,createWebHashHistory} from 'vue-router'
import pageRouter from './page/index'
import userRouter from './views/user_router'

const Router =createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // 这里也是 直接用导入的
    history: createWebHashHistory(),
    routes: [
        ...pageRouter,
        ...userRouter
    ]
});
export default Router
