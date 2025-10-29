<template>
  <PageWrapper class="flex flex-col justify-center" id="talk" v-bind="props">
    <Header>TALK</Header>

    <div class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:pl-8">
      <div class="max-w-2xl">
        <p class="text-responsive-h5 mb-6">
          Let's discuss AI, machine learning, and the future of technology.
        </p>

        <div class="space-y-4 text-text-secondary">
          <p>
            I'm always interested in connecting with fellow developers,
            researchers, and AI enthusiasts to discuss cutting-edge technologies
            and explore opportunities for collaboration.
          </p>

          <p>Whether you want to talk about:</p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>Machine Learning and Deep Learning architectures</li>
            <li>AI/ML model deployment and MLOps</li>
            <li>Computer Vision and NLP applications</li>
            <li>Data Engineering and ML pipelines</li>
            <li>Research in AI and emerging technologies</li>
            <li>Open source contributions and projects</li>
          </ul>

          <p>
            Feel free to reach out! I'm always excited to learn from others and
            share my experiences in AI/ML development.
          </p>
        </div>
      </div>
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/types";

const props = defineProps<PageProps>();
</script>
