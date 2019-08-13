<template>
  <div class="aside">
    <el-menu
      :default-active="crumbsNum"
      unique-opened
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
      defaultActive: "1",
      menuList: []
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

