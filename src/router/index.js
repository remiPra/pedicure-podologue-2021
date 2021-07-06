import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from "../views/Contact.vue"
import Install from "../views/Install.vue"
import Horaires from "../views/Horaires.vue"
import MessageEnvoye from '../views/MessageEnvoye.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/horaires',
    name: 'Horaires',
    component: Horaires
  },
  {
    path: '/messageEnvoye',
    name: 'MessageEnvoye',
    component: MessageEnvoye
  },
  {
    path: '/install',
    name: 'Install',
    component: Install
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
