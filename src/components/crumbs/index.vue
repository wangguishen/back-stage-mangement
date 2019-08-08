<template>
  <div class="crumbs">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="crumbs_box"
      :class="[index === crumbsNum ? 'is-active' : '']"
    >
      <span> {{ item }}</span>
      <i class="el-icon-close" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      crumbsNum: 2,
      list: ['1aaaaaaaaaaaaaaaaa', '1', '1', '1', '1', '1', '1']
    }
  },

  computed: {

  },

  methods: {

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
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
    .is-active{
      color: red;
      background: #F0F4FB;
    }
  }
</style>
