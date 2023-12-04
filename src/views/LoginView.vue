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
      <h2>Login</h2>
      <p>Enter your account details</p>
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
        style="background-color: #1c1d21; color: white"
      >
        <v-text-field
          class="pb-4"
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
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot Password?</a
          >
        </div>

        <v-btn
          block
          class="mb-8 mt-4"
          color="blue"
          size="large"
          variant="tonal"
        >
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<style lang="scss" scoped>
// * {
//   background-color: yellow;
// }

.dark {
  background-color: #1c1d21;
  color: #fff;
}
</style>
