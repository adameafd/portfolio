<script setup lang="ts">
const email = "adame.afda@gmail.com";
const github = "https://github.com/TON_USERNAME";
const linkedin = "https://www.linkedin.com/in/adame-afdari";
</script>

<template>
  <section>
    <header class="head">
      <h1>Contact</h1>
      <p>Tu peux me contacter facilement via email ou réseaux professionnels.</p>
    </header>

    <div class="grid">
      <article class="card">
        <h2 class="title">Email</h2>
        <a class="link" :href="`mailto:${email}`">{{ email }}</a>
        <p class="hint">Réponse rapide, idéal pour stage/projet.</p>
      </article>

      <article class="card">
        <h2 class="title">GitHub</h2>
        <a class="link" :href="github" target="_blank" rel="noreferrer">{{ github }}</a>
        <p class="hint">Code source et projets.</p>
      </article>

      <article class="card">
        <h2 class="title">LinkedIn</h2>
        <a class="link" :href="linkedin" target="_blank" rel="noreferrer">{{ linkedin }}</a>
        <p class="hint">Profil, parcours, expériences.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.head { margin-bottom: 1.25rem; }
p { max-width: 850px; }

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.title {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.link {
  display: inline-block;
  font-weight: 700;
  color: var(--text);
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
}
.link:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.hint {
  margin-top: 0.6rem;
  color: var(--muted);
}

@media (max-width: 1000px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
