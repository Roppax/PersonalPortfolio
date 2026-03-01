<template>
  <PageWrapper id="contact" v-bind="props" class="border-t border-border py-24">
    <div ref="revealEl" class="reveal">
      <div class="grid gap-10 lg:grid-cols-[160px_1fr] lg:gap-20">
        <p class="font-mono text-label uppercase text-accent">Contact</p>

        <div class="grid gap-16 md:grid-cols-2">
          <div>
            <p class="text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
              Interested in working together?
              <br />
              <a
                href="mailto:rob.reder06@gmail.com"
                class="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent/60"
              >
                Get in touch
              </a>.
            </p>
            <div class="mt-10 space-y-2.5 text-sm">
              <a href="mailto:rob.reder06@gmail.com" class="block text-dim hover:text-accent transition-colors">rob.reder06@gmail.com</a>
              <a href="https://github.com/Roppax" target="_blank" class="block text-dim hover:text-accent transition-colors">github.com/Roppax</a>
              <a href="https://linkedin.com/in/robert-reder/" target="_blank" class="block text-dim hover:text-accent transition-colors">linkedin.com/in/robert-reder</a>
            </div>
          </div>

          <form class="space-y-5" @submit.prevent="onSubmit">
            <div>
              <label class="mb-1.5 block font-mono text-label uppercase text-accent/40">Email</label>
              <input
                required
                name="email"
                type="email"
                class="w-full border-b border-border bg-transparent py-2.5 text-sm text-text placeholder:text-dim outline-none transition-colors focus:border-accent/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label class="mb-1.5 block font-mono text-label uppercase text-accent/40">Subject</label>
              <input
                required
                name="subject"
                type="text"
                class="w-full border-b border-border bg-transparent py-2.5 text-sm text-text placeholder:text-dim outline-none transition-colors focus:border-accent/50"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label class="mb-1.5 block font-mono text-label uppercase text-accent/40">Message</label>
              <textarea
                required
                name="body"
                rows="4"
                class="w-full resize-none border-b border-border bg-transparent py-2.5 text-sm text-text placeholder:text-dim outline-none transition-colors focus:border-accent/50"
                placeholder="Tell me more..."
              />
            </div>
            <button
              type="submit"
              :disabled="isLoading"
              class="mt-2 text-sm text-accent transition-colors hover:text-text disabled:opacity-40"
            >
              {{ isLoading ? "Sending..." : "Send message →" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import type { PageProps } from "@/types";
import { useReveal } from "@/utils/useReveal";
import { getCurrentInstance, ref } from "vue";

const props = defineProps<PageProps>();
const revealEl = useReveal();

const $toast = getCurrentInstance()?.appContext.config.globalProperties.$toast!;
const isLoading = ref(false);

const onSubmit = async (e: Event) => {
  if (isLoading.value) return;
  isLoading.value = true;
  const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement));
  const res = await fetch("/email", { method: "POST", body: JSON.stringify(formData) });
  if (res.ok) {
    $toast.success("Thanks! I'll reply soon.");
  } else {
    $toast.error("Something went wrong. Please email me directly.");
  }
  isLoading.value = false;
};
</script>
