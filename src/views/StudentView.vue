<template>
  <section>
    <section>
      <v-app>
        <div
          :elevation="2"
          class="bg-myPurple px-sm-4 py-2 px-3 d-flex align-center justify-end"
        >
          <v-avatar color="deep-purple-darken-4">
            <v-icon size="40" icon="mdi-account-circle"></v-icon>
          </v-avatar>
          <div class="px-3">
            <div class="text-caption">Welcome</div>
            <div class="font-weight-bold">Casmir Onyeka</div>
          </div>
          <v-icon icon="mdi-logout"></v-icon>
        </div>
      </v-app>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
