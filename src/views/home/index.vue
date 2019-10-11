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
import { CW000200 } from '@/service/mock/study/mryl'
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
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.CW000200()
    },
    async CW000200 () {
      let param = {
        page: 1,
        rows: 1000
      }
      let res = await CW000200(param)
      console.log('---res', res)
      this.$store.dispatch('setStudyList', res.data.data)
    }
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
      .page-box{
        width: 100%;
        height: 100%;
        padding: 20px 0;
        background: #FFF;
        box-sizing: border-box;
      }
    }
  }
</style>

