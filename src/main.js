// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import chat from './components/chat.vue'
import homepage from './components/homepage.vue'
import job from './components/job.vue'
import resource from './components/resource.vue'
import achievement from './components/achievement.vue'
import essay from './components/essay.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  { path: '/homepage', component: homepage },
  { path: '/chat', component: chat },
  { path: '/job', component: job },
  { path: '/resource', component: resource},
  { path: '/achievement', component: achievement},
  { path: '/essay', component: essay}

]


const router = new VueRouter({
  mode: 'history',  
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
