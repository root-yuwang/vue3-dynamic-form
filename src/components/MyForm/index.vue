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
  <div class="btn-box" v-if="buttonItems.length">
    <MyButton :buttonItems="buttonItems"></MyButton>
  </div>
</template>
<script setup lang="tsx">
import { ref, toRefs } from "vue";
import { getRulesValidate } from "../../utils/form";
import type { ElForm, FormInstance } from "element-plus";
import MyButton from "../MyButton/index.vue";

const formRef = ref<FormInstance>();
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

  buttonItems: {
    type: Array,
    default: () => [],
  },
});

const { formItems, formConfig, formModel } = toRefs(props);
// 表单校验规则统一处理

formConfig.value.rules = getRulesValidate(formItems.value);

defineExpose({
  formModel: formModel.value,
  formEl: formRef,
});
</script>
<style lang="scss">
.btn-box {
  display: flex;
  justify-content: flex-end;
}
</style>
