import { VNode } from "vue";

export function getSlotText(slots: Record<string, any>): string {
  const defaultSlot = slots.default;
  if (!defaultSlot) return "";

  const vnodes = Array.isArray(defaultSlot()) ? defaultSlot() : [defaultSlot()];
  return vnodes
    .map((vnode: VNode) => {
      if (typeof vnode.children === "string") return vnode.children;
      if (Array.isArray(vnode.children)) {
        return vnode.children
          .map((child: any) => {
            if (typeof child === "string") return child;
            if (child?.children) return getSlotText({ default: () => child.children });
            return "";
          })
          .join("");
      }
      return "";
    })
    .join("");
}