<template>
  <div>
    <Myform
      ref="myFormRef"
      :formConfig="formConfig"
      :formModel="formModel"
      :formItems="formItems"
      :formButton="formButton"
    />
  </div>
</template>
<script setup lang="tsx">
import Myform from "../../components/MyForm/index.vue";
import { ElForm } from "element-plus";

import { ref, reactive } from "vue";
import { Login } from "../../api/interface/form";
type FormInstance = InstanceType<typeof ElForm>

const myFormRef = ref<FormInstance>();

const formConfig = {
  labelPosition: "right", //表单label对齐方式
  inline: true,
  labelWidth: "70px",
};
const validateUserName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
const formItems = [
  {
    type: "el-input",
    prop: "userName",
    placeholder: "请输入账号",
    label: "账号",
    isValidate: true,
    rule: [
      {
        required: true,
        message: "请输入姓名",
        trigger: "blur",
      },
      { min: 3, max: 5, message: "长度再3-5个字符", trigger: "blur" },
      { validator: validateUserName, trigger: "blur" },
    ],
  },
  {
    type: "el-input",
    prop: "passWord",
    placeholder: "请输入密码",
    label: "密码",
    isValidate: true,
  },
  {
    type: "el-input",
    prop: "code",
    placeholder: "请输入验证码",
    label: "验证码",
    isValidate: true,
  },
];

const formModel = reactive<Login.reqLoginForm>({
  userName: "",
  passWord: "",
  code: "",
});
const onSubmitClick = (element) => {
  console.log("element", element);
};

const formButton = {
  type: "primary",
  size: "mini",
  plain: true,
  onclick: () => {
    onSubmitClick(myFormRef.value.element);
  },
};
</script>
<style scoped lang="scss"></style>
