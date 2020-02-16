<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-5 mx-auto">
        <div class="jumbotron mb-0">
          <h5>Register</h5>
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
                placeholder="Username"
                class="form-control"
                :class="{ error: $v.user.username.$error }"
                type="text"
                id="username"
                v-model.trim="user.username"
                @input="$v.user.username.$touch()"
              >

              <div v-if="$v.user.username.$dirty">
                <p
                  class="error-message"
                  v-if="!$v.user.username.required"
                >username must not be empty.</p>
              </div>
            </div>

            <div class="form-group">
              <input
                placeholder="Name"
                class="form-control"
                :class="{ error: $v.user.name.$error}"
                type="text"
                id="name"
                v-model.trim="user.name"
                @input="$v.user.name.$touch()"
              >

              <div v-if="$v.user.name.$dirty">
                <p class="error-message" v-if="!$v.user.name.required">Name must not be empty.</p>
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

            <div class="form-group">
              <input
                placeholder="Repeat password"
                class="form-control"
                :class="{ error: $v.user.repeatPassword.$error }"
                type="password"
                id="repeatPassword"
                v-model.trim="user.repeatPassword"
                @input="$v.user.repeatPassword.$touch()"
              >

              <div v-if="$v.user.repeatPassword.$dirty">
                <p
                  class="error-message"
                  v-if="!$v.user.repeatPassword.sameAsPassword"
                >Passwords must be identical.</p>

                <p
                  class="error-message"
                  v-if="!$v.user.repeatPassword.required"
                >Password must not be empty.</p>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Auth from "@/services/Auth";
export default {
  data() {
    return {
      user: {
        email: "",
        username: "",
        name: "",
        password: "",
        repeatPassword: ""
      }
    };
  },
  methods: {
    register() {
      Auth.register(this.user)
        .then(() => this.$router.push({ path: "/login" }))
        .catch(error => console.log(error));
    },
    onSubmit() {
      if (!this.$v.$invalid) {
        this.register(this.user);
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      username: {
        required
      },
      name: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        required,
        minLength: minLength(6),
        sameAsPassword: sameAs("password")
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
