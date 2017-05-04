// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routers from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store/index'
import Util from './libs/util'

Vue.use(VueRouter)
Vue.use(iView)
Vue.config.productionTip = false

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    var isLogin = Boolean(store.state.user.name) //true用户已登录， false用户未登录
    if (!isLogin && to.path !== '/admin/login') {
        return next({ path: '/admin/login' })
    }

    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
