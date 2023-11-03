/*
  操作、链接、图片、输入框、下拉输入框、checked、Switch
  根据上述的如果不使用卡槽那么就需要写各种if判断,所以常用的我们还是写if;
  而对于不常用的我们还是使用卡槽，
*/

import { ref } from 'vue';

const columnType = [
  "Operation",
  "Link",
  "Image",
  "Text",
  "TextArea",
  "InputNumber",
  "Number",
  "Select",
  "Search",
  "Checkbox",
  "RadioGroup",
  "Radio",
  "Switch",
  "Tag"
]
/*
 如果没有type，那么默认展示文本不做卡槽处理，如果有type并且type有值，那么就做卡槽处理。
 使用当前type的值作为卡槽的元素，然后再判断如果type的值在columnType不存在，
 那么在控制台打印error告诉用户该元素在columnType数组中不存在。
*/
export const columnData = ref([
  {
    prop: "contractName",
    align: "center",
    label: "常规名称长字段",
  },
  {
    prop: "contractDate",
    align: "center",
    label: "合同日期",
  },
  {
    type: "Link",
    prop: "city",
    align: "center",
    label: "地址",
  },
  {
    prop: "contractAmout",
    align: "center",
    label: "合同金额",
    sort: true,
    formatter: (row) => {
      return `${row.contractAmout}万`
    },
  },
  {
    type: "Link",
    prop: "site",
    align: "center",
    label: "网址",
  },
  {
    prop: "contractNum",
    align: "center",
    label: "合同编号",
  },
  {
    type: "Operation",
    width: "160",
    align: "center",
    label: "操作",
    buttons: [
      {
        event: 'edit',
        type: 'primary',
        icon: 'View',
        text: '查看',
        size: 'small',
        disabled: false
      },
      {
        event: 'edit',
        type: 'primary',
        icon: 'Edit',
        text: '编辑',
        size: 'small',
        disabled: false
      },
      {
        event: 'delete',
        type: 'danger',
        icon: 'Delete',
        text: '删除',
        size: 'small',
        disabled: false
      }
    ]
  },
]);
//表格数据的key键名要和columnData中的prop保持一致
export const tableData = ref([
  {
    "id": "1",
    "contractName": "医院设备1",
    "contractDate": "2023-01-30 14:44:19",
    "contractAmout": "50000",
    "contractNum": "1",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "2",
    "contractName": "医院设备2",
    "contractDate": "2023-01-29 14:44:19",
    "contractAmout": "30000",
    "contractNum": "2",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "3",
    "contractName": "医院设备3",
    "contractDate": "2023-01-28 15:44:19",
    "contractAmout": "75000",
    "contractNum": "3",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "4",
    "contractName": "医院设备4",
    "contractDate": "2023-01-27 15:44:19",
    "contractAmout": "80000",
    "contractNum": "4",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "5",
    "contractName": "医院设备5",
    "contractDate": "2023-01-26 15:44:19",
    "contractAmout": "80000",
    "contractNum": "5",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "6",
    "contractName": "医院设备6",
    "contractDate": "2023-01-25 15:44:19",
    "contractAmout": "80000",
    "contractNum": "6",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "7",
    "contractName": "医院设备7",
    "contractDate": "2023-01-24 15:44:19",
    "contractAmout": "80000",
    "contractNum": "7",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "8",
    "contractName": "医院设备8",
    "contractDate": "2023-01-23 15:44:19",
    "contractAmout": "80000",
    "contractNum": "8",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "9",
    "contractName": "医院设备9",
    "contractDate": "2023-01-22 15:44:19",
    "contractAmout": "80000",
    "contractNum": "9",
    "city": "北京",
    "site": "www.baidu.com"
  },
  {
    "id": "10",
    "contractName": "医院设备10",
    "contractDate": "2023-01-21 15:44:19",
    "contractAmout": "80000",
    "contractNum": "10",
    "city": "北京",
    "site": "www.baidu.com"
  }
]);

