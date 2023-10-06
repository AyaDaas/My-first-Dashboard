import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../views/Layout.vue'
import SignIn from '../views/Login/SignIn.vue'
import Register from '../views/Login/Register.vue'
import Inbox from '../views/Inbox.vue'
import Profile from '../views/Profile.vue'
import Chart from '../views/Chart.vue'
import settings from '../views/settings.vue'
import Wizard from '../views/Wizard.vue'
import ErrorPage from '../views/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: ErrorPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/home',
          name: 'layout',
          component: Layout,
        },
        {
          path: '/inbox',
          name: 'inbox',
          component: Inbox,
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
        },
        {
          path: '/chart',
          name: 'chart',
          component: Chart,
        },
        {
          path: '/settings',
          name: 'settings',
          component: settings,
        },
        {
          path: '/wizard',
          name: 'wizard',
          component: Wizard,
        }

      ]
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    }

  ]
})

export default router
