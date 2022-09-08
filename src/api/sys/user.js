import request from '@/router/axios'

export function queryUserList(query) {
    return request({
        url: '/upms/user',
        method: 'get',
        params: query
    })
}

export function del(id) {
    return request({
        url: '/upms/user/'+id,
        method: 'delete',
    })
}