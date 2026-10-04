<script setup lang="ts">
import { timeline } from "../data";
</script>

<template>
  <section id="journey" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">// parcours</p>
        <h2 class="section-title">Parcours & expériences</h2>
      </div>

      <ol class="timeline">
        <li v-for="t in timeline" :key="t.title" class="item reveal" :class="{ current: t.current }">
          <span class="marker" aria-hidden="true"></span>
          <div class="card content">
            <p class="date">{{ t.date }}</p>
            <h3>{{ t.title }}</h3>
            <p class="text">{{ t.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 2rem;
  max-width: 820px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: linear-gradient(var(--accent), var(--border));
}

.item {
  position: relative;
  margin-bottom: 1.25rem;
}

.marker {
  position: absolute;
  left: -2rem;
  top: 1.5rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--accent);
}

.current .marker {
  background: var(--success);
  border-color: var(--success);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--success) 22%, transparent);
}

.content {
  padding: 1.3rem 1.5rem;
}

.current .content {
  border-color: color-mix(in srgb, var(--success) 50%, transparent);
}

.date {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--accent);
  margin-bottom: 0.35rem;
}

.current .date {
  color: var(--success);
}

h3 {
  font-size: 1.1rem;
}

.text {
  margin-top: 0.45rem;
  color: var(--muted);
}
</style>
