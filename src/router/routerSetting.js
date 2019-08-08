// 路由权限空控制
import router from '@/router/index'

router.beforeEach(async (to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

router.afterEach(() => {

})
