<template>
    <Navbar/>
    <div>
        <Sidebar/>
        <AppMain/>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive, watch, nextTick, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AppMain, Navbar, Sidebar } from "./components";
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
onMounted(() => {
})
const state = reactive({
    exclude: 'keepAlive-companyInfo',
    refreshing: true,
})
watch(
)
// provide('onReload', onReload)
</script>
