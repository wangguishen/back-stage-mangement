<template>
  <div class="module flex">
    <div class="bird">
      <div class="bird_top flex">
        <div class="bird_top_block flex">
          <div v-for="(plume, key) in plumeList" :key="key" class="bird_top_block_col flex">
            <div v-for="item in plume.num" :key="item" class="bird_top_block_col_box" :style="{backgroundColor: plume.bg_color}" />
          </div>
        </div>
        <div class="bird_top_block">
          <div class="bird_top_block_wing" />
        </div>
        <div class="bird_top_block bird_top_right flex">
          <div class="bird_top_block_head" />
          <div class="bird_top_block_head bird_head2" />
          <div class="bird_top_block_head bird_head3" />
          <div class="bird_top_block_head bird_head3" />
        </div>
      </div>
      <div class="bird_middle flex">
        <div class="bird_middle_left">
          <div v-for="(col, key) in tailList" :key="key" class="bird_middle_left_col">
            <div
              v-for="item in col.num"
              :key="item"
              class="bird_middle_left_col_box"
              :style="{color: col.bg_color}"
              :class="[
                col.num === 4 ? 'bird_middle_left_col_box' + col.num :
                col.num === 3 ? 'bird_middle_left_col_box' + col.num :
                col.num === 2 ? 'bird_middle_left_col_box' + col.num :
                col.num === 1 ? 'bird_middle_left_col_box' + col.num : ''
              ]"
            />
          </div>
        </div>
        <div class="bird_middle_center" />
        <div class="bird_middle_right">
          <div class="bird_middle_right_bosom1" />
          <div class="bird_middle_right_bosom2" />
        </div>
      </div>
      <div class="bird_bottom" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my20190929',
  data () {
    return {
      plumeList: [ // 羽毛列表
        {
          num: 4,
          bg_color: '#1c1936'
        }, {
          num: 3,
          bg_color: '#f15b26'
        }, {
          num: 2,
          bg_color: '#bf9b4f'
        }, {
          num: 1,
          bg_color: '#1c1936'
        }
      ],
      tailList: [
        {
          num: 4,
          isTs: false,
          bg_color: '#1c1936'
        }, {
          num: 3,
          isTs: false,
          bg_color: '#bf9b4f'
        }, {
          num: 2,
          isTs: true,
          bg_color: '#f15b26'
        }, {
          num: 1,
          isTs: false,
          bg_color: '#f15b26'
        }
      ]
    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
$brown: #bf9b4f;
$orange: #f15b26;
$purple: #1c1936;
$tran: transparent;
.module{
  .bird{
    width: 600px;
    height: 600px;
    position: relative;
    &_top{
      width: 100%;
      height: 200px;
      &_block{
        width: 200px;
        height: 200px;
        align-items: flex-start;
        flex-direction: row-reverse;
        &_col{
          flex-direction: column;
          &_box{
            width: 50px;
            height: 50px;
            border-bottom-left-radius: 100%;
          }
        }
        &_wing{
          width: 100%;
          height: 100%;
          border-top-right-radius: 100%;
          background: $orange;
          position: relative;
        }
        &_wing::before{
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          border-top-right-radius: 100%;
          border-top: 200px solid $brown;
          border-right: 200px solid $tran;
        }
        &_head{
          width: 100px;
          height: 100px;
        }
        .bird_head2{
          position: relative;
          background: $brown;
          border-radius: 50% 50% 0 0;
          &::before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            border-top: 25px solid $orange;
            border-right: 25px solid $purple;
            border-left: 25px solid $tran;
            border-bottom: 25px solid $tran;
          }
          &::after{
            content: '';
            position: absolute;
            left: calc(50% - 10px);
            top: calc(50% - 10px);
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background: $cff;
          }
        }
        .bird_head3{
          width: 0;
          height: 0;
          border: 50px solid;
          border-top-color: $tran;
          border-left-color: $tran;
          border-right-color: $purple;
          border-bottom-color: $purple;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            border: 25px solid;
            border-top-color: $tran;
            border-left-color: $tran;
            border-right-color: $orange;
            border-bottom-color: $orange;
          }
          &::after{
            content: '';
            position: absolute;
            top: 0;
            right: -50px;
            border: 25px solid;
            border-top-color: $brown;
            border-left-color: $brown;
            border-right-color: $tran;
            border-bottom-color: $tran;
          }
        }
      }
      &_right{
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    &_middle{
      height: 200px;
      &_left, &_center, &_right{
        width: 200px;
      }
      &_left{
        height: 200px;
        display: flex;
        align-items: flex-end;
        &_col{
          width: 50px;
          height: 200px;
          display: flex;
          flex-direction: column-reverse;
          &_box{
            border: 25px solid $tran;
            border-top-color: $tran;
            border-right-color: $tran;
            border-left-color: inherit;
            border-bottom-color: inherit;
          }
          &_box2:nth-child(1){
            border-top-color: inherit;
            border-right-color: inherit;
          }
        }
      }
      &_center{
        width: 0;
        height: 0;
        border: 100px solid;
        border-top-color: $tran;
        border-left-color: $tran;
        border-right-color: $purple;
        border-bottom-color: $purple;
      }
      &_right{
        height: 100%;
        position: relative;
        &_bosom1{
          width: 100%;
          height: 100%;
          background: $brown;
          border-top-left-radius: 100%;
          clip-path: polygon(100% 0, 0 0, 0 100%); // 只留截取的部分
        }
        &_bosom2{
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: $orange;
          border-bottom-right-radius: 100%;
          clip-path: polygon(100% 0, 0 100%, 100% 100%);
        }
      }
    }
    &_bottom{
      width: 40px;
      height: 100px;
      border-left: 40px solid $brown;
      border-right: 40px solid $brown;
      transform: skewX(-45deg);
      position: absolute;
      left: 150px;
    }
  }
}
</style>
