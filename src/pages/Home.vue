<template>
  <section class="hero">
    <p class="badge">Portfolio</p>

    <h1 class="name">Afdari Adame</h1>
    <h2 class="role">Cybersécurité & Développement Backend</h2>

    <p class="pitch">
      Étudiant en ingénierie informatique, passionné par la cybersécurité et le développement backend.
      Je conçois des applications web sécurisées, structurées et orientées bonnes pratiques.
    </p>

    <div class="cta">
      <a class="btn primary" href="https://github.com/TON_USERNAME" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a class="btn" href="https://linkedin.com/in/TON_PROFIL" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <RouterLink class="btn" to="/projects">Voir mes projets</RouterLink>
    </div>

    <div class="stats">
      <div class="card">
        <p class="label">Focus</p>
        <p class="value">Sécurité applicative</p>
      </div>
      <div class="card">
        <p class="label">Stack</p>
        <p class="value">Vue • API • MySQL</p>
      </div>
      <div class="card">
        <p class="label">Objectif</p>
        <p class="value">Stage en cybersécurité</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 3rem 2rem;
}
.badge {
  display: inline-block;
  padding: 0.35rem 0.6rem;
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  font-size: 0.85rem;
  opacity: 0.9;
}
.name {
  font-size: 2.8rem;
  margin: 1rem 0 0.5rem;
}
.role {
  font-size: 1.25rem;
  color: #42b883;
  margin: 0 0 1rem;
}
.pitch {
  max-width: 780px;
  line-height: 1.7;
  opacity: 0.95;
}
.cta {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.btn {
  border: 1px solid #2a2a2a;
  padding: 0.7rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  color: #eaeaea;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.btn:hover {
  border-color: #42b883;
}
.primary {
  background: #42b883;
  color: #0b1a14;
  border-color: #42b883;
  font-weight: 700;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}
.card {
  border: 1px solid #222;
  border-radius: 16px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
}
.label {
  opacity: 0.7;
  font-size: 0.9rem;
  margin: 0;
}
.value {
  margin: 0.4rem 0 0;
  font-weight: 600;
}
@media (max-width: 800px) {
  .stats {
    grid-template-columns: 1fr;
  }
  .name {
    font-size: 2.2rem;
  }
}
</style>
