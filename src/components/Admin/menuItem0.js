import Home from '@/components/admin/Home'
import Layer from '@/components/Layer'
import Admin from '@/components/Admin/Index'
import Login from '@/components/Admin/Login'

export default {
  admin: [
    {name: "/admin/", icon: "home", text: "管理首页", component: Home},
    {name: "/admin/write_log", icon: "compose", text: "写文章", component: Layer},
    {name: "/admin/log_bak", icon: "clipboard", text: "草稿"},
    {name: "/admin/log_list", icon: "ios-book-outline", text: "文章"},
    {name: "/admin/tag", icon: "ios-book-outline", text: "标签"},
    {name: "/admin/sort", icon: "ios-book-outline", text: "分类"},
    {name: "/admin/comment", icon: "ios-book-outline", text: "评论"},
    {name: "/admin/twitter", icon: "ios-book-outline", text: "微语"},
    {name: "/admin/widgets", icon: "ios-book-outline", text: "侧边栏"},
    {name: "/admin/navbar", icon: "ios-book-outline", text: "导航"},
    {name: "/admin/link", icon: "ios-book-outline", text: "链接"},
    {name: "/admin/user", icon: "ios-person", text: "用户"},
    {name: "/admin/data", icon: "ios-book-outline", text: "数据"}
  ]
}
