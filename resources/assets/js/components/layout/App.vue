<template>
  <div id="app">
    <site-navigation/>
    <router-view></router-view>
    <site-footer/>
  </div>
</template>

<script>
import SiteNavigation from "@/components/SiteNavigation";
import SiteFooter from "@/components/SiteFooter";
export default {
  name: "App",
  components: {
    SiteNavigation,
    SiteFooter
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 56px;
  // color: #2c3e50;
}
</style>
