import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "./components/home.vue"
import Menu from "./components/menu.vue"
import Admin from "./components/admin.vue"
import About from "./components/about.vue"
import Contact from "./components/contact.vue"
import History from "./components/history.vue"
import Delivery from "./components/delivery.vue"
import OrderingGuide from "./components/orderingGuide.vue"
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: "/", name: "homeLink", component: Home },
  { path: "/menu", name: "menuLink", component: Menu},
  { path: "/admin", name: "adminLink", component: Admin},
  { path: "/about", name: "aboutLink", component: About, children: [
    { path: "/contact", name: "contactLink", component: Contact },
    { path: "/history", name: "historyLink", component: History },
    { path: "/delivery", name: "deliveryLink", component: Delivery },
    { path: "/ordering-guide", name: "orderingLink", component: OrderingGuide }
  ]},
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})