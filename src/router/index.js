
import Hello from '@/components/Hello'
import Layer from '@/components/Layer'
import Admin from '@/components/Admin/Index'
import Login from '@/components/Admin/Login'
import User from '@/components/Admin/User'

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
      component: Login
    },
    {
      path: '/admin/user',
      name: 'user',
      meta: {
        title: '用户列表',
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      },
      component: User
    },
    {
      path: '/admin',
      name: 'Admin',
      meta: {
        title: '管理首页',
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      },
      components: {
        default: Admin,
        user: User
      }
    }
  ]
