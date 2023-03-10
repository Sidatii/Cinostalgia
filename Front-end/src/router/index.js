import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Book from '../views/Book.vue'
import Gallery from '../views/Gallery.vue'
import Manage from "@/views/Manage.vue";
import Bookings from "@/views/Bookings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/signin',
      name: 'Login',
      component: Login
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/book/:id',
      name: 'Book',
      component: Book
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/bookings',
      name: 'Bookings',
      component: Bookings
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }

  ]
})

export default router
