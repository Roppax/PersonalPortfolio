<template>
  <PageWrapper id="projects" v-bind="props" class="border-t border-border py-24">
    <div ref="revealEl" class="reveal">
      <div class="grid gap-10 lg:grid-cols-[160px_1fr] lg:gap-20">
        <p class="font-mono text-label uppercase text-accent">Projects</p>

        <div ref="staggerEl" class="stagger-reveal space-y-0">
          <a
            v-for="project in PROJECTS"
            :key="project.name"
            :href="project.url"
            target="_blank"
            class="row-hover group flex items-center justify-between gap-6 border-b border-border/60 py-5 first:pt-0 last:border-0 last:pb-0"
          >
            <div>
              <h3 class="text-text transition-colors group-hover:text-accent">
                {{ project.name }}
              </h3>
              <p class="mt-1 text-sm text-dim">
                {{ project.description }}
              </p>
            </div>
            <span
              class="shrink-0 text-accent opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >↗</span>
          </a>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import type { PageProps } from "@/types";
import { useReveal } from "@/utils/useReveal";
import { onMounted, ref } from "vue";

const props = defineProps<PageProps>();
const revealEl = useReveal();
const staggerEl = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!staggerEl.value) return;
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
    { threshold: 0.1 }
  );
  observer.observe(staggerEl.value);
});

const PROJECTS = [
  {
    name: "Project Bergster",
    url: "https://github.com/Roppax/ProjectBergster",
    description:
      "Google Hackathon winner — cognitive training & emotional detection robot using Computer Vision.",
  },
  {
    name: "Vid2Notes",
    url: "https://github.com/Roppax/Vid2Notes",
    description:
      "Summarizes video transcripts and creates flashcards. 500+ users.",
  },
  {
    name: "MITRE Classifier",
    url: "https://github.com/Roppax/mitreClassifier",
    description:
      "MITRE ATT&CK classifier for cybersecurity threat detection.",
  },
];
</script>
