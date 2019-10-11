<template>
  <div class="content">
    <div v-if="contentNum === 0" :style="{height: (screenHeight - 60 - 32 - 60 - 60) + 'px'}">
      <my-content />
    </div>
    <div v-else>
      <div class="module-title">{{ currentObj.title }}</div>
      <div :style="{height: (screenHeight - 60 - 32 - 60 - 50 - 60) + 'px'}">
        <!-- <components :is="currentObj.routerName" /> -->
        <components :is="'my' + currentObj.year + currentObj.month + currentObj.day" />
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
const myContent = resolve => require(['@/components/study/one-day-one-exercise/content'], resolve)
import component from '@/utils/component'
export default {
  components: { ...component, myContent },

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
