<template>
  <div class="page-box blueTooth">
    <el-form ref="screenFrom" :inline="true" size="mini" :model="formData" class="screen-from toolbar">
      <el-form-item label="姓名">
        <el-input v-model="formData.name" placeholder="请输入客户姓名" clearable />
      </el-form-item>
      <el-form-item label="快递">
        <el-select v-model="formData.express" filterable clearable placeholder="请选择快递">
          <el-option
            v-for="item in EMSList"
            :key="item.value"
            :label="item.lable"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="付款方式">
        <el-select v-model="formData.payment" filterable clearable placeholder="请选择付款方式">
          <el-option
            v-for="item in paymentList"
            :key="item.value"
            :label="item.lable"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="订单日期">
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
        <el-button type="primary" icon="el-icon-plus" @click="addClick">新增</el-button>
        <el-button type="primary" icon="el-icon-search" @click="searchClick">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="erji-table"
      :data="erjiList"
      stripe
      border
      style="width: 100%"
      size="mini"
    >
      <el-table-column fixed="left" label="序号" type="index" width="50" />
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="手机号码" prop="tel" width="100"/>
      <el-table-column label="下单日期" prop="ordersDate" width="100" />
      <el-table-column label="类型" prop="ejType">
        <template slot-scope="scope">{{ scope.row.ejType | vEjType }}</template>
      </el-table-column>
      <el-table-column label="付款方式" prop="payment">
        <template slot-scope="scope">{{ scope.row.payment | vPayment(paymentList) }}</template>
      </el-table-column>
      <el-table-column label="地址" prop="address" width="300" />
      <el-table-column label="售价" prop="price" />
      <el-table-column label="成本" prop="costPrice" />
      <el-table-column label="收入" prop="netIncome" />
      <el-table-column label="运费" prop="freight" />
      <el-table-column label="快递公司" prop="express">
        <template slot-scope="scope">{{ scope.row.express | vExpress(EMSList) }}</template>
      </el-table-column>
      <el-table-column label="单号" prop="EMS" width="150">
        <div class="erji-code" slot-scope="scope">{{ scope.row.EMS }}</div>
      </el-table-column>
      <el-table-column label="推荐人" prop="referrer" />
      <el-table-column label="赠品" prop="gift">
        <template slot-scope="scope">{{ scope.row.gift | vGift }}</template>
      </el-table-column>
      <el-table-column label="赠品价格" prop="giftPrice" />
      <el-table-column label="货物情况" prop="cargoCase">
        <template slot-scope="scope">{{ scope.row.cargoCase | vCargoCase }}</template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="amend(scope.row)">修改</el-button>
          <el-button type="text" size="small">隐藏</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <my-pagination
      :all-total="pageObj.allTotal"
      :current-page="pageObj.currentPage"
      :page-size="pageObj.pageSize"
      :page-sizes="pageObj.pageSizes"
      @pageChange="pageChange"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import { mixins } from '@/mixins'
import { Format } from "@/utils/date.js"
import { CW000300, CW000301, CW000302 } from '@/service/mock/indent/bluetooth'
import myPagination from "@/components/pagination/my-pagination";
export default {
  components: { myPagination },
  mixins: [mixins],
  data () {
    return {
      formData: {
        name: '', // 姓名
        express: '', // 快递
        payment: '', // 付款方式
        selectData: '' // 时间
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
      EMSList: [], // 快递列表
      paymentList: [], // 付款方式
      isSelectDisabled: false,
      isDateDisabled: false,
      currentObj: {
        title: '',
        date: ''
      },
      contentNum: 0,
      erjiList: [], // 耳机列表
      pageObj: {
        allTotal: 0, // 总条数
        currentPage: 1, // 当前页数
        pageSize: 20, // 每页条数
        pageSizes: [10, 20, 50, 100]
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      await this.CW000301()
      await this.CW000302()
      await this.searchClick()
    },
    addClick () { // 新增订单
    
    },
    async CW000301 () { // 获取快递公司列表
      let res = await CW000301({})
      console.log('res', res)
      if (res.data.code === 0) {
        this.EMSList = res.data.data
      }
    },
    async CW000302 () { // 获取付款方式
      let res = await CW000302({})
      console.log('res', res)
      if (res.data.code === 0) {
        this.paymentList = res.data.data
      }
    },
    async searchClick () { // 查询订单
      let param = {
        page: this.pageObj.currentPage,
        rows: this.pageObj.pageSize,
        name: this.formData.selectName,
        express: this.formData.express,
        payment: this.formData.payment,
        date: Format(this.formData.selectData, 'yyyy-MM-dd')
      }
      let res = await CW000300(param)
      console.log('耳机列表', res)
      if (res.data.code === 0) {
        this.erjiList = res.data.data.data
        this.pageObj.allTotal = res.data.data.allTotal
      }
    },
    pageChange (data) { // 每页条数切换回调事件
      this.pageObj.pageSize = data;
    },
    currentChange (data) { // 当前页切换事件
      this.pageObj.currentPage = data;
    },
  }
}
</script>

<style lang="scss" scoped>
  .blueTooth{
    padding: 20px;
    .search-box{
      padding: 0 20px;
    }
    .erji-table{
      .erji-code{
        color: #00A7FB;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
</style>
