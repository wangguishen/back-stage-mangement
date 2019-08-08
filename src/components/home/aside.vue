<template>
  <div class="aside">
    <el-menu
      :default-active="defaultActive"
      class="menu-aside"
      router
      :style="{ height: screenHeight + 'px' }"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <submenu v-for="(item, index) in menuList" :key="index" :menu="item" />
    </el-menu>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
import { getLeftNavigation } from '@/service/mockData'
import submenu from './submenu'
export default {
  components: {
    submenu
  },
  mixins: [mixins],
  data () {
    return {
      defaultActive: "0",
      menuList: [
        {
          id: '1',
          title: '首页',
          icon: 'el-icon-star-on'
        }, {
          id: '2',
          title: '测试',
          icon: 'el-icon-star-on',
          children: [
            {
              id: '2-3',
              title: '测试2',
              icon: 'el-icon-star-on',
              children: [
                {
                  id: '2-3-1',
                  title: '测试3',
                  icon: 'el-icon-star-on'
                }
              ]
            }
          ]
        }
      ]
    }
  },

  computed: {
    isCollapse () {
      return this.$store.getters.getIsCollapse
    }
  },

  mounted () {
    this.getLeftNavigation()
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    async getLeftNavigation () {
      const param = {}
      const res = await getLeftNavigation(param)
      this.menuList = res.data.data
      console.log(res)
    },
    menuClick () {

    }
  }
}
</script>

<style lang="scss">
.aside{
  .menu-aside{
    border: none;
  }
}
</style>

