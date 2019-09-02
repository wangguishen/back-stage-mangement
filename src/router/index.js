// 项目路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: {
          title: '首页'
        }
      }, {
        path: '/live/zjls',
        name: 'zjls',
        component: () => import('@/views/live/zjls.vue'),
        meta: {
          title: '资金流水'
        }
      }, {
        path: '/study/mryl',
        name: 'mryl',
        component: () => import('@/views/study/one-day-one-exercise/mryl.vue'),
        meta: {
          title: '每日一练'
        }
      }
    ]
  },
  {
    path: '/404',
    name: 'err404',
    component: () => import('@/views/err/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/50X',
    name: 'err50X',
    component: () => import('@/views/err/50X.vue'),
    meta: {
      title: '50X'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router;
