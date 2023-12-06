<template>
  <section>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pt-8 text-center" color="myPurple" rounded="0">
          <v-card-item>
            <v-card-title
              ><div class="text-h4 pb-2">
                <span class="font-weight-bold">Welcome to</span><br />
                student portal
              </div></v-card-title
            >

            <v-card-subtitle
              ><div class="font-weight-medium text-subtitle-2">
                login to access your account
              </div></v-card-subtitle
            >
          </v-card-item>

          <v-card-text>
            <div>
              <img src="/src/assets/images/banner.png" alt="login-img" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- <section class="purple">
      <div>
        <span class="font-weight-bold">Welcome to</span><br />
        student portal
      </div>
      <div class="font-weight-medium">login to access your account</div>
      <div>
        <img src="/src/assets/images/banner.png" alt="login-img" />
      </div>
    </section> -->
    <section class="dark">
      <v-card
        class="mx-auto pa-12 pb-8 text-white bg-myBlack"
        elevation="8"
        max-width="448"
        rounded="0"
      >
        <h2 class="pb-2 font-weight-bold text-h4">Login</h2>
        <p class="pb-4 font-weight-medium text-subtitle-1">
          Enter your account details
        </p>
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
          color="myPurple"
        >
          Login
        </v-btn>

        <div
          class="text-caption d-flex align-center justify-space-between mb-10"
        >
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
  font-family: "poppins", sans-serif;
  font-weight: 400px;
}
</style>
