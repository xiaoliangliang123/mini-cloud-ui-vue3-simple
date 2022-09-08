export default [{

    path: '/',
    name: 'main',
    component: () => import("@/page/index/main"),
    children: [
        {
            path: '/role/user_role_list',
            name: '角色列表',
            component: () => import ( /* webpackChunkName: "page" */ '@/views/role/user_role_list')
        },
        {
            path: '/role/user_role_add/:roleId',
            name: '角色添加/编辑',
            component: () => import ( /* webpackChunkName: "page" */ '@/views/role/user_role_add')
        },
        {
            path: '/org/org_list',
            name: '组织机构',
            component: () => import ( /* webpackChunkName: "page" */ '@/views/org/org_list')
        },
        {
            path: '/user/user_list',
            name: '用户列表',
            component: () => import ( /* webpackChunkName: "page" */ '@/views/user/user_list')
        },
        {
            path: '/user/user_add/:userId',
            name: '用户添加',
            component: () => import ( /* webpackChunkName: "page" */ '@/views/user/user_add')
        }
    ]
}
]