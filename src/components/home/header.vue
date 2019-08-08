<template>
  <div class="bg-header">
    <div class="header_coll" @click.prevent="collapse">
      <i :class="[!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  computed: {
    isCollapse () {
      return this.$store.getters.getIsCollapse
    }
  },

  methods: {
    collapse () {
      if (this.isCollapse) {
        setTimeout(() => {
          this.$store.dispatch('setIsCollapse', false)
        }, 100)
      } else {
        this.$store.dispatch('setIsCollapse', true)
      }
    }
  }
}
</script>

<style lang="scss">
  .bg-header{
    color: $cff;
    .header_coll{
      i{
        font-size: 18px;
      }
    }
  }
</style>
