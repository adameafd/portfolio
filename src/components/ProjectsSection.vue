<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";
import { profile, projects } from "../data";

const preview = ref<{ src: string; alt: string } | null>(null);
</script>

<template>
  <section id="projects" class="section section-alt">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">// projets</p>
        <h2 class="section-title">Projets réalisés</h2>
        <p class="section-sub">
          Des applications complètes, pensées de la base de données jusqu'au déploiement.
        </p>
      </div>

      <div class="grid">
        <article v-for="(p, i) in projects" :key="p.title" class="card project reveal">
          <div class="top">
            <span class="index">0{{ i + 1 }}</span>
            <span class="badges">
              <span v-if="p.demo" class="badge live">En ligne</span>
              <span v-if="p.privateCode" class="badge"><Icon name="lock" /> Code privé</span>
            </span>
          </div>

          <h3 class="title">{{ p.title }}</h3>
          <p class="tagline">{{ p.tagline }}</p>
          <p class="desc">{{ p.description }}</p>

          <ul class="features">
            <li v-for="f in p.features" :key="f">{{ f }}</li>
          </ul>

          <div v-if="p.screenshots" class="shots">
            <button
              v-for="s in p.screenshots"
              :key="s.alt"
              type="button"
              class="shot"
              :aria-label="`Agrandir : ${s.alt}`"
              @click="preview = s"
            >
              <img :src="s.src" :alt="s.alt" loading="lazy" />
            </button>
          </div>

          <ul class="stack">
            <li v-for="s in p.stack" :key="s" class="chip">{{ s }}</li>
          </ul>

          <div class="links">
            <a v-if="p.demo" class="btn btn-primary" :href="p.demo" target="_blank" rel="noreferrer">
              <Icon name="external" /> Démo
            </a>
            <a v-if="p.repo" class="btn" :href="p.repo" target="_blank" rel="noreferrer">
              <Icon name="github" /> Code source
            </a>
            <a v-if="p.privateCode && !p.demo" class="btn" :href="`mailto:${profile.email}?subject=${encodeURIComponent('Démo ' + p.title)}`">
              <Icon name="mail" /> Demander une démo
            </a>
          </div>
        </article>
      </div>
    </div>

    <div v-if="preview" class="lightbox" role="dialog" aria-modal="true" @click="preview = null">
      <img :src="preview.src" :alt="preview.alt" />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.project {
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.index {
  font-family: var(--mono);
  color: var(--muted);
  font-size: 0.85rem;
}

.badges {
  display: flex;
  gap: 0.4rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
}

.badge svg {
  width: 13px;
  height: 13px;
}

.badge.live {
  color: var(--success);
  border-color: color-mix(in srgb, var(--success) 40%, transparent);
}

.title {
  font-size: 1.45rem;
  font-weight: 800;
}

.tagline {
  margin-top: 0.3rem;
  color: var(--accent);
  font-weight: 600;
}

.desc {
  margin-top: 0.9rem;
  color: var(--muted);
}

.features {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.features li {
  position: relative;
  padding-left: 1.4rem;
  font-size: 0.95rem;
}

.features li::before {
  content: "";
  position: absolute;
  left: 0.2rem;
  top: 0.62em;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--accent-2);
}

.shots {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-top: 1.2rem;
}

.shot {
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  cursor: zoom-in;
  background: none;
}

.shot img {
  width: 100%;
  height: 110px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.shot:hover img {
  transform: scale(1.05);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin: 1.3rem 0 0;
  padding: 0;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 1.5rem;
}

.links .btn {
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: rgba(5, 8, 18, 0.85);
  cursor: zoom-out;
}

.lightbox img {
  max-height: 90vh;
  border-radius: 12px;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
