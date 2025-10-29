<template>
  <div class="fixed right-8 top-1/2 z-50 -translate-y-1/2">
    <div class="flex flex-col gap-2">
      <div
        v-for="page in PAGES.filter((p) => p.name)"
        :key="page.id"
        class="h-2 w-2 rounded-full transition-colors"
        :class="activePage === page.id ? 'bg-primary' : 'bg-text-secondary'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PAGES } from "@/utils/pages";
import { activePage } from "@/utils/store";
</script>
