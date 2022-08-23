export const tableOption = {
    card:false,
    border:false,
    stripe:false,
    showHeader:this.showHeader,
    index:false,
    size:false,
    selection:this.showCheckbox,
    align:'center',
    menuAlign:'center',
    menuType:this.menuType,
    menuBtnTitle:'自定义名称',
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