<template>
  <el-table ref="table" :data="tableData">
    <template v-for="item in columnData" :key="item.prop">
      <el-table-column
        v-if="!item.type"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :align="item.align"
        :fixed="item.fixed"
        :sortable="item.sort"
        :formatter="item.formatter"
      >
      </el-table-column>
      <el-table-column
        v-if="item.type == 'Link'"
        :label="item.label"
        :min-width="item.minWidth"
        :align="item.align"
      >
        <template #default="scope">
          <el-link type="primary" @click="linkEvent">{{
            scope.row[item.prop]
          }}</el-link>
        </template>
      </el-table-column>

      <el-table-column
        v-if="item.type == 'Operation'"
        :label="item.label"
        :min-width="item.minWidth"
        :align="item.align"
      >
        <template #default="scope">
          <el-button
            v-for="btn in item.buttons"
            :key="btn.event"
            :type="btn.type || 'primary'"
            :size="btn.size"
            :plain="btn.plain"
            :text="btn.isText"
            :link="btn.isLink"
            :round="btn.round"
            :circle="btn.circle"
            :icon="
              btn.icon == 'View' ? View : btn.icon == 'Edit' ? Edit : Delete
            "
            :disabled="btn.disabled"
            @click="btnEvent(btn.event, scope.row)"
          >
            {{ btn.text }}
          </el-button>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { Delete, Edit, View } from "@element-plus/icons-vue";
defineProps({
  tableData: {
    type: Array,
  },
  columnData: {
    type: Array,
  },
});
const emit = defineEmits([]);

function linkEvent(item) {
  emit("link", item);
}

function btnEvent(item) {
  emit(item.event, item);
}
</script>
