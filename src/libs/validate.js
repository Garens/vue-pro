export default {
    sortname: [
        { required: true, message: '名称不能为空', trigger: 'blur' }
    ],
    taxis: [
        { type: 'number', message: '必须为数字类型', trigger: 'blur' }
    ],
    mail: [
        { required: true, message: '邮箱不能为空', trigger: 'blur' },
        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
    ],
    city: [
        { required: true, message: '请选择城市', trigger: 'change' }
    ],
    gender: [
        { required: true, message: '请选择性别', trigger: 'change' }
    ],
    interest: [
        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
    ],
    date: [
        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
    ],
    time: [
        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
    ],
    desc: [
        { required: true, message: '请输入个人介绍', trigger: 'blur' },
        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
    ]
}
