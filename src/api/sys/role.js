import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/upms/role/queryAll',
        method: 'get',
        params: query
    })
}