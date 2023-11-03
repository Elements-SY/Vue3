<template>
  <div>
    <el-row>
      <el-col>
        <yl-form
          ref="ruleForm"
          :formConfig="formConfig"
          :formParams="formParams"
          :inline="false"
          formWidth="auto"
          @blur="blurEvent"
        />
      </el-col>
    </el-row>
    <yl-table ref="ylTable" :columnData="columnData" :tableData="tableData">
    </yl-table>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, toRefs, watch, nextTick } from "vue";
import YlForm from "@/components/YlElementUIPro/packages/YlForm/index.js";
import YlTable from "@/components/YlElementUIPro/packages/YlTable/index.js";
import { formConfig } from "./formConfig";
import { columnData, tableData } from "./tableConfig";
import { queryForm } from "@/utils/index";
const state = reactive({
  formConfig: formConfig, // 表单配置项
  formParams: queryForm(formConfig), // 表单参数
  pageConfig: {
    // 分页配置项
    isPagination: true,
    total: 0,
    pageData: {
      page: 1,
      size: 10,
    },
  },
  columns: columnData, // 表头
  tableData: tableData, // 表格数据
});
</script>
<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
