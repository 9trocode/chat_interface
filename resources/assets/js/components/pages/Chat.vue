<template>
  <section class="main">
    <LeftSideBar class="left-side-bar" v-bind:channels="this.channels"></LeftSideBar>
    <Main class="main-bar" ></Main>
    <RightSideBar  class="right-side-bar"></RightSideBar>
  </section>
</template>

<script>
  import {mapState, mapActions, mapMutations, mapGetters} from "vuex";
  import LeftSideBar from "../utils/left_sidebar";
  import RightSideBar from "../utils/right_sidebar";
  import Main from "../utils/main_bar";
  export default {
    name: "Index",
    data() {
      return {
        loading: true,
        user: {
          username: "Alex",
        }
      }
    },
    computed: {
      ...mapGetters({
        channels: "getChannel"
      })
    },
   async mounted() {
     await this.connectWs();
    },
    components: {
      LeftSideBar,
      RightSideBar,
      Main
    },
    methods: {
      ...mapActions(["privateChat", "getPrivateChat","connectWs"]),
      // async onSubmit() {
      //   await this.authenticate(this.user)
      //     .then(() => console.log('Authenticated'))
      //     .catch(error => console.log(error));
      // }
    },
  }
</script>

<style lang="sass">
  @import "../../sass/components/Dashboard"
</style>
