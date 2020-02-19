<template>
  <div class="container">
    <div class="row mt-5">
        <h3>TEST</h3>
    </div>
  </div>
</template>

<script>
  import SocketConnection from '../../services/web-socket-intgration'
  import {mapState, mapActions, mapMutations, mapGetters} from "vuex";
  export default {
    name:"Index",
    data () {
      return {
        loading: true,
        user: {
          username: "Alex",
        }
      }
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
      // let connect_ws = await SocketConnection.connect();
      // let subscribe_to_channel = await SocketConnection.subscribe('chat',);
      // let emit_message = subscribe_to_channel.emit("message", { user: 'Alex', name });
      // console.log(connect_ws, emit_message);
      // this.loading = false;
      this.onSubmit();
    }
  }
</script>

<style lang="sass">
</style>
