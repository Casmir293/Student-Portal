<template>
  <div class="text-center">
    <img
      src="../assets/images/successful.png"
      alt="successful"
      class="w-50 h-auto"
    />
    <p>
      <span>Registration successful!</span> <br />
      Please check your email for verification.
    </p>

    <router-link to="/">Exit</router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
