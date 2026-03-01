<template>
  <PageWrapper
    v-bind="props"
    id="landing"
    class="relative flex min-h-screen flex-col justify-start overflow-hidden pt-[32vh]"
  >
    <!-- Subtle ambient glow -->
    <div
      class="pointer-events-none absolute -left-[15%] top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.035]"
      style="background: radial-gradient(circle, #5b9cf5, transparent 70%)"
    />

    <div class="hero-stagger relative">
      <p class="font-mono text-label uppercase text-accent">
        Software Engineer · Co-Founder
      </p>

      <h1 class="mt-5 text-hero text-text">
        Robert Reder
      </h1>

      <p class="mt-6 max-w-md text-subtitle text-muted">
        SWE at <span class="text-text">Point72</span>.
        Co-Founder of <span class="text-text">PureInt</span>.
        Building intelligent systems from research to production.
      </p>

      <div class="mt-10 flex gap-6 text-[0.8125rem]">
        <a href="https://github.com/Roppax" target="_blank" class="text-dim hover:text-accent transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/robert-reder/" target="_blank" class="text-dim hover:text-accent transition-colors">LinkedIn</a>
        <a href="mailto:rob.reder06@gmail.com" class="text-dim hover:text-accent transition-colors">Email</a>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import type { PageProps } from "@/types";

const props = defineProps<PageProps>();
</script>
