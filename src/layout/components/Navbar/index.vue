<template>
    <div class="navbar">
        <div class="logo">
            <img src="https://picsum.photos/100/40" alt="">
        </div>
        <div class="menu">
            <el-menu ellipsis :default-active="menuIndex" class="el-menu-popper-demo" router mode="horizontal">
                <el-menu-item index="/">首页</el-menu-item>
                <el-sub-menu index="/assembly">
                    <template #title>组件</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/method">方法</el-menu-item>
                <el-menu-item index="/knowledge">知识点</el-menu-item>
                <el-menu-item index="/about">关于</el-menu-item>
            </el-menu>
        </div>
        <div class="pattern">
            <el-switch v-model="pattern" @change="handlePattern" active-color="#13ce66" inactive-color="#ff4949"
                active-action-icon="Moon" inactive-action-icon="Sunny" />
        </div>
        <div class="user">
            <el-avatar> TYX </el-avatar>
            我的代码没bug
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const pattern = ref(false)
const menuIndex = ref('/')
const handlePattern = () => {
    // 切换class的方法
    const html = document.querySelector('html')
    if(pattern.value){
        html.classList.add('dark')
    }else{
        html.classList.remove('dark')
    }
    // pattern.value = !pattern.value
}
onMounted(() => {
    console.log("%c Line:50 🍉 route.path", "color:#ed9ec7", route.path);
    menuIndex.value = route.path
})
</script>

<style lang="scss" scoped>
.navbar {
    height: 55px;
    border-bottom: 1px solid #dcdfe6;
    display: flex;
    line-height: 55px;
    .logo{
        width: 260px;
        padding-left: 50px;
        img{
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .menu {
        flex: 1;
        .el-menu-popper-demo{
            height: 55px;
        }
        .el-menu--horizontal>.el-menu-item{
            padding: 0 20px;
        }
        .el-menu--horizontal.el-menu{
            border-bottom: none;
        }
    }
    .pattern{
        width: 60px;
    }
    .user{
        width: 160px;
        font-size: 14px;
    }
}
</style>
