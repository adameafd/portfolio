<script setup lang="ts">
import scrin1 from "../assets/projects/scrin1.png";
import scrin2 from "../assets/projects/scrin2.png";
type CardType = "Projet" | "Expérience" | "Compétition";

type Screenshot = {
  src: string;
  alt: string;
};

type Card = {
  title: string;
  type: CardType;
  context: string;
  objective: string;
  stack: string[];
  highlights: string[];
  learned: string[];
  link?: string;
  screenshots?: Screenshot[];
};

const githubProfile = "https://github.com/adameafd";

const cards: Card[] = [
  {
    title: "Gestion des ventes & des stocks — Application Web",
    type: "Projet",
    context:
      "Application web pour un magasin : gestion des utilisateurs, suivi des produits en temps réel, alertes de stock faible.",
    objective:
      "Créer une application fiable pour gérer ventes/stock avec une interface claire et une base de données structurée.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    highlights: [
      "Gestion des utilisateurs",
      "Suivi des produits en temps réel",
      "Alerte en cas de stock faible",
      "CRUD (ajouter / modifier / supprimer)",
    ],
    learned: [
      "Connexion Frontend ↔ Backend",
      "Modélisation et requêtes SQL",
      "Organisation du code et logique métier",
    ],
    screenshots: [
      { src: scrin1, alt: "Capture 1 - Projet stock" },
      { src: scrin2, alt: "Capture 2 - Projet stock" },
    ],
    link: "https://github.com/adameafd/gestiondesventes",
  },
  {
    title: "Stage d’observation — Service informatique (RADEEJ) — 07/2024",
    type: "Expérience",
    context:
      "Découverte du service informatique : sécurité, étude & développement, exploitation, réseaux. Observation des méthodes, outils et compétences clés.",
    objective:
      "Comprendre le fonctionnement global d’un service IT et les rôles liés à la sécurité et aux réseaux.",
    stack: ["Réseaux", "Sécurité", "Exploitation", "Méthodes & outils IT"],
    highlights: [
      "Vision globale des activités IT",
      "Découverte de la sécurité et des réseaux",
      "Observation des processus et outils",
    ],
    learned: [
      "Compréhension des sous-secteurs IT",
      "Approche professionnelle et rigueur",
      "Communication et esprit d’équipe",
    ],
  },
  {
    title: "Challenge CTF — 6ème place (UIR, avec Akasec 1337)",
    type: "Compétition",
    context:
      "Compétition de cybersécurité : cryptographie, exploitation de vulnérabilités (pwn) et autres défis.",
    objective:
      "Résoudre des challenges techniques sous contrainte de temps, en équipe.",
    stack: ["Cryptographie", "Pwn", "Résolution de problèmes", "Travail d’équipe"],
    highlights: [
      "Classement : 6ème",
      "Challenges crypto & vulnérabilités",
      "Approche méthodique",
    ],
    learned: [
      "Raisonner sous pression",
      "Décomposer un problème",
      "Collaboration et communication",
    ],
  },
];

function open(url?: string) {
  window.open(url || githubProfile, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <section class="wrap">
    <header class="header">
      <h1>Projets & Expériences</h1>
      <p class="subtitle">
        Sélection basée sur mon parcours : développement web (PHP/MySQL) et cybersécurité (CTF),
        ainsi qu’une expérience en environnement IT.
      </p>
    </header>

    <div class="grid">
      <article v-for="c in cards" :key="c.title" class="card">
        <div class="top">
          <div class="tag">{{ c.type }}</div>
          <h2 class="title">{{ c.title }}</h2>

          <div class="chips">
            <span v-for="s in c.stack" :key="s" class="chip">{{ s }}</span>
          </div>
        </div>

        <div class="block">
          <p class="label">Contexte</p>
          <p class="text">{{ c.context }}</p>
        </div>

        <div class="block">
          <p class="label">Objectif</p>
          <p class="text">{{ c.objective }}</p>
        </div>

        <div class="block">
          <p class="label">Points clés</p>
          <ul class="list">
            <li v-for="h in c.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>

        <div class="block">
          <p class="label">Ce que j’ai appris</p>
          <ul class="list">
            <li v-for="l in c.learned" :key="l">{{ l }}</li>
          </ul>
        </div>

        <div v-if="c.screenshots?.length" class="screens">
          <img
            v-for="img in c.screenshots"
            :key="img.alt"
            class="shot"
            :src="img.src"
            :alt="img.alt"
            loading="lazy"
          />
        </div>

        <div class="actions" v-if="c.type === 'Projet'">
          <button class="btn primary" type="button" @click="open(c.link)">
            Voir le repo
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.wrap { padding: 2rem 0; }
.header { margin-bottom: 1.5rem; }
.subtitle { max-width: 950px; line-height: 1.7; color: #4b5563; margin-top: 0.5rem; }

.grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }

.card {
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 1.1rem;
  background: white;
  box-shadow: 0 8px 30px rgba(17, 24, 39, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.top { display: flex; flex-direction: column; gap: 0.6rem; }

.tag {
  align-self: flex-start;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  font-size: 0.85rem;
  color: #374151;
  font-weight: 800;
}

.title { margin: 0; font-size: 1.08rem; color: #111827; }

.chips { display: flex; gap: 0.5rem; flex-wrap: wrap; }

.chip {
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  font-size: 0.85rem;
  color: #4b5563;
}

.block .label { margin: 0; font-size: 0.9rem; color: #6b7280; font-weight: 800; }

.text { margin: 0.35rem 0 0; line-height: 1.65; color: #374151; }

.list { margin: 0.35rem 0 0; padding-left: 1.1rem; line-height: 1.65; color: #374151; }

.screens { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.7rem; }

.shot {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 20px rgba(17, 24, 39, 0.06);
  transition: transform 0.15s ease;
  cursor: zoom-in;
}

.shot:hover { transform: scale(1.02); }

.actions { display: flex; gap: 0.7rem; flex-wrap: wrap; margin-top: 0.2rem; }

.btn {
  border: 1px solid #e5e7eb;
  background: white;
  color: #111827;
  padding: 0.7rem 0.95rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 800;
}

.btn:hover { border-color: #16a34a; }

.primary { background: #16a34a; border-color: #16a34a; color: white; }

@media (max-width: 1000px) { .grid { grid-template-columns: 1fr; } }
@media (max-width: 650px) { .screens { grid-template-columns: 1fr; } }
</style>
