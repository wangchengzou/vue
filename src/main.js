// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from '@/App'
import IndexPage from '@/pages/index'
import Detail from '@/pages/detail'
import DetailAna from '@/pages/detail/analysis'
import DetailCou from '@/pages/detail/count'
import DetailFor from '@/pages/detail/forecast'
import detailPub from '@/pages/detail/publish'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Resource)

let router=new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: Detail,
      redirect:'/detail/count',
      children:[
        {
          path: 'analysis',
          component: DetailAna
        },
        {
          path: 'count',
          component: DetailCou
        },
        {
          path: 'forecast',
          component: DetailFor
        },
        {
          path: 'publish',
          component: detailPub
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
