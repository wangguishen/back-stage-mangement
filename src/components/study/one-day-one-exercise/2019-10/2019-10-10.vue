<template>
  <div class="module flex">
    <div v-for="(item, index) in list" :key="index" class="bevel" :class="item.className" />
  </div>
</template>

<script>
export default {
  name: 'my20191010',
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
    background: #00A7FA;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .lt_bevel{
    background:linear-gradient(150deg, transparent calc(30px / 1.414), #00A7FA 0);
  }
  .lt_bevel::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right bottom, transparent 50%, #faad00 0) no-repeat 0 0;
    width: calc(calc(30px / 1.414) * 2);
    height: calc(calc(30px / 1.414) * 2 / 1.732);
    transform: rotateY(180deg) rotate(60deg);
  }
  .rt_bevel{
    background: linear-gradient(-150deg, transparent calc(30px / 1.414), #00A7FA 0);
  }
  .rt_bevel::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(to left bottom, transparent 50%, #faad00 0) 100% 0 no-repeat;
    width: calc(calc(30px / 1.414) * 2);
    height: calc(calc(30px / 1.414) * 2 / 1.732);
    transform: rotateY(180deg) rotate(-60deg);
  }
  .rb_bevel{
    background: linear-gradient(-30deg, transparent calc(30px / 1.414), #00A7FA 0);
  }
  .rb_bevel::before{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(to left top, transparent 50%, #faad00 0) no-repeat 100% 100%;
    width: calc(calc(30px / 1.414) * 2);
    height: calc(calc(30px / 1.414) * 2 / 1.732);
    transform: rotateY(180deg) rotate(60deg);
  }
  .lb_bevel{
    background: linear-gradient(30deg, transparent calc(30px / 1.414), #00A7FA 0);
  }
  .lb_bevel::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right top, transparent 50%, #faad00 0) no-repeat 0 100%;
    width: calc(calc(30px / 1.414) * 2);
    height: calc(calc(30px / 1.414) * 2 / 1.732);
    transform: rotateY(180deg) rotate(-60deg);
  }
}
</style>
