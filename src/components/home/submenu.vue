<template>
  <div class="menu-box">
    <el-submenu v-if="menu.hasOwnProperty('children')" :index="menu.id" :class="[!isCollapse ? 'submenu-show' : 'submenu-hidden']">
      <template slot="title">
        <i :class="menu.icon" />
        <span v-show="!isCollapse" :title="menu.title">{{ menu.title }}</span>
      </template>
      <template v-for="item in menu.children">
        <submenu v-if="menu.hasOwnProperty('children')" :key="item.id" :menu="item" />
        <el-menu-item v-else :key="item.id" :index="item.path" @click="menuClick(item)">
          <template slot="title">
            <i :class="item.icon" />
            <span :title="item.title" class="submenu-title">{{ item.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-submenu>
    <el-menu-item v-else :index="menu.path" @click="menuClick(menu)">
      <i :class="menu.icon" />
      <span slot="title" :title="menu.title" class="submenu-title">{{ menu.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
export default {
  name: 'submenu',
  mixins: [mixins],
  props: ['menu'],
  data () {
    return {

    }
  },

  computed: {
    isCollapse () {
      return this.$store.getters.getIsCollapse
    }
  },

  mounted () {

  },

  methods: {
    menuClick (menu) {
      const self = this;
      let crumbsList = self.$store.getters.getCrumbsList
      let crumbs = {
        id: menu.id,
        path: menu.path,
        name: menu.title
      }
      let result = crumbsList.some(item => {
        if (item.path === crumbs.path) {
          return true 
        } 
      })
      if (!result) { // 如果不存在
        crumbsList.push(crumbs)
        self.$store.dispatch('setCrumbsList', crumbsList)
        self.$store.dispatch('setCurrentCrumbs', crumbs)
        self.$store.dispatch('setCrumbsNum', crumbsList[crumbsList.length - 1].path)
      } else {
        crumbsList.forEach((item, index) => {
          if (item.path === crumbs.path) {
            self.$store.dispatch('setCrumbsNum', crumbs.path)
            self.$store.dispatch('setCurrentCrumbs', crumbs)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
  .menu-box{
    overflow: hidden;
  }
  .submenu-show{
    .el-submenu__icon-arrow{
      display: block;
    }
  }
  .submenu-hidden{
    .el-submenu__icon-arrow{
      display: none;
    }
  }
</style>

