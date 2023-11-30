<template>
  <template v-for="(item, index) in buttonItems" :key="index">
    <el-button v-bind="item">{{ item.name }}</el-button>
  </template>
</template>
<script setup lang="ts">
const props = defineProps({
  buttonItems: {
    type: Array,
    default: () => [],
  },
});
</script>