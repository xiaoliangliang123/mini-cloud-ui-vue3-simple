import request from '@/router/axios'

export function queryList(query) {
    return request({
        url: '/upms/role',
        method: 'get',
        params: query
    })
}