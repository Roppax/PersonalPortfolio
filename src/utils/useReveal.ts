import { onMounted, ref, type Ref } from "vue";

export function useReveal(): Ref<HTMLElement | null> {
  const el = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (!el.value) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el.value);
  });

  return el;
}

