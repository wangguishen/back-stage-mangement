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
        <!-- width: isCollapse ? screenWidth - '64' + 'px' : screenWidth - '200' + 'px', -->
        <div
          class="main-box"
          :style="{
            height: screenHeight - '60' - '32' + 'px'
          }"
        >
          <transition name="fade" mode="out-in">
            <!-- <keep-alive :include="cachedViews"> -->
              <router-view />
            <!-- </keep-alive> -->
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myAside from '@/components/home/aside'
import myHeader from '@/components/home/header'
import myCrumbs from '@/components/crumbs/index'
import { mixins } from '@/mixins'
export default {
  components: {
    myAside, myHeader, myCrumbs
  },
  mixins: [mixins],
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
    .main-box{
      padding: 20px;
      box-sizing: border-box;
      div{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

