<template>
  <section class="main">
      <div class="form-box">
        <p class='title'>
          CHAT<bdi>YARD</bdi>
        </p>
        <input placeholder="Enter Username"/>
        <button>
          CHAT NOW
        </button>
      </div>
  </section>
</template>

<script>
  import SocketConnection from '../../services/web-socket-intgration'
  import {mapState, mapActions, mapMutations, mapGetters} from "vuex";
  export default {
    name: "Login",
    data() {
      return {
        loading: true,
        user: {
          username: "Alex",
        }
      }
    },
    components: {
    },
    methods: {
      ...mapActions(["authenticate"]),
      async onSubmit() {
        await this.authenticate(this.user)
          .then(() => console.log('Authenticated'))
          .catch(error => console.log(error));
      }
    },
    async created() {
      this.onSubmit();
    }
  }
</script>
<style lang="sass" scoped>
  @import "../../sass/components/Login"
</style>
