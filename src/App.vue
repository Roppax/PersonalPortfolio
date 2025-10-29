<template>
  <div class="bg-pattern bg-grid min-h-screen">
    <Navbar />
    <PageIndicator />

    <component
      :is="component"
      :key="i"
      :pageId="id"
      v-for="({ component, id }, i) in PAGES.filter((p) => p.component)"
    />

    <Footer class="hidden 2xl:block" />
  </div>
</template>

<script setup lang="ts">
import "./assets/fonts.css";
import "./assets/main.css";

import { onMounted } from "vue";
import { initializeOGLAnimation } from "./utils/ogl";

import { PAGES } from "./utils/pages";

import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import PageIndicator from "./components/PageIndicator.vue";
import { activePage } from "./utils/store";

onMounted(() => {
  initializeOGLAnimation();

  const hash = location.hash;
  if (!hash) return;
  activePage.value = hash.slice(1);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
