<template>
  <section
    class="mx-auto max-w-content px-6 md:px-10"
    ref="pageRef"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import type { PageProps } from "@/types";
import { ref } from "vue";

defineProps<PageProps>();
const pageRef = ref<HTMLDivElement | null>(null);
defineExpose({ pageRef });
</script>
