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
          <h2 class="pb-2 font-weight-bold text-h4">User Registration</h2>
          <p class="pb-4 font-weight-medium text-subtitle-1">
            Enter your details
          </p>
          <v-text-field
            placeholder="Firstname"
            prepend-inner-icon="mdi-account-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Firstname cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            placeholder="Surname"
            prepend-inner-icon="mdi-account-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Surname cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            placeholder="Email"
            prepend-inner-icon="mdi-email-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Email cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            placeholder="Phone Num"
            prepend-inner-icon="mdi-phone-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Phone Num cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            placeholder="Reg Num"
            prepend-inner-icon="mdi-notebook-edit-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Reg Num cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            placeholder="Department"
            prepend-inner-icon="mdi-school-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Department cannot be empty']"
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

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            placeholder="Confirm Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Password cannot be empty']"
            required
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-checkbox
            v-model="terms"
            color="myPurple"
            label="I have verified that my details are authentic"
          ></v-checkbox>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn variant="outlined" color="deep-purple-lighten-2">
              Complete Registration

              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>

          <v-divider class="mt-5"></v-divider>

          <div
            class="text-caption d-flex align-center justify-space-between mt-5"
          >
            <span class="text-white">Already have an account?</span>

            <v-btn class="mt" color="grey-darken-3" size="small">
              <router-link
                to="/"
                class="text-white text-decoration-none text-capitalize"
                >Sign in</router-link
              >
            </v-btn>
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
                Register your account
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

const visible = ref(false);
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
