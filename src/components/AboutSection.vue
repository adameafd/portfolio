<script setup lang="ts">
import { about } from "../data";
</script>

<template>
  <section id="about" class="section section-alt">
    <div class="container about">
      <div class="reveal">
        <p class="eyebrow">// à propos</p>
        <h2 class="section-title">Du code à la mise en production</h2>
        <div class="text">
          <p v-for="p in about.paragraphs" :key="p">{{ p }}</p>
        </div>
      </div>

      <ul class="stats reveal">
        <li v-for="h in about.highlights" :key="h.label" class="card stat">
          <span class="value">{{ h.value }}</span>
          <span class="label">{{ h.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 3rem;
  align-items: center;
}

.text {
  display: grid;
  gap: 1rem;
  margin-top: 1.4rem;
  color: var(--muted);
  font-size: 1.05rem;
}

.stats {
  display: grid;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.stat {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.3rem 1.5rem;
}

.value {
  min-width: 6.5rem;
  font-size: 1.75rem;
  white-space: nowrap;
  font-weight: 800;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.label {
  color: var(--muted);
  font-weight: 500;
}

@media (max-width: 900px) {
  .about {
    grid-template-columns: 1fr;
  }
}
</style>
