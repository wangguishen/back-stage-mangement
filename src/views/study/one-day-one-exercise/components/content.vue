<template>
  <div class="content">
    {{ currentObj.title }}
    <my20190902 v-if="currentObj.date === '2019-09-02'" />
  </div>
</template>

<script>
const my20190902 = resolve => require(['@/components/study/one-day-one-exercise/2019-09-02'], resolve)
export default {
  components: {
    my20190902
  },

  props: {
    currentObj: Object
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
