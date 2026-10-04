<script setup lang="ts">
import Icon from "./Icon.vue";
import { profile } from "../data";
</script>

<template>
  <section id="top" class="hero">
    <div class="glow" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="intro">
        <p class="status">
          <span class="dot" aria-hidden="true"></span>
          {{ profile.availability }}
        </p>

        <h1 class="title">
          Bonjour, je suis <span class="gradient">{{ profile.name }}</span>
        </h1>

        <p class="role">
          {{ profile.role }} ·
          <span v-for="(f, i) in profile.focus" :key="f">
            {{ f }}<template v-if="i < profile.focus.length - 1"> · </template>
          </span>
        </p>

        <p class="pitch">{{ profile.pitch }}</p>

        <div class="buttons">
          <a class="btn btn-primary" href="#projects">
            Voir mes projets
            <Icon name="arrow" />
          </a>
          <a class="btn" :href="profile.linkedin" target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
            LinkedIn
          </a>
          <a class="btn" :href="profile.github" target="_blank" rel="noreferrer">
            <Icon name="github" />
            GitHub
          </a>
        </div>
      </div>

      <div class="terminal card" aria-hidden="true">
        <div class="term-bar">
          <span></span><span></span><span></span>
          <p>adame@portfolio:~</p>
        </div>
        <pre class="term-body"><span class="c">$</span> whoami
<span class="o">Adame Afdari — ingénierie logicielle</span>

<span class="c">$</span> cat objectif.txt
<span class="o">Stage de fin d'études · 6 mois
Début : 8 février 2027</span>

<span class="c">$</span> ls domaines/
<span class="k">devops/  fullstack/  backend/  frontend/</span>

<span class="c">$</span> docker compose up -d<span class="cursor">▍</span></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 5rem 0 6rem;
}

.glow {
  position: absolute;
  inset: -30% -10% auto auto;
  width: 640px;
  height: 640px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 65%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: center;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--success) 40%, transparent);
  background: color-mix(in srgb, var(--success) 12%, transparent);
  color: var(--success);
  font-size: 0.88rem;
  font-weight: 600;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--success) 25%, transparent);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 7px color-mix(in srgb, var(--success) 5%, transparent);
  }
}

.title {
  margin-top: 1.4rem;
  font-size: clamp(2.3rem, 5.5vw, 3.8rem);
  font-weight: 800;
}

.gradient {
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.role {
  margin-top: 1rem;
  font-family: var(--mono);
  font-size: 0.98rem;
  color: var(--accent);
}

.pitch {
  margin-top: 1.1rem;
  max-width: 560px;
  font-size: 1.12rem;
  color: var(--muted);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.terminal {
  overflow: hidden;
  font-family: var(--mono);
}

.term-bar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg-soft);
}

.term-bar span {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #ff5f57;
}

.term-bar span:nth-child(2) {
  background: #febc2e;
}

.term-bar span:nth-child(3) {
  background: #28c840;
}

.term-bar p {
  margin-left: 0.6rem;
  font-size: 0.78rem;
  color: var(--muted);
}

.term-body {
  margin: 0;
  padding: 1.2rem 1.3rem 1.5rem;
  font-size: 0.86rem;
  line-height: 1.75;
  white-space: pre-wrap;
  color: var(--text);
}

.c {
  color: var(--accent-2);
}

.o {
  color: var(--muted);
}

.k {
  color: var(--accent);
}

.cursor {
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .hero {
    padding: 3rem 0 4rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dot,
  .cursor {
    animation: none;
  }
}
</style>
