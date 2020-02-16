<template>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
    <div class="container">
      <b-navbar-brand href="#">Adonis & Vue Boilerplate</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/login" class="nav-link" v-show="!loggedin">Login</router-link>
          <router-link to="/register" class="nav-link" v-show="!loggedin">Register</router-link>
          <b-nav-item-dropdown right v-show="loggedin">
            <template slot="button-content">
              <em>{{ currentUser.username }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logoutUser">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cookies from "browser-cookies";
export default {
  name: "site-navigation",
  computed: {
    ...mapGetters({
      loggedin: "auth/loggedin",
      isAdmin: "auth/isAdmin",
      currentUser: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      logout: "auth/logout"
    }),
    logoutUser() {
      this.logout()
        .then(() => console.log("you are successfuly loged out!"))
        .then(() => this.$router.push({ path: "/login" }))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
.navbar-brand {
  font-weight: 900;
}
.navbar {
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
}
</style>
