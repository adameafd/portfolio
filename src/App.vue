<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import TimelineSection from "./components/TimelineSection.vue";
import ContactSection from "./components/ContactSection.vue";
import { profile } from "./data";

const year = new Date().getFullYear();
let observer: IntersectionObserver | undefined;

// Fait apparaître les éléments .reveal quand ils entrent dans l'écran.
onMounted(() => {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer?.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 },
  );
  items.forEach((el) => observer?.observe(el));
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <TimelineSection />
    <ContactSection />
  </main>
  <footer class="footer">
    <div class="container footer-inner">
      <p>© {{ year }} {{ profile.name }}</p>
      <p class="made">Conçu avec Vue 3, TypeScript & Vite · Déployé avec GitHub Actions</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 1.75rem 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
}

.made {
  font-family: var(--mono);
  font-size: 0.8rem;
}
</style>
