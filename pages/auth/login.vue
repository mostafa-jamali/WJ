<template>
  <b-row class="login w-100 justify-content-center">
    <b-col cols="12" md="6" lg="4">
      <b-form @submit.prevent="userLogin">
        <h3 class="mb-4 text-bold">
          ورود به حساب کاربری
        </h3>
        <b-form-group
          label="نام کاربری"
          label-for="username"
        >
          <b-form-input id="username" v-model="login.userName" trim></b-form-input>
        </b-form-group>
        <b-form-group
          label="رمز عبور"
          label-for="password"
        >
          <b-form-input id="password" v-model="login.password" trim></b-form-input>
        </b-form-group>

        <b-button variant="primary" type="submit" class="px-5 py-1 mt-5">ورود</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'Login',
  layout: 'login',
  data() {
    return {
      login: {
        userName: '',
        password: ''
      }
    };
  },

  methods: {
    ...mapMutations(['USERPROFILE']),

    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', {data: this.login})

        // this.$store.commit('USERPROFILE', response.data);
        this.$auth.strategies.local.user = response.data
      } catch (err) {
        console.log({err})
      }
    }
  }
};
</script>


