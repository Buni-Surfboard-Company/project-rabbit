import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import SurfboardsView from '../views/SurfboardsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/repairs',
    component: () => import(/* webpackChunkName: "about" */ '../views/RepairsView.vue')
  },
  {
    path: '/ourstory',
    component: () => import(/* webpackChunkName: "about" */ '../views/OurStoryView.vue')
  }, 
  {
    path: '/sustainability', 
    component: () =>import(/* webpackChunkName: "about" */ '../views/SustainabilityView.vue')
  },
  {
    path: '/team', 
    component: () =>import(/* webpackChunkName: "about" */ '../views/TeamView.vue')
  },
  {
    path: '/terms-and-conditions', 
    component: () =>import(/* webpackChunkName: "about" */ '../views/TermsView.vue')
  }, 
  {
    path: '/privacy',
    component: () =>import(/* webpackChunkName: "about" */ '../views/PrivacyPolicyView.vue')
  },
  {
    path: '/events',
    component: () =>import(/* webpackChunkName: "about" */ '../views/EventsView.vue')
  },
  {
    path: '/contact',
    component: () =>import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/products',
    component: () =>import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/surfboards',
    component: SurfboardsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
