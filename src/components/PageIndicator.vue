<template>
  <div class="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 2xl:block">
    <div class="flex flex-col gap-2">
      <a
        v-for="page in PAGES.filter((p) => p.name)"
        :key="page.id"
        :href="page.href"
        class="group flex items-center justify-end gap-3"
      >
        <span
          class="text-xs text-transparent transition-all group-hover:text-text-muted"
        >
          {{ page.name }}
        </span>
        <div
          class="h-1.5 w-1.5 rounded-full transition-all"
          :class="activePage === page.id ? 'bg-text scale-125' : 'bg-text-muted/50 group-hover:bg-text-muted'"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PAGES } from "@/utils/pages";
import { activePage } from "@/utils/store";
</script>
