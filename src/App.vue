<template>
  <div class="min-h-screen bg-background">
    <!-- Subtle accent line at top -->
    <div class="fixed left-0 top-0 z-50 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

    <Navbar />

    <main>
      <component
        :is="component"
        :key="i"
        :pageId="id"
        v-for="({ component, id }, i) in PAGES.filter((p) => p.component)"
      />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import "./assets/fonts.css";
import "./assets/main.css";

import { PAGES } from "./utils/pages";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>
