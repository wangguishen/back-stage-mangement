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
            <el-button type="primary" icon="el-icon-plus" @click="addClick">新增</el-button>
            <el-button type="primary" icon="el-icon-download" @click="deriveClick">导出</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24">
        <el-table
          :data="zjlsList"
          stripe
          border
          id="zjls-table"
          style="width: 100%">
          <el-table-column fixed="left" label="序号" type="index" width="50" />
          <el-table-column label="拥有者" prop="name" />
          <el-table-column label="借款人" prop="load_name" />
          <el-table-column label="金额" prop="sum" />
          <el-table-column label="借款日期" prop="load_date" />
          <el-table-column label="还款人" prop="repay_name" />
          <el-table-column label="还款日期" prop="repay_date" />
          <el-table-column label="原因" prop="desc" />
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">修改</el-button>
              <el-button type="text" size="small">隐藏</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mixins } from '@/mixins'
import { getCapitalBill } from '@/service/mockData'
export default {
  mixins: [mixins],
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
      zjlsList: []
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
      this.exportExcel('zjls-table', '资金流水')
    },
    async getCapitalBill () { // 获取资金流水列表
      const self = this;
      const param = {
        page: 1,
        rows: 10,
        type: '2',
      }
      let res = await getCapitalBill(param)
      console.log("资金流水列表", res)
      this.zjlsList = res.data.data
      console.log(this.zjlsList)
    },
    changeCapitalType (key) { // 切换资金类型
      this.capitalTypeList.forEach(item => {
        if (item.value === key) {
          this.placeholderObj.type = `请输入${item.label}金额`
          this.placeholderObj.timeStart = `${item.label}开始日期`
          this.placeholderObj.timeEnd = `${item.label}结束日期`
        }
      })
    },
    addClick () { // 新增功能
      this.$message.warning('新增功能暂未开发，请耐心等待哦~')
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
