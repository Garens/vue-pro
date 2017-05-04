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
    {name: "/admin/tag", icon: "pricetags", text: "标签"},
    {name: "/admin/sort", icon: "navicon-round", text: "分类"},
    {name: "/admin/comment", icon: "chatbox", text: "评论"},
    {name: "/admin/twitter", icon: "chatbubbles", text: "微语"},
    {name: "/admin/widgets", icon: "map", text: "侧边栏"},
    {name: "/admin/navbar", icon: "ios-navigate", text: "导航"},
    {name: "/admin/link", icon: "link", text: "链接"},
    {name: "/admin/user", icon: "person-stalker", text: "用户"},
    {name: "/admin/data", icon: "ios-pie", text: "数据"}
  ]
}
