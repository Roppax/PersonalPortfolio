<template>
  <PageWrapper id="work" v-bind="props" class="border-t border-border py-24">
    <div ref="revealEl" class="reveal">
      <div class="grid gap-10 lg:grid-cols-[160px_1fr] lg:gap-20">
        <p class="font-mono text-label uppercase text-accent">Experience</p>

        <div ref="staggerEl" class="stagger-reveal space-y-0">
          <div
            v-for="exp in EXPERIENCES"
            :key="exp.company"
            class="row-hover group grid gap-1 border-b border-border/60 py-6 first:pt-0 last:border-0 last:pb-0 md:grid-cols-[120px_1fr] md:gap-10"
            :class="exp.current ? 'border-l-2 border-l-accent/40 pl-4 -ml-4' : ''"
          >
            <div class="text-sm text-dim">
              {{ exp.date }}
            </div>
            <div>
              <h3>
                <span class="text-text">{{ exp.role }}</span>
                <span class="text-dim"> · </span>
                <span class="text-muted group-hover:text-accent transition-colors">{{ exp.company }}</span>
              </h3>
              <p class="mt-1.5 text-sm leading-relaxed text-dim">
                {{ exp.description }}
              </p>
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

const EXPERIENCES = [
  {
    company: "Point72",
    role: "Software Engineer",
    date: "2026 —",
    current: true,
    description:
      "Building high-performance software systems at a premier asset management firm, supporting systematic and discretionary investment strategies.",
  },
  {
    company: "PureInt",
    role: "Co-Founder & CTO",
    date: "2025 —",
    current: true,
    description:
      "Co-founded a data intelligence startup serving telecom operators. Leading engineering on a platform that ingests raw network and subscriber data to deliver actionable insights — network optimization, churn prediction, and customer experience analytics.",
  },
  {
    company: "RBC",
    role: "ML Data Engineer",
    date: "2025",
    current: false,
    description:
      "Improved fund turnover prediction accuracy and optimized data pipelines for financial analytics.",
  },
  {
    company: "Manulife",
    role: "Software Engineer Intern",
    date: "2025",
    current: false,
    description:
      "Deployed AI-powered solutions to improve client onboarding and internal processes.",
  },
  {
    company: "DeepCove Cybersecurity",
    role: "ML Cybersecurity Intern",
    date: "2024",
    current: false,
    description:
      "Built deep learning models for cybersecurity log analysis and threat detection.",
  },
  {
    company: "UTMIST",
    role: "Machine Learning Intern",
    date: "2024",
    current: false,
    description:
      "Worked on RAG systems and vector database optimization with UofT's ML student team.",
  },
];
</script>
