<template>
  <div>
    <el-button type="primary" size="small" @click="addUpdateFn">新增</el-button>
    我是用户页面
    <el-dialog
      v-model="dialogVisible"
      title="新增用户"
      width="50%"
      :before-close="handleClose"
    >
      <Myform
        ref="myFormRef"
        :formConfig="formConfig"
        :formModel="formModel"
        :formItems="formItems"
        :buttonItems="buttonItems"
      />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import Myform from "../../components/MyForm/index.vue";
import type { ElForm, FormInstance, FormProps } from "element-plus";

import { ref, reactive } from "vue";
import { Login } from "../../api/interface/form";
import { addUser } from "../../api/login";
import { ElMessage } from "element-plus";

const myFormRef = ref<FormInstance>();

// 弹窗
const dialogVisible = ref(false);

const addUpdateFn = () => {
  dialogVisible.value = true;
};

const handleClose = (formEl: {
  resetFields: (arg0: (valid: any, fields: any) => void) => void;
}) => {
  formEl.resetFields(); //清除表单默认属性
  dialogVisible.value = false;
};

const formConfig = {
  labelPosition: "right", //表单label对齐方式
  inline: true,
  labelWidth: "70px",
};
// 自定义校验
// const validateUserName = (rule: any, value: any, callback: any) => {
//   if (value === "") {
//     callback(new Error("请输入用户名"));
//   } else {
//     callback();
//   }
// };
const validateEmail = (rule: any, value: any, callback: any) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let flag = emailRegex.test(value);
  if (!flag) {
    callback(new Error("请输入正确的邮箱"));
  } else {
    callback();
  }
};
const formItems = [
  {
    type: "el-input",
    prop: "username",
    placeholder: "请输入用户名",
    label: "用户名",
    isValidate: true,
    size: "small",
    rule: [
      {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
      },
      { min: 2, max: 5, message: "长度在2-50个字符", trigger: "blur" },
      // { validator: validateUserName, trigger: "blur" },
    ],
  },
  {
    type: "el-input",
    prop: "password",
    placeholder: "请输入密码",
    label: "密码",
    isValidate: true,
    size: "small",
    rule: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur",
      },
    ],
  },
  {
    type: "el-input",
    prop: "email",
    placeholder: "请输入邮箱",
    label: "邮箱",
    isValidate: true,
    size: "small",
    rule: [
      {
        required: true,
        message: "请输入邮箱",
        trigger: "blur",
      },
      { validator: validateEmail, trigger: "blur" },
    ],
  },
];

const formModel = reactive<Login.reqLoginForm>({
  username: "",
  password: "",
  email: "",
});
// 提交表单
const onSubmitClick = (formEl: {
  validate: (arg0: (valid: any, fields: any) => void) => void;
}) => {
  formEl.validate((valid: any, fields: any) => {
    if (valid) {
      console.log("submit!", formModel);
      addUserFun();
    } else {
      console.log("error submit!", fields);
    }
  });
};
const addUserFun = async () => {
  let res = await addUser(formModel);
  ElMessage({
    showClose: true,
    message: res.toString(),
    type: "success",
  });
  formModel.username = "";
  formModel.password = "";
  formModel.email = "";

  dialogVisible.value = false;
};

const buttonItems = [
  {
    type: "",
    size: "small",
    plain: true,
    name: "取消",
    onclick: () => {
      handleClose(myFormRef.value.formEl);
    },
  },
  {
    type: "primary",
    size: "small",
    plain: true,
    name: "提交",
    onclick: () => {
      onSubmitClick(myFormRef.value.formEl);
    },
  },
];
</script>
<style scoped lang="scss"></style>
