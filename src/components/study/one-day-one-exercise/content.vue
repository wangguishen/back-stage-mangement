<template>
  <div class="module-box">
    <div v-for="(item, index) in list" :key="index" class="every-box" :style="{background: item.bgColor}">
      <div class="every-box_date">{{ item.date }}</div>
      <div class="every-box_title">{{ item.title }}</div>
      <!-- <img src="" alt=""> -->
    </div>
  </div>
</template>

<script>
import { CW000200 } from '@/service/mock/study/mryl'
export default {
  data () {
    return {
      list: [],
      pageObj: {
        allTotal: 0, // 总条数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页条数
        pageSizes: [10, 20, 50, 100]
      }
    }
  },

  created () {
    this.CW000200()
  },

  methods: {
    async CW000200 () {
      let param = {
        page: this.pageObj.currentPage,
        rows: this.pageObj.pageSize
      }
      let res = await CW000200(param)
      console.log('---ssssssssss', res)
      this.pageObj.allTotal = res.data.allTotal
      this.list = res.data.data
    }
  }
}
</script>

<style lang="scss">
  .module-box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .every-box{
      position: relative;
      width: 200px;
      height: 250px;
      margin: 0 20px 20px 0;
      transition: all 0.5s;
      cursor: pointer;
      &_date{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        color: #FFF;
      }
      &_title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
    }
    .every-box:hover{
      transform: scale(1.1);
    }
  }
</style>
