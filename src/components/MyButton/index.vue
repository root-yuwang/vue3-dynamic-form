<template>
  <template v-for="(item, index) in buttonItems" :key="index">
    <el-button
      v-if="item.buttonConfig.isHide"
      v-bind="getButtonProps(item)"
    ></el-button>
  </template>
</template>
<script setup lang="tsx">
import { ref, toRef } from "vue";
const props = defineProps({
  buttonItems: {
    type: Array,
    default: () => [],
  },
});
// 获取button配置属性
const getButtonProps = (item) => {
  const props = { ...item.buttonConfig };
};
</script>
