import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: loadPage('ExercisePage')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: loadPage('ShopPage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('ContactPage')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: loadPage('ContactPage')
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: loadPage('ContactPage')
  },
  {
    path: '/membership',
    name: 'Membership',
    component: loadPage('MembershipPage')
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: loadPage('ContactPage')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: loadPage('ContactPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
