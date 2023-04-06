<template>
  <div class="container main" >
    <AppHeader/>
    <router-view></router-view>
  </div>
  <AppFooter/>
</template>
<script>
import AppHeader from './components/header.vue';
import AppFooter from './components/footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style src="./css/common.css"></style>
<style lang="scss" scoped>
  .main {
    height: calc(100vh);
    flex-direction: column;
    display: flex;
    align-items: stretch;
    position: relative;
  }
</style>
