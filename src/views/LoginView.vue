<template>
  <section>
    <section class="purple">
      <div><span>Welcome to</span> student portal</div>
      <div>login to access your account</div>
      <div>
        <img src="/src/assets/images/banner.png" alt="login-img" />
      </div>
    </section>
    <section class="dark">
      <v-card
        class="mx-auto pa-12 pb-8 text-white bg-grey-darken-2"
        elevation="8"
        max-width="448"
        rounded="0"
      >
        <h2 class="pb-2">Login</h2>
        <p class="pb-4">Enter your account details</p>
        <v-text-field
          placeholder="Username"
          prepend-inner-icon="mdi-account-outline"
          variant="underlined"
          :rules="[(value) => !!value || 'Username cannot be empty']"
          required
        >
        </v-text-field>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          placeholder="Password"
          prepend-inner-icon="mdi-lock-outline"
          variant="underlined"
          :rules="[(value) => !!value || 'Password cannot be empty']"
          required
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <div>
          <a
            class="text-caption text-decoration-none text-white"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot Password?</a
          >
        </div>

        <v-btn
          block
          class="mb-15 mt-8 text-capitalize"
          size="large"
          color="primary"
        >
          Login
        </v-btn>

        <div class="text-caption d-flex align-center justify-space-between">
          <span class="text-white">Don't have an account?</span>

          <v-btn class="mt" color="grey-darken-3" size="small">
            <router-link
              to="/register"
              class="text-white text-decoration-none text-capitalize"
              >Sign up</router-link
            >
          </v-btn>
        </div>
      </v-card>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<style lang="scss" scoped>
* {
  font-family: "poppins", fantasy;
}

.dark {
  color: #fff;
}
</style>
