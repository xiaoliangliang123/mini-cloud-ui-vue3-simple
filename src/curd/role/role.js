export const tableOption = {
    border: true,
    index: true,
    indexLabel: '序号',
    stripe: true,
    menuAlign: 'center',
    align: 'center',
    refreshBtn: false,
    showClomnuBtn: false,
    searchMenuSpan: 6,
    searchSize: 'mini',
    column: [{
        label: '角色名称',
        prop: 'roleName',
        'search': true,
        searchPlaceholder:'请输入角色名称',
        editDisabled: true,
        rules: [{
            required: true,
            message: '请输入角色名称',
            trigger: 'blur'
        }]
    }, {
        label: '角色编码',
        prop: 'roleCode',
        rules: [{
            required: true,
            message: '请输入角色编码',
            trigger: 'blur'
        }]
    } , {
        width: 150,
        label: '角色描述',
        prop: 'roleDesc',
        type: 'datetime',
        addDisplay: false,
        editDisabled: true,
        format: 'yyyy-MM-dd HH:mm',
        valueFormat: 'yyyy-MM-dd HH:mm:ss'
    }]
}