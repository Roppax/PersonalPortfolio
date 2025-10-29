<template>
  <PageWrapper
    class="flex flex-col justify-center"
    id="projects"
    v-bind="props"
  >
    <Header>PROJECTS</Header>

    <div class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:pl-8">
      <Projects />
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import CloseBracket from "@/components/CloseBracket.vue";
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import Projects from "@/components/Projects.vue";
import type { PageProps } from "@/types";

const props = defineProps<PageProps>();
</script>
