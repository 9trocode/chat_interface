<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import WS from "../../services/web-socket-intgration";
export default {
  name: "App",
  components: {

  },

  beforeCreate() {
    WS.connect()
  }
};
</script>

<style lang="sass">
  @import "../../sass/App"
</style>
