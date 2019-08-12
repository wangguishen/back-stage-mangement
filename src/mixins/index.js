// vue的mixins的公共属性及方法
import store from '@/store/index.js'

/**
 * 监听页面尺寸的变化
 */
window.addEventListener('resize', function () {
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight

  store.dispatch('setScreenWidth', clientWidth)
  store.dispatch('setScreenHeight', clientHeight)
})

export const mixins = {
  data () {
    return {

    }
  },
  computed: {
    screenWidth () {
      return this.$store.getters.getScreenWidth
    },
    screenHeight () {
      return this.$store.getters.getScreenHeight
    },
    crumbsNum () {
      return this.$store.getters.getCrumbsNum
    },
    crumbsList () {
      return this.$store.getters.getCrumbsList
    }
  },
  methods: {

  }
}
