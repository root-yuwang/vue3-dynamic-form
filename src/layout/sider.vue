<template>
  <el-menu
    default-active="2"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="2" @click="toRouter('/')">
      <el-icon><icon-menu /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="4" @click="toRouter('/user')">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>用户</template>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";

const router = useRouter();

const toRouter = (val:string) => {
  router.push({
    path: val,
  });
};

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
};
</script>
<style scoped lang="scss"></style>
