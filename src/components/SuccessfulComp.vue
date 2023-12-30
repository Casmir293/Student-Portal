<template>
  <div class="text-center bg-myBlack py-10 px-4 h-screen d-flex align-center">
    <v-card max-width="400" class="bg-grey-darken-1 mx-auto">
      <v-card-text>
        <img
          src="../assets/images/successful.png"
          alt="successful"
          class="w-50"
        />
      </v-card-text>
      <v-card-item>
        <v-card-title>Registration successful!</v-card-title>

        <v-card-subtitle
          >Please check your email for verification.</v-card-subtitle
        >
      </v-card-item>

      <v-btn class="mx-auto mb-10" color="grey-darken-3" size="small">
        <router-link
          to="/"
          class="text-white text-decoration-none text-capitalize"
          >Exit</router-link
        >
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
