<template>
  <div>
    <header class="header">
      <div class="topbar"></div>

      <nav class="nav">
        <div class="nav-inner">
          <RouterLink class="logo" to="/">
            <span class="dot"></span>
            Home
          </RouterLink>

          <div class="links">
            <RouterLink class="link" to="/about">À propos</RouterLink>
            <RouterLink class="link" to="/projects">Projets</RouterLink>
            <RouterLink class="link" to="/skills">Compétences</RouterLink>

            <RouterLink class="btn contact" to="/contact">Contact</RouterLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* --- Barre fine en haut (comme une “bar”) --- */
.topbar {
  height: 4px;
  background: linear-gradient(90deg, #16a34a, #22c55e, #10b981);
}

/* --- Header sticky --- */
.header {
  position: sticky;
  top: 0;
  z-index: 20;
}

/* --- Navbar --- */
.nav {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
}

.nav-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.9rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 800;
  color: #111827;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #16a34a;
  box-shadow: 0 0 0 6px rgba(22, 163, 74, 0.12);
}

.links {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.link {
  color: #374151;
  font-weight: 600;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
}

.link:hover {
  color: #16a34a;
  background: rgba(22, 163, 74, 0.08);
}

.link.router-link-active {
  color: #16a34a;
  background: rgba(22, 163, 74, 0.10);
}

.btn {
  display: inline-flex;
  align-items: center;
  border-radius: 12px;
  padding: 0.6rem 0.9rem;
  font-weight: 800;
  border: 1px solid #e5e7eb;
}

.contact {
  background: #16a34a;
  border-color: #16a34a;
  color: white;
}

.contact:hover {
  filter: brightness(0.97);
}

@media (max-width: 700px) {
  .links { gap: 0.5rem; }
  .link { padding: 0.35rem 0.45rem; font-weight: 600; }
}
</style>
