<template>
  <section class="about">
    <!-- Intro -->
    <header class="intro">
      <h1>À propos</h1>
      <p class="subtitle">
        Étudiant en ingénierie informatique, spécialisé en cybersécurité et développement backend.
      </p>
    </header>

    <!-- Cards -->
    <div class="grid">
      <article class="card">
        <h2>🎓 Parcours</h2>
        <p>
          Étudiant en ingénierie informatique, je développe mes compétences à travers
          des projets académiques et personnels orientés backend et sécurité applicative.
        </p>
      </article>

      <article class="card">
        <h2>🔐 Cybersécurité</h2>
        <p>
          Intéressé par la sécurité applicative, la protection des API,
          la gestion des rôles et les bonnes pratiques OWASP.
        </p>
      </article>

      <article class="card">
        <h2>🚀 Objectif</h2>
        <p>
          Je recherche un stage en cybersécurité afin de mettre en pratique
          mes compétences techniques dans un environnement professionnel.
        </p>
      </article>
    </div>

    <!-- Timeline -->
    <div class="timeline">
      <h2>Mon parcours en bref</h2>

      <ul>
        <li>
          <span class="year">2024</span>
          <span>Stage d’observation & projets web (PHP / MySQL)</span>
        </li>
        <li>
          <span class="year">2025</span>
          <span>Approfondissement en cybersécurité & recherche de stage</span>
        </li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="cta">
      <RouterLink class="btn primary" to="/projects">Voir mes projets</RouterLink>
      <RouterLink class="btn" to="/contact">Me contacter</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 2rem 0;
}

/* Intro */
.intro {
  max-width: 800px;
  margin-bottom: 2rem;
}
.subtitle {
  margin-top: 0.6rem;
  color: #4b5563;
  line-height: 1.6;
}

/* Grid cards */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.card {
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.2rem;
  background: white;
  box-shadow: 0 8px 30px rgba(17, 24, 39, 0.06);
}

.card h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

/* Timeline */
.timeline {
  max-width: 700px;
  margin-bottom: 2.5rem;
}
.timeline h2 {
  margin-bottom: 1rem;
}
.timeline ul {
  list-style: none;
  padding: 0;
}
.timeline li {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;
}
.year {
  font-weight: 800;
  color: #16a34a;
  min-width: 60px;
}

/* CTA */
.cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
