// vue的mixins的公共属性及方法
import store from '@/store/index.js'
import FileSaver from "file-saver";
import XLSX from "xlsx";

/**
 * 监听页面尺寸的变化
 */
window.addEventListener('resize', function () {
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight
  console.log(clientWidth)

  store.dispatch('setScreenWidth', clientWidth)
  store.dispatch('setScreenHeight', clientHeight)
})

export const mixins = {
  data () {
    return {
      
    }
  },
  computed: {
    screenWidth () {
      return this.$store.getters.getScreenWidth
    },
    screenHeight () {
      return this.$store.getters.getScreenHeight
    },
    crumbsNum () {
      return this.$store.getters.getCrumbsNum
    },
    currentCrumbs () {
      return this.$store.getters.getCurrentCrumbs
    },
    crumbsList () {
      return this.$store.getters.getCrumbsList
    }
  },
  methods: {
    exportExcel (id, title) { // 定义导出Excel表格事件
      /* 从表生成工作簿对象 */
      // 判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去，
      const xlsxParam = { raw: true };
      const fix = document.querySelector('.el-table__fixed');
      let wb;
      if (fix) {
        wb = XLSX.utils.table_to_book(document.querySelector('#' + id).removeChild(fix), xlsxParam);
        document.querySelector('#' + id).appendChild(fix);
      } else {
        wb = XLSX.utils.table_to_book(document.querySelector('#' + id));
      }
      // const wb = XLSX.utils.table_to_book(document.querySelector("#" + id));
      /* 获取二进制字符串作为输出 */
      const wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        /**
         * Blob 对象表示一个不可变、原始数据的类文件对象。
         * Blob 表示的不一定是JavaScript原生格式的数据。
         * File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
         * 返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
         */
        FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), title + ".xlsx");
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    }
  }
}
