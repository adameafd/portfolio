<script setup lang="ts">
const groups = [
  {
    title: "Backend",
    items: ["API REST", "PHP", "Java", "Node.js (bases)", "MySQL", "Gestion des rôles / permissions"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Vue (bases)", "Interfaces admin / dashboards"],
  },
  {
    title: "Cybersécurité",
    items: ["Bonnes pratiques (OWASP - bases)", "Validation des entrées", "Auth (sessions/JWT - notions)"],
  },
  {
    title: "DevOps & Outils",
    items: ["Docker (bases)", "Git/GitHub", "Linux (bases)", "VS Code"],
  },
];
</script>

<template>
  <section>
    <header class="head">
      <h1>Compétences</h1>
      <p>Mes compétences principales, organisées par domaine.</p>
    </header>

    <div class="grid">
      <article v-for="g in groups" :key="g.title" class="card">
        <h2 class="title">{{ g.title }}</h2>
        <ul class="list">
          <li v-for="it in g.items" :key="it">{{ it }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.head { margin-bottom: 1.25rem; }
p { max-width: 850px; }

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.title {
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.list {
  margin: 0;
  padding-left: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
