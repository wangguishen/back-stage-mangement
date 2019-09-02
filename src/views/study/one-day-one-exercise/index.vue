<template>
  <div>
    <div>{{ title }}</div>
    <!-- <my-module /> -->
  </div>
</template>

<script>
let current = JSON.parse(window.sessionStorage.getItem('CURRENT_MODULE')).date
// let path = '@/components/study/one-day-one-exercise/' + current + '.vue'
console.log(current)
// import myModule from path
export default {
  components: {
    // myModule
  },
  props: {
    title: String,
    date: String
  },
  data() {
    return {

    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style lang="scss">
  
</style>
