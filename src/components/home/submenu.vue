<template>
  <el-submenu :index="menu.id" :class="[menu.hasOwnProperty('children') ? 'submenu-show' : 'submenu-hidden']">
    <template slot="title">
      <i :class="menu.icon" />
      <span :title="menu.title">{{ menu.title }}</span>
    </template>
    <template v-for="item in menu.children">
      <submenu v-if="menu.hasOwnProperty('children')" :key="item.id" :menu="item" />
      <el-menu-item v-else :key="item.id" :index="item.url" @click="menuClick(item)">
        <template slot="title">
          <i :class="item.icon" />
          <span :title="item.title" class="submenu-title">{{ item.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'submenu',
  props: ['menu'],
  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {
    menuClick (menu) {

    }
  }
}
</script>

<style lang="scss">
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

