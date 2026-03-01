<template>
  <button
    class="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
    :class="styles[variant]"
    :disabled="isLoading"
  >
    <slot />
    <LoadingIcon class="ml-2 h-4 w-4" v-if="isLoading" />
  </button>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import LoadingIcon from "./LoadingIcon.vue";

type Variant = "primary" | "secondary" | "ghost";

const props = withDefaults(defineProps<{ variant: Variant; isLoading?: boolean }>(), {
  isLoading: false
});
const { variant, isLoading } = toRefs(props);

const styles: Record<Variant, string> = {
  primary: "bg-text text-background hover:bg-text/90",
  secondary: "border border-border-light text-text hover:bg-surface-light hover:border-text-muted",
  ghost: "text-text-secondary hover:text-text"
};
</script>
