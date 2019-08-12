<template>
  <div class="crumbs">
    <div
      v-for="(item, index) in crumbsList"
      :key="index"
      class="crumbs_box"
      :class="[index === Number(crumbsNum) ? 'is-active' : '']"
      @click="changeCrumbs(item, index)"
    >
      <span> {{ item.name }}</span>
      <i class="el-icon-close" />
    </div>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
export default {
  mixins: [mixins],
  data () {
    return {
      
    }
  },

  computed: {

  },

  methods: {
    changeCrumbs (item, index) {
      this.$store.dispatch('setCrumbsNum', index)
      
    }
  }
}
</script>

<style lang="scss">
  .crumbs{
    display: flex;
    height: 32px;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    &_box{
      position: relative;
      flex-shrink: 0;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background: $cff;
      font-size: 14px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      span{
        margin-right: 10px;
      }
    }
    .is-active{
      color: red;
      background: #F0F4FB;
    }
  }
</style>
