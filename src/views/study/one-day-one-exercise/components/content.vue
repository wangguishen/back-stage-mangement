<template>
  <div class="content">
    <div v-if="contentNum === 0">
      <my-content />
    </div>
    <div v-else>
      {{ currentObj.title }}
      <my20190902 v-if="currentObj.date === '2019-09-02'" />
    </div>
  </div>
</template>

<script>
const myContent = resolve => require(['@/components/study/one-day-one-exercise/content'], resolve)
const my20190902 = resolve => require(['@/components/study/one-day-one-exercise/2019-09-02'], resolve)
export default {
  components: {
    myContent, my20190902
  },

  props: {
    currentObj: Object,
    contentNum: Number
  },

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

<style lang="scss">

</style>
