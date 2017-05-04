
import Hello from '@/components/Hello'
import Layer from '@/components/Layer'
import Admin from '@/components/Admin/Index'
import Login from '@/components/Admin/Login'

export default [
    {
      path: '/',
      name: 'Hello',
      component: Admin
    },
    {
      path: '/home',
      name: 'Layer',
      component: Layer
    },
    {
      path: '/admin/login',
      meta: {
          title: '用户登录'
      },
      name: 'Login',
      component: (resolve) => require(['../components/Admin/Login'], resolve)
    },
    {
      path: '/admin',
      name: 'Admin',
      meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      },
      component: Admin
    }
  ]
