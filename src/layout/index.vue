<template>
  <div id="layuot">
    <div class="left">
      <sider></sider>
    </div>
    <div class="right">
      <app-main></app-main>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
import sider from "./sider.vue";
import appMain from "./appMain.vue";
</script>
<style scoped lang="scss">
#layuot {
  display: flex;

  .left {
    width: 200px;
    min-height: 100vh;
    box-shadow: 3px 0px 10px 0px rgb(220 221 227 / 66%);
  }

  .right {
    flex: 1;
    min-height: 100vh;
  }
}
</style>
