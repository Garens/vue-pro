
import Home from '@/components/admin/Home'
import Layer from '@/components/Layer'
import Admin from '@/components/Admin/Index'
import Login from '@/components/Admin/Login'
import User from '@/components/Admin/User'
import Sort from '@/components/Admin/Sort'
import Article from '@/components/Admin/Article'
import Write from '@/components/Admin/Write'
import Tag from '@/components/Admin/Tag'


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
        },
        {
          path: 'log_list',
          meta: {
            title: '文章列表'
          },
          component: Article
        },
        {
          path: 'write_log',
          meta: {
            title: '写文章'
          },
          component: Write
        },
        {
          path: 'tag',
          meta: {
            title: '标签管理'
          },
          component: Tag
        }
      ]
    }
  ]
