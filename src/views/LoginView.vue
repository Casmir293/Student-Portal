<template>
  <section class="content">
    <main>
      <!-- Dark Section -->
      <section class="dark-section bg-myBlack">
        <v-card
          class="mx-auto pa-12 pb-8 text-white bg-myBlack"
          elevation="8"
          max-width="600"
          rounded="0"
        >
          <div v-if="loginUI">
            <h2 class="pb-2 font-weight-bold text-h4">Login</h2>
            <p class="pb-4 font-weight-medium text-subtitle-1">
              Enter your account details
            </p>
            <v-text-field
              v-model="email"
              placeholder="Email"
              prepend-inner-icon="mdi-email-outline"
              variant="underlined"
              :rules="[(value) => !!value || 'Email cannot be empty']"
              required
            >
            </v-text-field>

            <v-text-field
              v-model="password"
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
                style="cursor: pointer"
                class="text-caption text-decoration-none text-white"
                @click="showResetPassword()"
                rel="noopener noreferrer"
              >
                Forgot Password?</a
              >
            </div>

            <v-btn
              @click="login"
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
          </div>

          <!-- Forgot Password Section -->
          <div v-if="forgotPassword">
            <h2 class="pb-2 font-weight-bold text-h4">Password Reset</h2>
            <p class="pb-4 font-weight-medium text-subtitle-1">
              Enter your email
            </p>
            <v-text-field
              v-model="resetEmail"
              placeholder="Email"
              prepend-inner-icon="mdi-email-outline"
              variant="underlined"
              :rules="[(value) => !!value || 'Email cannot be empty']"
              required
            >
            </v-text-field>
            <v-btn
              class="mt-4"
              color="myPurple"
              size="small"
              @click="resetPassword()"
            >
              Reset Password
            </v-btn>

            <!-- Sign Up -->
            <div
              class="text-caption d-flex align-center justify-space-between mt-10 mb-6"
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

            <!-- Sign In -->
            <div
              class="text-caption d-flex align-center justify-space-between mt-0"
            >
              <span class="text-white">Already have an account?</span>

              <v-btn color="grey-darken-3" size="small" @click="showLoginUI()">
                <router-link
                  to="/"
                  class="text-white text-decoration-none text-capitalize"
                  >Sign in</router-link
                >
              </v-btn>
            </div>
          </div>
        </v-card>
      </section>

      <!-- Purple Section -->
      <section class="purple-section bg-myPurple px-sm-4">
        <v-card
          class="pt-8 text-center"
          color="myPurple"
          rounded="0"
          :elevation="0"
        >
          <v-card-item class="pa-0">
            <v-card-title
              ><div class="text-h4 text-sm-h3 text-md-h2 pb-2 text-left pl-4">
                <span class="font-weight-black">Welcome to</span><br />
                <span class="text-h5 text-sm-h4 text-md-h3"
                  >student portal</span
                >
              </div></v-card-title
            >

            <v-card-subtitle
              ><div
                class="font-weight-medium text-subtitle-1 text-left pb-sm-5 pl-4"
              >
                login to access your account
              </div></v-card-subtitle
            >
          </v-card-item>

          <v-card-text class="pa-sm-0">
            <div>
              <img src="/src/assets/images/banner.png" alt="login-img" />
            </div>
          </v-card-text>
        </v-card>
      </section>
    </main>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../main";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import router from "../router";

const visible = ref(false);
const email = ref("");
const password = ref("");
const resetEmail = ref("");
const forgotPassword = ref(false);
const loginUI = ref(true);

// Sign in with email and password
const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    // Redirect or navigate to the user's page upon successful login
    router.push("/student");
  } catch (error) {
    console.error("Error logging in:", error.message);
    if (error.message === "Firebase: Error (auth/invalid-email).") {
      alert("Input correct email & password!");
    }
  }
};

const showResetPassword = () => {
  forgotPassword.value = true;
  loginUI.value = false;
};

const showLoginUI = () => {
  forgotPassword.value = false;
  loginUI.value = true;
};

// Rest password function
const resetPassword = async () => {
  try {
    const userCredential = await sendPasswordResetEmail(auth, resetEmail.value);
    alert(`An email has been sent to ${resetEmail.value} for password reset.`);
    forgotPassword.value = false;
    loginUI.value = true;
  } catch (error) {
    alert("Input valid email:", error.message);
    resetEmail.value = "";
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "poppins", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: column-reverse;
}

// Media Query for Ipad
@media (min-width: 576px) {
  main {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: #2937b1;
  }

  .content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .dark-section {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .purple-section {
    width: 100%;
  }

  img {
    width: 80%;
    height: auto;
  }
}

// Media Query for Laptops
@media (min-width: 992px) {
}
</style>
