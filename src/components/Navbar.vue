<template>
  <!-- Desktop -->
  <header class="fixed left-0 top-0 z-30 hidden w-full md:block">
    <div
      class="mx-auto flex max-w-content items-center justify-between px-6 py-6 md:px-10 backdrop-blur-md bg-background/80"
    >
      <a href="#landing" class="text-sm font-medium text-text/90 hover:text-text transition-colors">
        Robert Reder
      </a>
      <nav class="flex items-center gap-8">
        <a
          v-for="tab in PAGES.filter((p) => p.name)"
          :key="tab.name"
          :href="tab.href"
          :target="tab.href?.startsWith('/') ? '_blank' : '_self'"
          class="text-[0.8125rem] text-muted hover:text-accent transition-colors"
        >
          {{ tab.name }}
        </a>
      </nav>
    </div>
  </header>

  <!-- Mobile -->
  <header class="fixed left-0 top-0 z-30 flex w-full items-center justify-between px-6 py-5 backdrop-blur-md bg-background/80 md:hidden">
    <a href="#landing" class="text-sm font-medium text-text/90">
      Robert Reder
    </a>
    <Hamburger :open="navOpen" @toggle="navOpen = !navOpen" />
  </header>

  <Menu :open="navOpen" @close="navOpen = false" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PAGES } from "../utils/pages";
import Hamburger from "./Hamburger.vue";
import Menu from "./Menu.vue";

const navOpen = ref(false);
</script>
