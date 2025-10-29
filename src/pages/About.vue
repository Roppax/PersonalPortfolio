<template>
  <PageWrapper class="flex flex-col justify-center" id="about" v-bind="props">
    <Header>ABOUT</Header>

    <div
      class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:flex-row 2xl:gap-60 2xl:pl-8 [&>*]:flex-1"
    >
      <div class="flex flex-col gap-8">
        <div>
          <p>
            I build and ship machine learning systems — fast.
          </p>
          <p>
            I care about solving real problems, not just training models.
          </p>
          <p>
            Currently studying Math, Stats & CS at UofT.
          </p>
        </div>

        <div class="hidden gap-2 text-secondary 2xl:flex">
          <span>🎓</span>
          <span>University of Toronto • Expected May 2027</span>
        </div>
      </div>

      <p class="mb-8 2xl:mb-0">
        I'm driven by hard problems and real-world results. I've worked across finance and cybersecurity, where reliability and scale actually matter.
        <br />
        I prefer small teams, quick iteration cycles, and taking ideas from zero to deployed.
        <br />
        I'm competitive, curious, and always pushing for the next challenge — especially where AI meets real impact.
        <br />
        Right now, I'm building Pokerly.
      </p>
    </div>
    <div class="ml-4 flex gap-2 text-secondary 2xl:hidden">
      <span>🎓</span>
      <span>University of Toronto • Expected May 2027</span>
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import CloseBracket from "@/components/CloseBracket.vue";
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import type { PageProps } from "@/types";

const props = defineProps<PageProps>();
</script>
