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
        <my20190903 v-if="currentObj.date === '2019-09-03'" class="module-content" />
        <my20190904 v-if="currentObj.date === '2019-09-04'" class="module-content" />
        <my20190905 v-if="currentObj.date === '2019-09-05'" class="module-content" />
        <my20190906 v-if="currentObj.date === '2019-09-06'" class="module-content" />
        <my20190907 v-if="currentObj.date === '2019-09-07'" class="module-content" />
        <my20190908 v-if="currentObj.date === '2019-09-08'" class="module-content" />
        <my20190909 v-if="currentObj.date === '2019-09-09'" class="module-content" />
        <my20190910 v-if="currentObj.date === '2019-09-10'" class="module-content" />
        <my20190911 v-if="currentObj.date === '2019-09-11'" class="module-content" />
        <my20190912 v-if="currentObj.date === '2019-09-12'" class="module-content" />
        <my20190913 v-if="currentObj.date === '2019-09-13'" class="module-content" />
        <my20190914 v-if="currentObj.date === '2019-09-14'" class="module-content" />
        <my20190915 v-if="currentObj.date === '2019-09-15'" class="module-content" />
        <my20190916 v-if="currentObj.date === '2019-09-16'" class="module-content" />
        <my20190917 v-if="currentObj.date === '2019-09-17'" class="module-content" />
        <my20190918 v-if="currentObj.date === '2019-09-18'" class="module-content" />
        <my20190919 v-if="currentObj.date === '2019-09-19'" class="module-content" />
        <my20190920 v-if="currentObj.date === '2019-09-20'" class="module-content" />
        <my20190921 v-if="currentObj.date === '2019-09-21'" class="module-content" />
        <my20190922 v-if="currentObj.date === '2019-09-22'" class="module-content" />
        <my20190923 v-if="currentObj.date === '2019-09-23'" class="module-content" />
        <my20190924 v-if="currentObj.date === '2019-09-24'" class="module-content" />
        <my20190925 v-if="currentObj.date === '2019-09-25'" class="module-content" />
        <my20190926 v-if="currentObj.date === '2019-09-26'" class="module-content" />
        <my20190927 v-if="currentObj.date === '2019-09-27'" class="module-content" />
        <my20190928 v-if="currentObj.date === '2019-09-28'" class="module-content" />
        <my20190929 v-if="currentObj.date === '2019-09-29'" class="module-content" />
        <my20190930 v-if="currentObj.date === '2019-09-30'" class="module-content" />
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
const myContent = resolve => require(['@/components/study/one-day-one-exercise/content'], resolve)
const my20190901 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-01'], resolve)
const my20190902 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-02'], resolve)
const my20190903 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-03'], resolve)
const my20190904 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-04'], resolve)
const my20190905 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-05'], resolve)
const my20190906 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-06'], resolve)
const my20190907 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-07'], resolve)
const my20190908 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-08'], resolve)
const my20190909 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-09'], resolve)
const my20190910 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-10'], resolve)
const my20190911 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-11'], resolve)
const my20190912 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-12'], resolve)
const my20190913 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-13'], resolve)
const my20190914 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-14'], resolve)
const my20190915 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-15'], resolve)
const my20190916 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-16'], resolve)
const my20190917 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-17'], resolve)
const my20190918 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-18'], resolve)
const my20190919 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-19'], resolve)
const my20190920 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-20'], resolve)
const my20190921 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-21'], resolve)
const my20190922 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-22'], resolve)
const my20190923 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-23'], resolve)
const my20190924 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-24'], resolve)
const my20190925 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-25'], resolve)
const my20190926 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-26'], resolve)
const my20190927 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-27'], resolve)
const my20190928 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-28'], resolve)
const my20190929 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-29'], resolve)
const my20190930 = resolve => require(['@/components/study/one-day-one-exercise/2019-09/2019-09-30'], resolve)
export default {
  components: {
    myContent,
    my20190901,
    my20190902,
    my20190903,
    my20190904,
    my20190905,
    my20190906,
    my20190907,
    my20190908,
    my20190909,
    my20190910,
    my20190911,
    my20190912,
    my20190913,
    my20190914,
    my20190915,
    my20190916,
    my20190917,
    my20190918,
    my20190919,
    my20190920,
    my20190921,
    my20190922,
    my20190923,
    my20190924,
    my20190925,
    my20190926,
    my20190927,
    my20190928,
    my20190929,
    my20190930
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
