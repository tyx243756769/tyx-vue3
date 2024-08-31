<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
      <!-- <keep-alive :include="cachedViews"> -->
        <router-view :key="key" />
      <!-- </keep-alive> -->
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
.app-main {
  height: calc(100vh - 104px);
  overflow-y: auto;
  padding-left: 260px;
  padding-top: 24px;
}
</style>
