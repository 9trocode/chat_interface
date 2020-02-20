<template>
  <section class="main">
    <div class="form-box">
      <p class='title'>
        CHAT
        <bdi>YARD</bdi>
      </p>
      <form @submit.prevent="onSubmit">
      <input placeholder="Enter Username" required v-model="user.username"/>
      <button type="submit">
        CHAT NOW
      </button>
      </form>
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
          username: "",
        }
      }
    },
    methods: {
      ...mapActions(["authenticate"]),
      async onSubmit() {
        await this.authenticate(this.user)
          .then(() => this.$router.push({path: "/chat"}))
          .catch(error => console.log(error));
      }
    },
  }
</script>
<style lang="sass" scoped>
  @import "../../sass/components/Login"
</style>
