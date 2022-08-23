import request from '@/router/axios'

export function queryList(query) {
    return request({
        url: '/upms/role',
        method: 'get',
        params: query
    })
}
export function get(id) {
    return request({
        url: '/upms/role/'+id,
        method: 'get',
    })
}

export function saveOrEdit(obj) {
    return request({
        url: '/upms/role',
        method: 'post',
        params: obj
    })
}