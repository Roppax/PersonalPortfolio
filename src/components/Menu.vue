<template>
  <Transition>
    <aside
      v-show="open"
      class="fixed inset-0 z-20 flex h-full w-full flex-col justify-center bg-background px-6"
    >
      <nav>
        <ul class="flex flex-col gap-6">
          <li
            v-for="tab in PAGES.filter((page) => page.name)"
            :key="tab.name"
          >
            <a
              :href="tab.href"
              class="text-3xl font-medium text-muted transition-colors hover:text-accent"
              @click="$emit('close')"
              :target="tab.href?.startsWith('/') ? '_blank' : '_self'"
            >
              {{ tab.name }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="mt-12 flex gap-6">
        <a href="https://github.com/Roppax" target="_blank" class="text-sm text-dim hover:text-accent">GitHub</a>
        <a href="https://www.linkedin.com/in/robert-reder/" target="_blank" class="text-sm text-dim hover:text-accent">LinkedIn</a>
        <a href="mailto:rob.reder06@gmail.com" class="text-sm text-dim hover:text-accent">Email</a>
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import { PAGES } from "@/utils/pages";

defineProps<{ open: boolean }>();
defineEmits(["close"]);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
