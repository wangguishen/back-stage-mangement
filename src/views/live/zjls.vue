<template>
  <div class="page-box zjls">
    <el-row>
      <el-col :span="24">
        <el-form ref="screenFrom" :inline="true" size="medium" :model="formData" class="screen-from toolbar">
          <el-form-item>
            <el-input placeholder="请输入借款人姓名" v-model="formData.load_name" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入还款人姓名" v-model="formData.repay_name" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :placeholder="placeholderObj.type" v-model="formData.capitalNum" class="input-with-select">
              <el-select v-model="formData.type" slot="prepend" placeholder="资金类型" @change="changeCapitalType">
                <el-option
                  v-for="item in capitalTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="formData.dateTime"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="-"
              :start-placeholder="placeholderObj.timeStart"
              :end-placeholder="placeholderObj.timeEnd"
              :picker-options="pickerOptions"
              :disabled="formData.type === ''">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick">查询</el-button>
            <el-button type="primary" icon="el-icon-download" @click="deriveClick">导出</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCapitalBill } from '@/service/mockData'
export default {
  data () {
    return {
      formData: {
        load_name: '', // 借款人
        repay_name: '', // 还款人
        type: '', // 资金类型
        capitalNum: '', // 资金金额
        dateTime: '', // 日期选择
      },
      capitalTypeList: [
        { label: '借款', value: '0' },
        { label: '还款', value: '1' }
      ],
      placeholderObj: {
        type: '请输入金额',
        timeStart: '开始日期',
        timeEnd: '结束日期',
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    }
  },
  
  created () {
    this.init()
  },

  methods: {
    init () { // 初始化
      this.getCapitalBill()
    },
    searchClick () { // 查询功能
      console.log("查询功能")
    },
    deriveClick () { // 导出功能
      console.log("导出功能")
    },
    async getCapitalBill () { // 获取资金流水列表
      const self = this;
      const param = {
        page: 1,
        rows: 10,
        type: '2'
      }
      let res = await getCapitalBill(param)
      console.log("资金流水列表", res)
    },
    changeCapitalType (key) { // 切换资金类型
      this.capitalTypeList.forEach(item => {
        if (item.value === key) {
          this.placeholderObj.type = `请输入${item.label}金额`
          this.placeholderObj.timeStart = `${item.label}开始日期`
          this.placeholderObj.timeEnd = `${item.label}结束日期`
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .zjls{
    .screen-from{
      .el-input{
        .el-select {
          width: 120px;
        }
      }
    }
  }
</style>
