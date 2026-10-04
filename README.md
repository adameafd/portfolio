<div align="center">

# 💼 Portfolio — Adame Afdari

**Cybersécurité & Développement Backend**

Portfolio personnel présentant mon parcours, mes compétences et mes projets, avec un objectif clair : décrocher un **stage en cybersécurité**.

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

Ce portfolio est une **application monopage (SPA)** développée avec **Vue 3**, **TypeScript** et **Vite**.
Il présente de façon claire et structurée qui je suis, ce que je sais faire et les projets que j'ai réalisés, en mettant l'accent sur la **sécurité applicative** et le **développement backend**.

## ✨ Fonctionnalités

| Page | Contenu |
|---|---|
| 🏠 **Accueil** | Présentation, domaines de prédilection et objectif professionnel |
| 👤 **À propos** | Parcours, intérêt pour la cybersécurité et frise chronologique |
| 🚀 **Projets** | Sélection de projets réalisés, avec captures d'écran |
| 🧰 **Compétences** | Compétences organisées par domaine : Backend, Frontend, Cybersécurité, DevOps & outils |
| 📫 **Contact** | Liens pour me contacter et consulter mes profils |

- Navigation fluide entre les pages grâce à **Vue Router**
- Code typé avec **TypeScript** et composants `<script setup>`
- Interface responsive et épurée
- **Déploiement continu** sur GitHub Pages via **GitHub Actions** à chaque push sur `main`

## 🛠️ Stack technique

| Catégorie | Technologies |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Langage | TypeScript |
| Routage | Vue Router |
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
│   ├── components/      # Composants réutilisables
│   ├── pages/           # Home, About, Projects, Skills, Contact
│   ├── styles/          # Styles globaux
│   ├── App.vue          # Layout principal (en-tête & navigation)
│   ├── router.ts        # Définition des routes
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

**Adame Afdari** — Étudiant en ingénierie informatique · Cybersécurité & Développement Backend

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adame-afdari)
[![GitHub](https://img.shields.io/badge/GitHub-adameafd-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/adameafd)

*En recherche d'un stage en cybersécurité — n'hésitez pas à me contacter !*

</div>
