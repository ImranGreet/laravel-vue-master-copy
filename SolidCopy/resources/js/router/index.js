import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../components/App.vue";
import Contact from "../components/Contact.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/text',
    name: 'text',
    component: ()=>import("../components/Texy"),
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
