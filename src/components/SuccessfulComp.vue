<template>
  <div class="text-center">
    <v-card width="400">
      <v-card-text>
        <img
          src="../assets/images/successful.png"
          alt="successful"
          class="w-50 h-auto"
        />
      </v-card-text>
      <v-card-item>
        <v-card-title>Registration successful!</v-card-title>

        <v-card-subtitle
          >Please check your email for verification.</v-card-subtitle
        >
      </v-card-item>

      <v-card-actions>
        <v-btn> <router-link to="/">Exit</router-link> </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
