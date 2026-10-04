<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Icon from "./Icon.vue";
import { profile } from "../data";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#journey", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

const theme = ref<"dark" | "light">("dark");
const menuOpen = ref(false);
const scrolled = ref(false);

function applyTheme(t: "dark" | "light") {
  theme.value = t;
  document.documentElement.dataset.theme = t;
  try {
    localStorage.setItem("theme", t);
  } catch {
    /* stockage indisponible : le thème reste valable pour la session */
  }
}

function toggleTheme() {
  applyTheme(theme.value === "dark" ? "light" : "dark");
}

function onScroll() {
  scrolled.value = window.scrollY > 10;
}

onMounted(() => {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem("theme");
  } catch {
    saved = null;
  }
  if (saved === "light" || saved === "dark") applyTheme(saved);
  else applyTheme(window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <nav class="container nav" aria-label="Navigation principale">
      <a href="#top" class="brand" @click="menuOpen = false">
        <span class="logo">AA</span>
        <span class="brand-name">{{ profile.name }}</span>
      </a>

      <ul class="links" :class="{ open: menuOpen }">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" @click="menuOpen = false">{{ l.label }}</a>
        </li>
      </ul>

      <div class="actions">
        <button
          class="icon-btn"
          type="button"
          :aria-label="theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'"
          @click="toggleTheme"
        >
          <Icon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <a class="btn btn-primary cta" href="#contact">Me contacter</a>
        <button
          class="icon-btn burger"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Ouvrir le menu"
          @click="menuOpen = !menuOpen"
        >
          <Icon :name="menuOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background 0.2s ease, border-color 0.2s ease, backdrop-filter 0.2s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 70px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 700;
}

.logo {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  font-family: var(--mono);
  font-size: 0.9rem;
}

.links {
  display: flex;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.links a {
  display: block;
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  color: var(--muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.15s ease, background 0.15s ease;
}

.links a:hover {
  color: var(--text);
  background: var(--accent-soft);
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  cursor: pointer;
}

.icon-btn svg {
  width: 19px;
  height: 19px;
}

.cta {
  padding: 0.6rem 1rem;
}

.burger {
  display: none;
}

@media (max-width: 900px) {
  .burger {
    display: grid;
  }

  .cta {
    display: none;
  }

  .links {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 0.75rem 1.25rem 1.25rem;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    display: none;
  }

  .links.open {
    display: flex;
  }

  .links a {
    padding: 0.8rem 0.6rem;
  }
}

@media (max-width: 420px) {
  .brand-name {
    display: none;
  }
}
</style>
