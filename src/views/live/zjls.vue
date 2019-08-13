<template>
  <div class="zjls">
    资金流水
  </div>
</template>

<script>
import { getCapitalBill } from '@/service/mockData'
export default {
  data () {
    return {

    }
  },
  
  created () {
    this.init()
  },

  methods: {
    init () { // 初始化
      this.getCapitalBill()
    },
    async getCapitalBill () { // 获取资金流水列表
      const self = this;
      const param = {
        page: 1,
        rows: 10,
        type: '2'
      }
      let res = await getCapitalBill(param)
      console.log("资金流水列表", res)
    }
  }
}
</script>

<style lang="scss">

</style>
