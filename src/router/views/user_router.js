export default [

    {
        path: '/sys',
        name: '系统管理',
        component: () => import("@/page/index/main"),
        children: [
            {
                path: '/role/user_role_list',
                name: '角色列表',
                component: () => import ( /* webpackChunkName: "page" */ '@/views/sys/role/user_role_list')
            },
            {
                path: '/role/user_role_add/:roleId',
                name: '角色添加/编辑',
                component: () => import ( /* webpackChunkName: "page" */ '@/views/sys/role/user_role_edit')
            },
            {
                path: '/org/org_list',
                name: '组织机构',
                component: () => import ( /* webpackChunkName: "page" */ '@/views/sys/org/org_list')
            },
            {
                path: '/user/user_list',
                name: '用户列表',
                component: () => import ( /* webpackChunkName: "page" */ '@/views/sys/user/user_list')
            },
            {
                path: '/user/user_add/:userId',
                name: '用户添加',
                component: () => import ( /* webpackChunkName: "page" */ '@/views/sys/user/user_edit')
            },
            {
                path: '/menu/menu_list',
                name: '菜单管理',
                component: () => import ( /* webpackChunkName: "page" */ '@/views/sys/menu/menu_list')
            },
            {
                path: '/menu/menu_edit/:editId',
                name: '菜单编辑',
                component: () => import ( /* webpackChunkName: "page" */ '@/views/sys/menu/menu_edit')
            }
        ]
    }
]