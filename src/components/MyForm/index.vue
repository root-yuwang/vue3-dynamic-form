<template>
  <el-form ref="formRef" :model="formModel" v-bind="formConfig">
    <!-- 默认插槽 -->
    <slot></slot>
    <!-- 具体组件 -->
    <template v-for="(item, index) in formItems" :key="index">
      <el-form-item v-bind="item">
        <component
          v-if="item.prop"
          :is="item.type"
          :placeholder="item.placeholder"
          v-model="formModel[item.prop]"
          v-bind="item.optsConfig"
        >
        </component>
        <slot
          :name="item.optsConfig.slotName"
          v-bind="item.optsConfig.slotData"
          v-else
        ></slot>
      </el-form-item>
    </template>
  </el-form>
  <el-button v-bind="formButton">保存</el-button>
</template>
<script setup lang="tsx">
import { ref, toRefs } from "vue";
import { getRulesValidate } from "../../utils/form";
const props = defineProps({
  //  表单值
  formModel: {
    type: Object,
    default: () => {},
  },
  // 表单配置项
  formConfig: {
    type: Object,
    default: () => {},
  },
  // 表单内容数组
  formItems: {
    type: Array,
    default: () => [],
  },
  formButton: {
    type: Object,
    default: () => {},
  },
});

const { formItems, formConfig, formModel } = toRefs(props);
// 表单校验规则统一处理

formConfig.value.rules = getRulesValidate(formItems.value);


defineExpose({
  formModel: formModel.value,
});
</script>
