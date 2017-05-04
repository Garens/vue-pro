
import Home from '@/components/admin/Home'
import Layer from '@/components/Layer'
import Admin from '@/components/Admin/Index'
import Login from '@/components/Admin/Login'
import User from '@/components/Admin/User'
import Sort from '@/components/Admin/Sort'


export default [
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
      path: '/admin',
      name: 'Admin',
      meta: {
        title: '管理首页'
      },
      component: Admin,
      children: [
        {
          path: '/',
          meta: {
            title: '管理首页'
          },
          component: Home
        },
        {
          path: 'user',
          meta: {
            title: '用户列表'
          },
          component: User
        },
        {
          path: 'sort',
          meta: {
            title: '文章分类'
          },
          component: Sort
        }
      ]
    }
  ]
