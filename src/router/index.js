import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 路由表
const routes = [
  // 第一種做法：404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/PageNotFound.vue')
  },
  // 第二種做法：重新導向（這邊為設定如果在 newpage 頁面輸入錯誤的網址，便會直接重新導向回到 home
  {
    path: '/newpage/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  },
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
      // 初次設定動態路由
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route:', route)
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue')
      },
      // 打 API ，隨機生成一組用戶資訊
      {
        path: 'createRandomProfile',
        component: () => import('../views/CreateRandomProfile.vue')
      },
      // 設定具名路由（可一次顯示兩個元件）類似於將元件存入變數的概念
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
  routes,
  // 控制 router-link 樣式
  linkActiveClass: '',
  // 控制滾動
  linkExactActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    // 如果 router url 含 newpage，則滾動到高度為 500 的位置
    if (to.fullPath.match('newpage')) {
      return {
        top: 500
      }
    }
    // 如果不含 newpage，則滾動到最上方
    return {
      top: 0
    }
  }
})

export default router
