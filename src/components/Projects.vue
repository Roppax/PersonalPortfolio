<template>
  <Carousel
    :items-to-show="1"
    :items-to-scroll="1"
    :snapAlign="'end'"
    :breakpoints="breakpoints"
    wrapAround
    class="2xl:mx-10 2xl:h-[55vh]"
  >
    <Slide v-for="project in PROJECTS" :key="project.name">
      <Project :img="project.image" :redirect="project.redirect">
        <template #name>{{ project.name }}</template>
        {{ project.description }}
      </Project>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Project from "./Project.vue";

const breakpoints = {
  1024: {
    itemsToShow: 2,
    itemsToScroll: 2
  }
};

const PROJECTS = [
  {
    name: "Project Bergster",
    redirect: "https://github.com/Roppax/ProjectBergster",
    description: "Winner of Google Student Developer Hackathon @ UofGuelph. A cognitive training and emotional detection robot using Computer Vision with Python, TensorFlow & FaceAPI.js. Ensures 100% data privacy with offline functionality and is now used by 30+ students.",
    image: "/bergster.webp"
  },
  {
    name: "Vid2Notes",
    redirect: "https://github.com/Roppax/Vid2Notes",
    description: "A dynamic web tool that summarizes video transcripts and creates flashcards for efficient studying. Integrated YoutubeTranscript and Cohere GenText APIs to automate transcript processing, serving 500+ users with 30% improved engagement.",
    image: "/vid2notes.webp"
  },
  {
    name: "MitreClassifier",
    redirect: "https://github.com/Roppax/mitreClassifier",
    description: "MITRE ATT&CK classifier project for cybersecurity threat detection and analysis. Built with Python and machine learning techniques to identify and categorize cyber attack patterns.",
    image: "/mitreclassifier.webp"
  },
  {
    name: "Pokerly",
    redirect: "https://github.com/Roppax/pokerly",
    description: "Advanced poker analysis tool built with Python. Provides statistical analysis, hand evaluation, and strategic insights for poker players looking to improve their game.",
    image: "/pokerly.webp"
  }
] as const;
</script>

<style>
.carousel__item {
  background-color: green;
  @apply h-full w-full 2xl:mx-8;
}

.carousel__slide {
  padding: 0 2rem;
}

.carousel__prev,
.carousel__next {
  @apply -translate-y-12 scale-[1.5] text-primary transition-all hover:text-primary 2xl:scale-[2.5];
}

.carousel__prev {
  @apply -translate-x-3 2xl:-translate-x-6;
}

.carousel__next {
  @apply translate-x-3 2xl:translate-x-6;
}

.carousel__prev--disabled,
.carousel__next--disabled {
  opacity: 0;
}

.carousel__viewport,
.carousel__track {
  height: 100%;
}
</style>


