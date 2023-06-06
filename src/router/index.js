import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'
import Page2 from '../components/Page2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
