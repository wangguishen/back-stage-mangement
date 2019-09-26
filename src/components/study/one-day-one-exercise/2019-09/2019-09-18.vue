<template>
  <div class="module">
    <div class="loader">
      <span class="box" />
      <span class="box" />
      <span class="box" />
      <span class="box" />
      <span class="box" />
      <span class="box" />
      <span class="box" />
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(midnightblue, black);
  .loader{
    width: calc(25px * 7 + 5px * 6);
    height: 35px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    .box{
      width: 25px;
      background-color: deepskyblue;
      border-radius: 3px;
      transform: skewX(-25deg) scale(0.1);
      animation: loader 0.8s infinite alternate;
      filter: opacity(0);
      animation-delay: calc((var(--time) - 1) * 0.2s);
    }
    .box:nth-child(1){
      --time: 1;
    }
    .box:nth-child(2){
      --time: 2;
    }
    .box:nth-child(3){
      --time: 3;
    }
    .box:nth-child(4){
      --time: 4;
    }
    .box:nth-child(5){
      --time: 5;
    }
    .box:nth-child(6){
      --time: 6;
    }
    .box:nth-child(7){
      --time: 7;
    }
  }
}
@keyframes loader {
  to {
    filter: opacity(1);
    transform: skewX(-25deg) scale(1);
  }
}
</style>
