<template>
  <div class="content">
    <div v-if="contentNum === 0" :style="{height: (screenHeight - 60 - 32 - 60 - 60) + 'px'}">
      <my-content />
    </div>
    <div v-else>
      <div class="module-title">{{ currentObj.title }}</div>
      <div :style="{height: (screenHeight - 60 - 32 - 60 - 50 - 60) + 'px'}">
        <my20190901 v-if="currentObj.date === '2019-09-01'" class="module-content" />
        <my20190902 v-if="currentObj.date === '2019-09-02'" class="module-content" />
        <my20190905 v-if="currentObj.date === '2019-09-05'" class="module-content" />
        <my20190918 v-if="currentObj.date === '2019-09-18'" class="module-content" />
        <my20190919 v-if="currentObj.date === '2019-09-19'" class="module-content" />
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
const myContent = resolve => require(['@/components/study/one-day-one-exercise/content'], resolve)
const my20190901 = resolve => require(['@/components/study/one-day-one-exercise/2019-09-01'], resolve)
const my20190902 = resolve => require(['@/components/study/one-day-one-exercise/2019-09-02'], resolve)
const my20190905 = resolve => require(['@/components/study/one-day-one-exercise/2019-09-05'], resolve)
const my20190918 = resolve => require(['@/components/study/one-day-one-exercise/2019-09-18'], resolve)
const my20190919 = resolve => require(['@/components/study/one-day-one-exercise/2019-09-19'], resolve)
export default {
  components: {
    myContent, my20190901, my20190902, my20190905, my20190918, my20190919
  },

  mixins: [mixins],

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
.content{
  .module-title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
  .module-content{
    width: 100%;
    height: 100%;
  }
}
</style>
