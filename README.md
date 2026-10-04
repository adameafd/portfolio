<div align="center">

# 💼 Portfolio — Adame Afdari

**Ingénierie logicielle · DevOps · Full Stack · Backend · Frontend**

Portfolio personnel présentant mon parcours, mes compétences et mes projets, avec un objectif clair : décrocher un **stage de fin d'études de 6 mois à partir du 8 février 2027** en DevOps, Full Stack, Backend ou Frontend.

[![Voir le site](https://img.shields.io/badge/Voir_le_site-en_ligne-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://adameafd.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Adame%20Afdari-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adame-afdari)

![Vue](https://img.shields.io/badge/Vue_3-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

</div>

---

## 🎯 À propos du projet

Ce portfolio est un **site monopage** développé avec **Vue 3**, **TypeScript** et **Vite**, avec thème **clair / sombre** et design responsive.
Il présente de façon claire et structurée qui je suis, ce que je sais faire et les projets que j'ai réalisés, en mettant l'accent sur la **sécurité applicative** et le **développement backend**.

## ✨ Fonctionnalités

| Section | Contenu |
|---|---|
| 🏠 **Accueil** | Présentation, disponibilité pour le stage et liens LinkedIn / GitHub |
| 👤 **À propos** | Profil, approche et chiffres clés |
| 🧰 **Compétences** | Frontend, Backend, DevOps & Cloud, Bases de données, Sécurité, Data & IA |
| 🚀 **Projets** | AFD Security, DataPilot, NOVA, Gestion des ventes |
| 🗺️ **Parcours** | Frise chronologique des projets et expériences |
| 📫 **Contact** | Email, LinkedIn et GitHub |

- Navigation fluide par ancres et en-tête fixe, menu mobile
- Thème clair / sombre mémorisé, animations d'apparition au défilement
- Contenu centralisé dans `src/data.ts` pour des mises à jour faciles
- Code typé avec **TypeScript** et composants `<script setup>`
- Interface responsive et épurée
- **Déploiement continu** sur GitHub Pages via **GitHub Actions** à chaque push sur `main`

## 🛠️ Stack technique

| Catégorie | Technologies |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Langage | TypeScript |
| Build | Vite, vue-tsc |
| Style | CSS |
| CI/CD | GitHub Actions → GitHub Pages |

## 📁 Structure du projet

```
portfolio/
├── .github/workflows/   # Déploiement automatique sur GitHub Pages
├── public/              # Fichiers statiques
├── src/
│   ├── assets/          # Images et captures des projets
│   ├── components/      # Sections du site (Hero, À propos, Compétences, Projets, Parcours, Contact)
│   ├── styles/          # Styles globaux et thèmes clair / sombre
│   ├── data.ts          # Tout le contenu du site (profil, compétences, projets, parcours)
│   ├── App.vue          # Assemblage des sections
│   └── main.ts          # Point d'entrée de l'application
├── index.html
└── vite.config.ts
```

## 🚀 Lancer le projet en local

**Prérequis :** Node.js 20 ou supérieur et npm.

```bash
# Cloner le dépôt
git clone https://github.com/adameafd/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Vérifie les types puis génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise localement la version de production |

## 🌐 Déploiement

Le site est déployé automatiquement sur **GitHub Pages** par le workflow `.github/workflows/main.yml` à chaque push sur la branche `main` :
installation des dépendances → build → publication du dossier `dist/`.

---

<div align="center">

## 👤 Auteur

**Adame Afdari** — Étudiant en ingénierie logicielle · DevOps · Full Stack · Backend · Frontend

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adame-afdari)
[![GitHub](https://img.shields.io/badge/GitHub-adameafd-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/adameafd)

*En recherche d'un stage de fin d'études de 6 mois à partir du 8 février 2027 — n'hésitez pas à me contacter !*

</div>
