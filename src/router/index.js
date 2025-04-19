import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ReservationsView from '@/views/ReservationsView.vue'
import MakeReservationView from '@/views/MakeReservationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: ReservationsView
  },
  {
    path: '/make-reservation',
    name: 'make-reservation',
    component: MakeReservationView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router