<template>
  <div class="module flex">
    <div v-for="(item, index) in list" :key="index" class="bevel" :class="item.className" />
  </div>
</template>

<script>
export default {
  name: 'my20191012',
  data () {
    return {
      list: [
        {
          text: '左上角',
          className: 'lt_bevel'
        }, {
          text: '右上角',
          className: 'rt_bevel'
        }, {
          text: '右下角',
          className: 'rb_bevel'
        }, {
          text: '左下角',
          className: 'lb_bevel'
        }
      ]
    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.module{
  .bevel{
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #00A7FA;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .lt_bevel::before{
    content: '';
    position: absolute;
    left: -1px;
    top: -1px;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
  }
  .lt_bevel::after{
    content: '';
    position: absolute;
    left: 8px;
    top: -1px;
    width: 3px;
    height: 19.5px;
    background: #00A7FA;
    transform: skewX(-45deg) scaleX(0.5);
  }
  .rt_bevel::before{
    content: '';
    position: absolute;
    right: -1px;
    top: -1px;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
  }
  .rt_bevel::after{
    content: '';
    position: absolute;
    right: 8px;
    top: -1px;
    width: 3px;
    height: 19.5px;
    background: #00A7FA;
    transform: skewX(45deg) scaleX(0.5);
  }
  .rb_bevel::before{
    content: '';
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
  }
  .rb_bevel::after{
    content: '';
    position: absolute;
    right: 8px;
    bottom: 0px;
    width: 3px;
    height: 19.5px;
    background: #00A7FA;
    transform: skewX(-45deg) scaleX(0.5);
  }
  .lb_bevel::before{
    content: '';
    position: absolute;
    left: -1px;
    bottom: -1px;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
  }
  .lb_bevel::after{
    content: '';
    position: absolute;
    left: 8px;
    bottom: 0px;
    width: 3px;
    height: 19.5px;
    background: #00A7FA;
    transform: skewX(45deg) scaleX(0.5);
  }
}
</style>
