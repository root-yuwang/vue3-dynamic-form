<template>
    <el-menu default-active="2" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>学校管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">校区管理</el-menu-item>
                <el-menu-item index="1-2">学期管理</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>教师管理</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>班级管理</template>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped lang="scss"></style>
