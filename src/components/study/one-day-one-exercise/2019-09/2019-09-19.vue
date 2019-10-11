<template>
  <div class="module">
    <figure class="container">
      <span class="girl" />
      <div class="boys">
        <span />
        <span />
        <span />
        <span />
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'my20190919',
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
  background: papayawhip;
  .container{
    width: 8em;
    height: 1em;
    font-size: 35px;
    display: flex;
    justify-content: space-between;
    span{
      width: 1em;
      height: 1em;
      --duration: 2s;
    }
    span::before{
      content: '';
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: 15%;
      box-shadow: 0 0 0.1em rgba(0, 0, 0, 0.3);
    }
    .girl{
      animation: slide var(--duration) ease-in-out infinite alternate;
    }
    .girl::before{
      // background: hotpink;
      background: url("/static/girl.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .boys{
      width: 6em;
      display: flex;
      justify-content: space-between;
      span{
        animation: var(--duration) ease-in-out infinite alternate;
      }
      span:nth-child(1){
        animation-name: jump-off-1;
      }
      span:nth-child(2){
        animation-name: jump-off-2;
      }
      span:nth-child(3){
        animation-name: jump-off-3;
      }
      span:nth-child(4){
        animation-name: jump-off-4;
      }
      span::before{
        // background: dodgerblue;
        animation: var(--duration) ease-in-out infinite alternate;
      }
      span:nth-child(1)::before{
        animation-name: jump-down-1;
        background: url("/static/boy1.jpg") no-repeat;
        background-size: 100% 100%;
        // filter: brightness(1);
      }
      span:nth-child(2)::before{
        animation-name: jump-down-2;
        background: url("/static/boy2.jpg") no-repeat;
        background-size: 100% 100%;
        // filter: brightness(1.15);
      }
      span:nth-child(3)::before{
        animation-name: jump-down-3;
        background: url("/static/boy3.jpg") no-repeat;
        background-size: 100% 100%;
        // filter: brightness(1.3);
      }
      span:nth-child(4)::before{
        animation-name: jump-down-4;
        background: url("/static/boy4.jpg") no-repeat;
        background-size: 100% 100%;
        // filter: brightness(1.45);
      }
    }

  }
}
@keyframes slide {
  form {
    transform: translateX(0);
    // filter: brightness(1);
  }

  to {
    transform: translateX(calc(8em - (1 * 1.15em)));
    // filter: brightness(1.45);
  }
}
@keyframes jump-off-1 {
  0%, 15% {
    transform: rotate(0deg);
  }

  35%, 100% {
    transform-origin: -50% center;
    transform: rotate(-180deg);
  }
}
@keyframes jump-off-2 {
  0%, 30% {
    transform: rotate(0deg);
  }

  50%, 100% {
    transform-origin: -50% center;
    transform: rotate(-180deg);
  }
}
@keyframes jump-off-3 {
  0%, 45% {
    transform: rotate(0deg);
  }

  65%, 100% {
    transform-origin: -50% center;
    transform: rotate(-180deg);
  }
}
@keyframes jump-off-4 {
  0%, 60% {
    transform: rotate(0deg);
  }

  80%, 100% {
    transform-origin: -50% center;
    transform: rotate(-180deg);
  }
}
@keyframes jump-down-1 {
  5% {
    transform: scale(1, 1);
  }

  15% {
    transform-origin: center bottom;
    transform: scale(1.3, 0.7);
  }

  20%, 25% {
    transform-origin: center bottom;
    transform: scale(0.8, 1.4);
  }

  40% {
    transform-origin: center top;
    transform: scale(1.3, 0.7);
  }

  55%, 100% {
    transform: scale(1, 1);
  }
}
@keyframes jump-down-2 {
  20% {
    transform: scale(1, 1);
  }

  30% {
    transform-origin: center bottom;
    transform: scale(1.3, 0.7);
  }

  35%, 40% {
    transform-origin: center bottom;
    transform: scale(0.8, 1.4);
  }

  55% {
    transform-origin: center top;
    transform: scale(1.3, 0.7);
  }

  70%, 100% {
    transform: scale(1, 1);
  }
}
@keyframes jump-down-3 {
  35% {
    transform: scale(1, 1);
  }

  45% {
    transform-origin: center bottom;
    transform: scale(1.3, 0.7);
  }

  50%, 55% {
    transform-origin: center bottom;
    transform: scale(0.8, 1.4);
  }

  70% {
    transform-origin: center top;
    transform: scale(1.3, 0.7);
  }

  85%, 100% {
    transform: scale(1, 1);
  }
}
@keyframes jump-down-4 {
  50% {
    transform: scale(1, 1);
  }

  60% {
    transform-origin: center bottom;
    transform: scale(1.3, 0.7);
  }

  65%, 70% {
    transform-origin: center bottom;
    transform: scale(0.8, 1.4);
  }

  85% {
    transform-origin: center top;
    transform: scale(1.3, 0.7);
  }

  100%, 100% {
    transform: scale(1, 1);
  }
}
</style>
