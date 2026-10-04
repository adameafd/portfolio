<script setup lang="ts">
import Icon from "./Icon.vue";
import { profile } from "../data";

const channels = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "linkedin", label: "LinkedIn", value: "in/adame-afdari", href: profile.linkedin },
  { icon: "github", label: "GitHub", value: "adameafd", href: profile.github },
];
</script>

<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <div class="card panel reveal">
        <div class="intro">
          <p class="eyebrow">// contact</p>
          <h2 class="section-title">Travaillons ensemble</h2>
          <p class="section-sub">
            Je recherche un <strong>stage de fin d'études de 6 mois</strong> à partir du
            <strong>8 février 2027</strong> en DevOps, Full Stack, Backend ou Frontend.
            Mon email et mon LinkedIn sont le moyen le plus rapide de me joindre.
          </p>
          <ul class="facts">
            <li><Icon name="calendar" /> Disponible dès le 8 février 2027</li>
            <li><Icon name="spark" /> Durée : 6 mois</li>
          </ul>
        </div>

        <ul class="channels">
          <li v-for="c in channels" :key="c.label">
            <a
              class="channel"
              :href="c.href"
              :target="c.href.startsWith('http') ? '_blank' : undefined"
              rel="noreferrer"
            >
              <span class="icon"><Icon :name="c.icon" /></span>
              <span class="meta">
                <span class="label">{{ c.label }}</span>
                <span class="value">{{ c.value }}</span>
              </span>
              <Icon name="arrow" class="go" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  padding: 2.5rem;
  background:
    radial-gradient(circle at 0% 0%, var(--accent-soft), transparent 55%),
    var(--panel);
}

.section-sub strong {
  color: var(--text);
}

.facts {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  color: var(--text);
  font-weight: 600;
  font-size: 0.95rem;
}

.facts li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.facts svg {
  width: 18px;
  height: 18px;
  color: var(--accent);
}

.channels {
  display: grid;
  gap: 0.8rem;
  align-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.channel {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--bg);
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.channel:hover {
  border-color: var(--accent);
  transform: translateX(4px);
}

.icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
  flex-shrink: 0;
}

.icon svg {
  width: 20px;
  height: 20px;
}

.meta {
  display: grid;
  min-width: 0;
}

.label {
  font-size: 0.8rem;
  color: var(--muted);
}

.value {
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.go {
  width: 18px;
  height: 18px;
  margin-left: auto;
  color: var(--muted);
  flex-shrink: 0;
}

@media (max-width: 860px) {
  .panel {
    grid-template-columns: 1fr;
    padding: 1.75rem;
  }
}
</style>
