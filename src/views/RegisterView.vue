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
            v-model="firstname"
            placeholder="Firstname"
            prepend-inner-icon="mdi-account-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Firstname cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="surname"
            placeholder="Surname"
            prepend-inner-icon="mdi-account-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Surname cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="email"
            placeholder="Email"
            prepend-inner-icon="mdi-email-outline"
            variant="underlined"
            type="email"
            :rules="emailRules"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="phoneNum"
            placeholder="Phone Num"
            prepend-inner-icon="mdi-phone-outline"
            variant="underlined"
            type="tel"
            :rules="[(value) => !!value || 'Phone Num cannot be empty']"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="formattedRegNum"
            placeholder="Reg Num"
            prepend-inner-icon="mdi-notebook-edit-outline"
            variant="underlined"
            type="text"
            :rules="[
              (value) => !!value || 'Reg Num cannot be empty',
              (value) =>
                /^\d{4}\/\d{5}$/.test(value) ||
                'Must be in a valid format Eg 2023/12345',
            ]"
            required
            maxlength="10"
          ></v-text-field>

          <v-select
            v-model="department"
            label="Department"
            :items="courseList"
            prepend-inner-icon="mdi-school-outline"
            variant="underlined"
            :rules="[(value) => !!value || 'Department cannot be empty']"
            required
          >
          </v-select>

          <v-text-field
            v-model="password"
            :append-inner-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="underlined"
            :rules="passwordRules"
            required
            @click:append-inner="togglePasswordVisibility"
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            :append-inner-icon="
              confirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'
            "
            :type="confirmPasswordVisible ? 'text' : 'password'"
            placeholder="Confirm Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="underlined"
            :rules="confirmPasswordRules"
            required
            @click:append-inner="toggleConfirmPasswordVisibility"
          ></v-text-field>

          <v-checkbox
            v-model="terms"
            color="myPurple"
            label="I have verified that my details are authentic"
          ></v-checkbox>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              @click="submitForm"
              variant="outlined"
              color="deep-purple-lighten-2"
            >
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
import { ref, watch } from "vue";
import { auth } from "../main";
import { getDatabase, ref as dbRef, set } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

const passwordVisible = ref(false);
const confirmPasswordVisible = ref(false);
const terms = ref(false);
const firstname = ref("");
const surname = ref("");
const email = ref("");
const phoneNum = ref("");
const formattedRegNum = ref("");
const department = ref("");
const courseList = ref([
  "Frontend Web Development",
  "Backend Web Development",
  "Full-Stack Web Development",
  "Mobile App Development",
  "Web Design (UI/UX)",
  "Data Analytics",
  "Graphic Design",
]);
const password = ref("");
const confirmPassword = ref("");

// Submit registration form to database
const submitForm = async () => {
  // Check if all fields are filled
  if (
    !firstname.value ||
    !surname.value ||
    !(email.value && /.+@.+\..+/.test(email.value)) ||
    !phoneNum.value ||
    !(formattedRegNum.value && /^\d{4}\/\d{5}$/.test(formattedRegNum.value)) ||
    !department.value ||
    !(
      password.value &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_`+={}[\]|\\:;'<>,.?/£#¡€∞§¶•ªº–≠¢-]).{8,}$/.test(
        password.value
      )
    ) ||
    !(confirmPassword.value && confirmPassword.value === password.value) ||
    !terms.value
  ) {
    alert("Fill all fields correctly!");
    return;
  } else {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      // Send email verification
      await sendEmailVerification(userCredential.user);

      // Update user profile (optional)
      await updateProfile(userCredential.user, {
        displayName: firstname.value + " " + surname.value,
      });

      alert(
        "Registration successful. Please check your email for verification."
      );

      // Store user details in the Realtime Database
      const userData = {
        firstname: firstname.value,
        surname: surname.value,
        email: email.value,
        phoneNum: phoneNum.value,
        regNum: formattedRegNum.value,
        department: department.value,
        password: password.value,
      };

      const db = getDatabase();
      await set(dbRef(db, "users/" + formattedRegNum.value), userData);

      // Redirect or navigate to the user's page upon successful registration
      // (You can implement your own routing logic here)
      // router.push('/user-profile');
    } catch (error) {
      console.error("Error submitting data to Firebase:", error.message);
    }
  }
};

// Automatically insert "/" after the first four digits
watch(formattedRegNum, (newValue) => {
  if (newValue.length === 4 && !newValue.includes("/")) {
    formattedRegNum.value = newValue + "/";
  }
});

// Verify correct email format
const emailRules = [
  (value) => !!value || "Email cannot be empty",
  (value) => /.+@.+\..+/.test(value) || "Enter a valid email address",
];

// Verify password strength
const passwordRules = [
  (value) => !!value || "Password cannot be empty",
  (value) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_`+={}[\]|\\:;'<>,.?/£#¡€∞§¶•ªº–≠¢-]).{8,}$/.test(
      value
    ) ||
    "Password must be at least 8 characters with uppercase, lowercase, digit, and special character",
];

// Confirm Password
const confirmPasswordRules = [
  (value) => !!value || "Password cannot be empty",
  (value) => value === password.value || "Passwords do not match",
];

// Password visibility toggle
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

// Confirm password visibility toggle
const toggleConfirmPasswordVisibility = () => {
  confirmPasswordVisible.value = !confirmPasswordVisible.value;
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
