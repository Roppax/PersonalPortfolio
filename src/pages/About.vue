<template>
  <PageWrapper class="flex flex-col justify-center" id="about" v-bind="props">
    <Header>ABOUT</Header>

    <div
      class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:flex-row 2xl:gap-60 2xl:pl-8 [&>*]:flex-1"
    >
      <div class="flex flex-col gap-8">
        <div>
          <p>
            Machine Learning Engineer & Software Developer with expertise in AI
            and data engineering.
          </p>
          <p>
            Currently pursuing BSc in Mathematics, Statistics & Computer Science
            at University of Toronto.
          </p>
        </div>

        <div class="hidden gap-2 text-secondary 2xl:flex">
          <span>🎓</span>
          <span>University of Toronto • Expected May 2027</span>
        </div>
      </div>

      <p class="mb-8 2xl:mb-0">
        Passionate about machine learning and artificial intelligence, I've
        gained extensive experience working with leading companies like RBC,
        Manulife, and DeepCove Cybersecurity.
        <br />
        My expertise spans deep learning, data engineering, and software
        development, with a focus on building scalable ML solutions and
        AI-powered applications.
        <br />
        I enjoy tackling complex problems in AI/ML, from training transformer
        models to deploying containerized solutions in cloud environments.
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
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/types";

const props = defineProps<PageProps>();
</script>
