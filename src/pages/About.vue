<template>
  <PageWrapper id="about" v-bind="props" class="border-t border-border py-24">
    <div ref="revealEl" class="reveal">
      <div class="grid gap-10 lg:grid-cols-[160px_1fr] lg:gap-20">
        <p class="font-mono text-label uppercase text-accent">About</p>

        <div class="grid gap-16 md:grid-cols-5">
          <div class="md:col-span-3">
            <p class="text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
              I build software that solves real problems —
              <span class="text-text">fast</span>.
              I've worked across finance, cybersecurity, and machine learning,
              and I care about shipping things that actually work at scale.
            </p>
          </div>

          <div class="space-y-8 text-sm md:col-span-2">
            <div>
              <p class="mb-2 font-mono text-label uppercase text-accent/50">Now</p>
              <p class="text-muted">Software Engineer at <span class="text-text">Point72</span></p>
              <p class="text-muted">Co-Founder & CTO at <span class="text-text">PureInt</span></p>
            </div>
            <div>
              <p class="mb-2 font-mono text-label uppercase text-accent/50">Education</p>
              <p class="text-muted">BSc Math, Statistics & CS</p>
              <p class="text-dim">University of Toronto · 2027</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import type { PageProps } from "@/types";
import { useReveal } from "@/utils/useReveal";

const props = defineProps<PageProps>();
const revealEl = useReveal();
</script>
