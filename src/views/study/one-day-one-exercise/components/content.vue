<template>
  <div class="content">
    {{ title }}
    <my-module />
  </div>
</template>

<script>
import { getSesStorage } from '@/utils/storageUtil'

let current = getSesStorage('STUDY_SELECT_DATE')
console.log(current)
const myModule = () => import(`@/components/study/one-day-one-exercise/${current}.vue`)
export default {
  components: {
    myModule
  },

  props: {
    title: String
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
