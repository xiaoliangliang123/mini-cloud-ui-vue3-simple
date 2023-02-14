import request from '@/router/axios'


export function saveOrEdit(roleId,obj) {
    return request({
        url: '/upms/perms/'+roleId,
        method: 'put',
        data: obj
    })
}