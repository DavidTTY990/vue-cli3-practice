import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 路由表
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
  // add new component
  {
    path: '/newpage',
    name: '寶馬旅行車頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'componentA',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'componentB',
        component: () => import('../views/ComponentB.vue')
      },
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'namedview',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: '2ba',
            components: {
              left: () => import('../views/ComponentB.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: '2ab',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue')
            }
          }
        ]
      }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
