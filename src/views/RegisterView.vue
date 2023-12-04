<template>
  <div>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="firstName"
          label="Username"
          :rules="[(value) => !!value || 'Username cannot be empty']"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          label="Password"
          :rules="[(value) => !!value || 'Password cannot be empty']"
          required
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
</script>

<style lang="scss" scoped></style>
