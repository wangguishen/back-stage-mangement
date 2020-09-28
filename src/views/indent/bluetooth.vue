<template>
  <div class="page-box blueTooth">
    <el-row class="search-box">
      <el-col :span="24">
        <el-form ref="screenFrom" :inline="true" size="mini" :model="formData" class="screen-from toolbar">
          <el-form-item label="姓名">
            <el-select v-model="formData.selectName" filterable clearable placeholder="请选择标题名称">
              <el-option
                v-for="item in titleList"
                :key="item.id"
                :label="item.title"
                :value="item.date"
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        selectName: '', // 标题
        selectData: new Date() // 时间
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
  mounted () {

  },
  methods: {
    addClick () { // 新增订单
    
    },
    searchClick () { // 查询订单
    
    }
  }
}
</script>

<style lang="scss" scoped>
  .blueTooth{
    .search-box{
      padding: 0 20px;
    }
  }
</style>
