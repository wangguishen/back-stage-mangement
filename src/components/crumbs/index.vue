<template>
  <div class="crumbs">
    <div
      v-for="(item, index) in crumbsList"
      :key="index"
      class="crumbs_box"
      :class="[item.id === currentCrumbs.id ? 'is-active' : '']"
      @click="changeCrumbs(item, index)"
    >
      <span> {{ item.name }}</span>
      <i class="el-icon-close" @click.stop="closeCrumb(item)" />
    </div>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
export default {
  mixins: [mixins],
  data () {
    return {

    }
  },

  computed: {

  },

  methods: {
    changeCrumbs (item, index) { // 切换
      let crumbs = {
        id: item.id,
        path: item.path,
        name: item.name
      }
      this.$store.dispatch('setCrumbsNum', item.path)
      this.$store.dispatch('setCurrentCrumbs', crumbs)
      this.$router.push(item.path)
    },
    closeCrumb (item) { // 关闭
      const self = this;
      const crumbsList = self.$store.getters.getCrumbsList;
      if (self.currentCrumbs.path === item.path) { // 关闭的是否为当前显示的
        if (crumbsList.length !== 1) {
          crumbsList.forEach((val, key) => {
            if (val.path === item.path) {
              if (key === crumbsList.length - 1) {
                crumbsList.splice(key, 1)
                self.$store.dispatch('setCrumbsNum', crumbsList[crumbsList.length - 1].path)
                self.$store.dispatch('setCurrentCrumbs', crumbsList[crumbsList.length - 1])
                self.$store.dispatch('setCrumbsList', crumbsList)
                self.$router.push(crumbsList[crumbsList.length - 1].path)
              }
            }
          })
        } else {
          crumbsList.splice(0, 1)
          self.$store.dispatch('setCrumbsNum', '0')
          self.$store.dispatch('setCurrentCrumbs', {})
          self.$store.dispatch('setCrumbsList', [])
        }
      } else {
        crumbsList.forEach((val, key) => {
          if (val.path === item.path) {
            crumbsList.splice(key, 1)
          }
        })
        self.$store.dispatch('setCrumbsList', crumbsList)
      }
    }
  }
}
</script>

<style lang="scss">
  .crumbs{
    display: flex;
    height: 32px;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    background: $cff;
    &_box{
      position: relative;
      flex-shrink: 0;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background: $cff;
      font-size: 14px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      span{
        margin-right: 10px;
      }
    }
    .is-active{
      color: red;
      background: #F0F4FB;
    }
  }
</style>
