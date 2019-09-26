<template>
  <div class="module flex">
    <div class="taiji">
      <div class="white">
        <div class="white-half" />
      </div>
      <div class="black">
        <div class="black-half" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
  .taiji{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid #000000;
    box-sizing: border-box;
    animation: donghua infinite linear 5s;
    .white{
      position: relative;
      width: 100%;
      height: 50%;
      background: #FFFFFF;
      border-radius: 150px 150px 0 0;
      .white-half{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 50%;
        background: #000000;
        border-radius: 74px 74px 0 0;
      }
      .white-half::after{
        content: '';
        position: absolute;
        bottom: -18px;
        left: calc(50% - 18px);
        z-index: 2;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #FFFFFF;
      }
    }
    .black{
      position: relative;
      width: 100%;
      height: 50%;
      background: #000000;
      border-radius: 0 0 150px 150px;
      .black-half{
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 50%;
        background: #FFFFFF;
        border-radius: 0 0 74px 74px;
      }
      .black-half::after{
        content: '';
        position: absolute;
        top: -18px;
        left: calc(50% - 18px);
        z-index: 2;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #000000;
      }
    }
  }
}
@keyframes donghua {
  100% {
    transform: rotate(360deg);
  }
}
</style>
