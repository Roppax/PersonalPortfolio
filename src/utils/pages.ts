import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Landing from "../pages/Landing.vue";
import Projects from "../pages/Projects.vue";
import Skills from "../pages/Skills.vue";
import Work from "../pages/Work.vue";

import type { PropType } from "vue";

type Page = { id: string } & Partial<{
  name: string;
  href: string;
  component: PropType<PageProps>;
}>;

export const PAGES: readonly Page[] = [
  {
    id: "landing",
    href: "#landing",
    component: Landing
  },
  {
    id: "about",
    name: "About",
    href: "#about",
    component: About
  },
  {
    id: "skills",
    name: "Skills",
    href: "#skills",
    component: Skills
  },
  {
    id: "work",
    name: "Work",
    href: "#work",
    component: Work
  },
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
    component: Projects
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
    component: Contact
  },
  {
    id: "resume",
    name: "Resume",
    href: "/RobertRederResume (4) (1).pdf"
  }
] as const;

export type PageProps = { pageId: string };