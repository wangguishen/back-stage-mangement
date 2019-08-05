<template>
  <div class="aside">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :style="{ height: screenHeight + 'px' }"
      @open="handleOpen"
      @close="handleClose"
    >
      <submenu v-for="(item, index) in menuList" :key="index" :menu="item" />
      <!-- <el-submenu v-for="(item, index) in menuList" :key="index" :index="item.id" :class="[item.hasOwnProperty('children') ? 'submenu-show' : 'submenu-hidden']">
        <template slot="title">
          <i :class="item.icon" />
          <span :title="item.title">{{ item.title }}</span>
        </template>
        <template v-for="menu in item.children">
        </template>
      </el-submenu> -->
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
      console.log(res)
    },
    menuClick () {

    }
  }
}
</script>

<style lang="scss">
.aside{
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
}
</style>

