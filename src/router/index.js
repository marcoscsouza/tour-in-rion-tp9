import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Banheiros',
    name: 'Banheiros',
    component: () => import('../views/BanheirosView.vue')
  },
  {
    path: '/Delegacias',
    name: 'Delegacias',
    component: () => import('../views/DelegaciasView.vue')
  },
  {
    path: '/Eventos',
    name: 'Eventos',
    component: () => import('../views/EventosView.vue')
  },
  {
    path: '/Hospitais',
    name: 'Hospitais',
    component: () => import('../views/HospitaisView.vue')
  },
  {
    path: '/OndeComer',
    name: 'OndeComer',
    component: () => import('../views/OndeComerView.vue')
  },
  {
    path: '/OndeDormir',
    name: 'OndeDormir',
    component: () => import('../views/OndeDormirView.vue')
  },
  {
    path: '/PontosTuristicos',
    name: 'PontosTuristicos',
    component: () => import('../views/PontosTuristicosView.vue')
  },
  {
    path: '/Praias',
    name: 'Praias',
    component: () => import('../views/PraiasView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
