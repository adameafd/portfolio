<script setup lang="ts">
import Icon from "./Icon.vue";
import { skills } from "../data";
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">// compétences</p>
        <h2 class="section-title">Ma boîte à outils</h2>
        <p class="section-sub">
          Une stack complète, du frontend au déploiement, mise en pratique dans mes projets.
        </p>
      </div>

      <div class="grid">
        <article v-for="g in skills" :key="g.title" class="card group reveal">
          <div class="head">
            <span class="icon"><Icon :name="g.icon" /></span>
            <h3>{{ g.title }}</h3>
          </div>
          <ul class="items">
            <li v-for="s in g.items" :key="s" class="chip">{{ s }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.group {
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.group:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.1rem;
}

.head h3 {
  font-size: 1.1rem;
}

.icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}

.icon svg {
  width: 21px;
  height: 21px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
