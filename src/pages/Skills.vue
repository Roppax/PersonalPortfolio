<template>
  <PageWrapper id="skills" v-bind="props" class="border-t border-border py-24">
    <div ref="revealEl" class="reveal">
      <div class="grid gap-10 lg:grid-cols-[160px_1fr] lg:gap-20">
        <p class="font-mono text-label uppercase text-accent">Skills</p>

        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="category in CATEGORIES" :key="category.title">
            <p class="mb-4 font-mono text-label uppercase text-accent/40">{{ category.title }}</p>
            <p class="text-sm leading-relaxed text-muted">
              {{ category.items.join(", ") }}
            </p>
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

const CATEGORIES = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "Rust", "C++", "R", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Vue.js", "React", "Node.js", "Express", "FastAPI", "Django", "Flask"],
  },
  {
    title: "ML & Data",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    title: "Infrastructure",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git", "Linux"],
  },
];
</script>
