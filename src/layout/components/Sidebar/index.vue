<template>
    <div class="sidebar">
        <div class="sidebar-item">
            <div class="sidebar-item-title">
                总览
            </div>
            <div class="sidebar-item-menu" :class="{active: $route.path === '/'}">
                总览
            </div>
        </div>
        <div >

        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>

<style lang="scss" scoped>
.sidebar {
    height: calc(100vh - 56px);
    width: 260px;
    padding: 50px 32px;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    box-sizing: border-box;
    .sidebar-item {
        .sidebar-item-title {
            padding: 10px 0;
            font-size: 16px;
            font-weight: bold;
            // color: #333;

        }
        .sidebar-item-menu {
            padding: 10px 16px;
            border-radius: 8px;
            &:hover {
                background-color: rgba(64, 158, 255, 0.1);
            }
            &.active {
                background-color: rgba(64, 158, 255, 0.2);
            }
        }
    }
}
</style>
