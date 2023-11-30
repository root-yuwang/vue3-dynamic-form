<template>
  <div class="bg">
    <div class="login-box">
      <h2 class="title">YY管理后台</h2>
      <Myform
        ref="myFormRef"
        :formConfig="formConfig"
        :formModel="formModel"
        :formItems="formItems"
      />
      <div class="btn-box">
        <el-button class="btn" type="primary" @click="toRouter">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import Myform from "../../components/MyForm/index.vue";
import type { ElForm, FormInstance, FormProps } from "element-plus";
import { Login } from "../../api/interface/form";
const myFormRef = ref<FormInstance>();
// 表单配置项
const formConfig = {
  labelPosition: "right", //表单label对齐方式
  inline: true,
  labelWidth: "70px",
};
// 表单信息
const formModel = ref<Login.loginForm>({
  username: "daa",
  password: "13131",
});
// 表单内容
const formItems = [
  {
    type: "el-input",
    prop: "username",
    placeholder: "请输入用户名",
    label: "用户名",
    isValidate: true,
    size: "small",
    style: {
      width: "92%",
    },
    rule: [
      {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
      },
    ],
  },
  {
    type: "el-input",
    prop: "password",
    placeholder: "请输入密码",
    label: "密码",
    isValidate: true,
    size: "small",
    style: {
      width: "92%",
    },
    rule: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur",
      },
    ],
  },
];

const Router = useRouter();
const toRouter = () => {
  let formEl = myFormRef.value.formEl;
  formEl.validate((valid: any, fields: any) => {
    if (valid) {
      Router.push({
        path: "/",
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<style scoped lang="scss">
.bg {
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/login-bg.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  .login-box {
    position: absolute;
    right: 300px;
    bottom: 400px;
    width: 400px;
    border-radius: 10px;
    background-color: rgb(95 187 188 / 84%);
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      .btn {
        width: 350px;
        background: #249a82;
        border: none;
      }
    }
  }
}
</style>
