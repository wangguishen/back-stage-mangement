<template>
  <div class="page-box mryl">
    <el-row class="search-box">
      <el-col :span="24">
        <el-form ref="screenFrom" :inline="true" size="medium" :model="formData" class="screen-from toolbar">
          <el-form-item>
            <el-select v-model="formData.selectName" filterable :disabled="isSelectDisabled" clearable placeholder="请选择标题名称">
              <el-option
                v-for="item in titleList"
                :key="item.id"
                :label="item.title"
                :value="item.date"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="formData.selectData"
              align="right"
              type="date"
              :disabled="isDateDisabled"
              placeholder="选择查看日期"
              :picker-options="pickerOptions"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" :disabled="!isSelectDisabled && !isDateDisabled" @click="searchClick">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-content :current-obj="currentObj" :content-num="contentNum" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { CW000200, CW000201 } from '@/service/mock/study/mryl'
import myContent from './components/content'
import { Format } from '@/utils/date'
export default {
  components: {
    myContent
  },
  data () {
    return {
      formData: {
        selectName: '', // 标题
        selectData: new Date('2019-10-08') // 时间
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      titleList: [],
      isSelectDisabled: false,
      isDateDisabled: false,
      currentObj: {
        title: '',
        date: ''
      },
      contentNum: 0
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
      this.CW000201()
    },
    async CW000200 () {
      let param = {
        page: 1,
        rows: 100
      }
      let res = await CW000200(param)
      console.log('---', res)
      this.titleList = res.data.data
    },
    async CW000201 () {
      let param = {
        date: ''
      };
      if (this.formData.selectName === '') {
        param.date = Format(this.formData.selectData, 'yyyy-MM-dd')
      } else if (this.formData.selectData === '') {
        param.date = this.formData.selectName
      }
      let res = await CW000201(param)
      console.log('201', res)
      let obj = res.data.data
      this.currentObj = obj
      this.contentNum = this.contentNum + 1
    },
    searchClick () { // 查询
      this.CW000201()
    }

  }
}
</script>

<style lang="scss">
  .mryl{
    .search-box{
      padding: 0 20px;
    }
  }
</style>
