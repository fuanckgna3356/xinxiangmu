import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/home.vue'
import member from '@/components/tabbar/member.vue'
import shopcar from '@/components/tabbar/shopcar.vue'
import searcha from '@/components/tabbar/searcha.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/searcha', component: searcha }
  ],
  linkActiveClass: 'mui-active'
})
