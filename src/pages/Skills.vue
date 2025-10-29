<template>
  <PageWrapper class="flex flex-col justify-center" id="skills" v-bind="props">
    <Header>SKILLS</Header>

    <div class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:pl-8 relative">
      <!-- Single Row Layout -->
      <div class="relative flex flex-col gap-8 2xl:flex-row 2xl:gap-16">
        <!-- Languages -->
        <div class="flex-1">
          <header class="text-secondary text-responsive-h4 mb-4">LANGUAGES</header>
          <div class="flex flex-col gap-3">
            <Skill v-for="s in LANGUAGES" :key="s.name" :skill="s" />
          </div>
        </div>
        
        <!-- Neon Blue Separator Line 1 -->
        <div class="hidden 2xl:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2" 
             style="box-shadow: 0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6;"></div>
        
        <!-- Frameworks -->
        <div class="flex-1">
          <header class="text-secondary text-responsive-h4 mb-4">FRAMEWORKS</header>
          <div class="flex flex-col gap-3">
            <Skill v-for="s in FRAMEWORKS" :key="s.name" :skill="s" />
          </div>
        </div>
        
        <!-- Neon Blue Separator Line 2 -->
        <div class="hidden 2xl:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2" 
             style="box-shadow: 0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6;"></div>
        
        <!-- Machine Learning -->
        <div class="flex-1">
          <header class="text-secondary text-responsive-h4 mb-4">MACHINE LEARNING</header>
          <div class="flex flex-col gap-3">
            <Skill v-for="s in ML_AI" :key="s.name" :skill="s" />
          </div>
        </div>
        
        <!-- Neon Blue Separator Line 3 -->
        <div class="hidden 2xl:block absolute left-3/4 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2" 
             style="box-shadow: 0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6;"></div>
        
        <!-- Cloud & DevOps -->
        <div class="flex-1">
          <header class="text-secondary text-responsive-h4 mb-4">CLOUD & DEVOPS</header>
          <div class="flex flex-col gap-3">
            <Skill v-for="s in CLOUD_DEVOPS" :key="s.name" :skill="s" />
          </div>
        </div>
      </div>
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import CloseBracket from "@/components/CloseBracket.vue";
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import Skill from "@/components/Skill.vue";
import type { PageProps } from "@/types";

const props = defineProps<PageProps>();

const LANGUAGES = [
  { name: "Python", icon: "python" },
  { name: "TypeScript", icon: "ts" },
  { name: "JavaScript", icon: "js" },
  { name: "Java", icon: "java" },
  { name: "Rust", icon: "rust" },
  { name: "C++", icon: "c" },
  { name: "R", icon: "r" },
  { name: "SQL", icon: "sql" }
];

const FRAMEWORKS = [
  { name: "Vue.js", icon: "vue" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "node" },
  { name: "Express", icon: "express" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Django", icon: "django" },
  { name: "Flask", icon: "flask" }
];

const ML_AI = [
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "PyTorch", icon: "pytorch" },
  { name: "Scikit-learn", icon: "sklearn" },
  { name: "Pandas", icon: "pandas" },
  { name: "NumPy", icon: "numpy" },
  { name: "OpenCV", icon: "opencv" },
  { name: "Jupyter", icon: "jupyter" }
];

const CLOUD_DEVOPS = [
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Terraform", icon: "terraform" },
  { name: "Jenkins", icon: "jenkins" },
  { name: "Git", icon: "git" },
  { name: "Linux", icon: "linux" }
];
</script>
