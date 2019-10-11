<template>
  <div class="module flex">
    <div v-for="(item, index) in list" :key="index" class="bevel" :class="item.className" />
  </div>
</template>

<script>
export default {
  name: 'my20191009',
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
    background:
      linear-gradient(to right bottom, transparent 50%, #faad00 0) no-repeat 0 0 / calc(20px * 1.414) calc(20px * 1.414),
      linear-gradient(135deg, transparent 20px, #00A7FA 0);
  }
  .rt_bevel{
    background:
      linear-gradient(to left bottom, transparent 50%, #faad00 0) no-repeat 100% 0 / calc(20px * 1.414) calc(20px * 1.414),
      linear-gradient(-135deg, transparent 20px, #00A7FA 0);
  }
  .rb_bevel{
    background:
      linear-gradient(to left top, transparent 50%, #faad00 0) no-repeat 100% 100% / calc(20px * 1.414) calc(20px * 1.414),
      linear-gradient(-45deg, transparent 20px, #00A7FA 0);
  }
  .lb_bevel{
    background:
      linear-gradient(to right top, transparent 50%, #faad00 0) no-repeat 0 100% / calc(20px * 1.414) calc(20px * 1.414),
      linear-gradient(45deg, transparent 20px, #00A7FA 0);
  }
}
</style>
