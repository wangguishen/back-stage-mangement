<template>
  <div class="page-box mryl">
    <el-row>
      <el-col :span="24">
        <el-form ref="screenFrom" :inline="true" size="medium" :model="formData" class="screen-from toolbar">
          <el-form-item>
            <el-select v-model="formData.selectName" clearable :disabled="isSelectDisabled" placeholder="请选择标题名称">
              <el-option
                v-for="item in titleList"
                :key="item.data"
                :label="item.title"
                :value="item.data">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="formData.selectData"
              align="right"
              type="date"
              :disabled="isDateDisabled"
              placeholder="选择查看日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" :disabled="!isSelectDisabled && !isDateDisabled" @click="searchClick">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modu-index v-if="isshow" :title="currentObj.title" :date="currentObj.date" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { CW000200, CW000201 } from '@/service/mock/study/mryl'
const moduIndex = resolve => require(['./index'], resolve)
// import moduIndex from './index'
import { Format } from '@/utils/date'
export default {
  components: {
    moduIndex
  },
  data() {
    return {
      formData: {
        selectName: '', // 标题
        selectData: '' // 时间
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      titleList: [],
      isSelectDisabled: false,
      isDateDisabled: false,
      currentObj: {},
      isshow: false
    }
  },

  watch: {
    formData: {
      handler: function (val, old) {
        console.log(val)
        if (val.selectName === '' && (!val.selectData || val.selectData === '')) {
          this.isSelectDisabled = false
          this.isDateDisabled = false
        } else if (val.selectName !== '') {
          val.selectData = ''
          this.isDateDisabled = true
        } else if (val.selectData !== '') {
          val.selectName = ''
          this.isSelectDisabled = true
        }
      },
      deep: true
    }
  },

  created () {
    this.init()
  },

  methods: {
    init () { // 初始化
      this.CW000200()
    },
    async CW000200 () {
      let res = await CW000200({})
      this.titleList = res.data.data
      console.log('---', res)
    },
    async CW000201 () {
      let param = {
        title: this.formData.selectName,
        date: Format(this.formData.selectData, 'yyyy-MM-dd')
      }
      let res = await CW000201(param)
      console.log('201', res)
      let obj = res.data.data
      this.currentObj = obj
      window.sessionStorage.setItem('CURRENT_MODULE', JSON.stringify(obj));
      this.isshow = true
    },
    searchClick () { // 查询
      this.CW000201()
    },
    
  }
}
</script>

<style lang="scss">
  .mryl{

  }
</style>
