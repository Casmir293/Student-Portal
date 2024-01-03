<template>
  <section>
    <section>
      <v-app>
        <!-- header -->
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

        <!-- hero -->
        <v-card class="bg-myPurple rounded-0 pt-4">
          <v-card-item>
            <div class="text-overline mb-1 text-grey">January 2, 2024</div>
            <div class="text-h6 mb-1 font-weight-bold text-center">
              Welcome back, Casmir!
            </div>
            <div class="text-caption text-grey text-center">
              Always stay updated in your student portal
            </div>
            <div class="position-relative pt-3">
              <img
                src="../assets/images/student.png"
                alt="student"
                class="w-100"
              />
              <img
                src="../assets/images/Scholarcap.png"
                alt="Scholarcap"
                class="w-50 position-absolute"
                style="left: -5%; bottom: 35%"
              />
            </div>
          </v-card-item>
        </v-card>
      </v-app>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
