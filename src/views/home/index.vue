<template>
  <el-container class="home-index">
    <el-aside class="my-aside" :width="isCollapse ? '64px' : '200px'">
      <my-aside />
    </el-aside>
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-main>
        <div>
          <my-crumbs />
        </div>
        <transition name="fade" mode="out-in">
          <!-- <keep-alive :include="cachedViews"> -->
            <router-view />
          <!-- </keep-alive> -->
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myAside from '@/components/home/aside'
import myHeader from '@/components/home/header'
import myCrumbs from '@/components/crumbs/index'
export default {
  components: {
    myAside, myHeader, myCrumbs
  },
  data () {
    return {
      
    }
  },
  computed: {
    isCollapse () {
      return this.$store.getters.getIsCollapse
    },
  }
}
</script>

<style lang="scss">
  .home-index{
    width: 100%;
    height: 100vh;
    // .my-aside{
    //   transition: width .3s;
    //   -webkit-transition: width .3s;
    // }
  }
</style>

