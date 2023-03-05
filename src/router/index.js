import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import deneme from '../components/Deneme'
import calismasayfasi from '../components/Calismasayfasi'
import singin from '../components/Singin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/deneme',
      name: 'Deneme',
      component: deneme
    },
    {
      path: '/calismasayfasi',
      name,
      component: calismasayfasi
    },
    {
      path: '/singin',
      name,
      component: singin
    }

  ]
})
