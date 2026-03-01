<template>
  <button
    class="flex flex-col items-end gap-1.5 p-2"
    @click="$emit('toggle')"
    aria-label="Toggle menu"
  >
    <div
      class="h-px w-6 bg-text transition-all duration-300"
      :class="open ? 'translate-y-[3.5px] rotate-45' : ''"
    />
    <div
      class="h-px bg-text transition-all duration-300"
      :class="open ? 'w-6 -translate-y-[3.5px] -rotate-45' : 'w-4'"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>();
defineEmits(["toggle"]);
</script>
