import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Homepage from './components/homepage/Homepage.vue'
import Category from './components/warehouse/Category.vue'
import Articles from './components/warehouse/Articles.vue'
Vue.config.productionTip = false


Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/homepage', component: Homepage },
  { path: '/categorias', component: Category },
  { path: '/articulos', component: Articles },
]
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

