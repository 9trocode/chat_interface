<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-5 mx-auto">
        <div class="jumbotron mb-0">
          <h5>Login</h5>
          <form class="form" @submit.prevent="onSubmit">
            <div class="form-group">
              <input
                placeholder="Email"
                class="form-control"
                :class="{ error: $v.user.email.$error }"
                type="email"
                id="email"
                @input="$v.user.email.$touch()"
                v-model.trim="user.email"
              >

              <div v-if="$v.user.email.$dirty">
                <p
                  class="error-message"
                  v-if="!$v.user.email.email"
                >Please enter a valid email address.</p>
                <p class="error-message" v-if="!$v.user.email.required">Email must not be empty.</p>
              </div>
            </div>

            <div class="form-group">
              <input
                placeholder="Password"
                class="form-control"
                :class="{ error: $v.user.password.$error }"
                type="password"
                id="password"
                v-model.trim="user.password"
                @input="$v.user.password.$touch()"
              >

              <div v-if="$v.user.password.$dirty">
                <p
                  class="error-message"
                  v-if="!$v.user.password.required"
                >Password must not be empty.</p>
                <p
                  class="error-message"
                  v-if="!$v.user.password.minLength"
                >Password must be least 6 character.</p>
              </div>
            </div>

            <button :disabled="$v.$invalid" type="submit" class="btn btn-block btn-secondary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login"
    }),
    onSubmit() {
      if (!this.$v.$invalid) {
        this.login(this.user)
          .then(() => this.$router.push({ path: "/" }))
          .catch(error => console.log(error));
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  }
};
</script>

<style scoped>
.jumbotron {
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.09);
  padding: 3rem 2rem;
}
</style>
