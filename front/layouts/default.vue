<template>
  <v-app id="app-top">
    <v-main>
      <v-container fluid class="app-container">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script></script>

<style scoped>
  .app-container {
    margin-top: 65px;
  }
</style>