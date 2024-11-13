<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <router-view />
    <GifBackground />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GifBackground from "@/components/GifBackground.vue";

export default {
  name: "App",
  components: {
    Header,
    GifBackground,
  },
};
</script>

<style>
/* Ваші додаткові стилі, якщо потрібно */
</style>
