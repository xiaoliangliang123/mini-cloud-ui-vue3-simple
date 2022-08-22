export default [{

    path: '/',
    name: 'main',
    component: () => import("@/page/index/main"),
    children: [
        {
            path: '/role/user_role_list',
            name: '角色列表',
            component: () => import ( /* webpackChunkName: "page" */ '@/views/role/user_role_list')
        }
    ]
}
]