// Tout le contenu du site est centralisé ici : modifier ce fichier suffit pour mettre à jour le portfolio.
import scrin1 from "./assets/projects/scrin1.png";
import scrin2 from "./assets/projects/scrin2.png";

export const profile = {
  name: "Adame Afdari",
  role: "Étudiant en ingénierie logicielle",
  focus: ["DevOps", "Full Stack", "Backend", "Frontend"],
  pitch:
    "Je conçois des applications web complètes, sécurisées et structurées — de l'interface utilisateur jusqu'au déploiement.",
  availability: "Stage de fin d'études · 6 mois · dès le 8 février 2027",
  email: "adame.afda@gmail.com",
  github: "https://github.com/adameafd",
  linkedin: "https://www.linkedin.com/in/adame-afdari",
};

export const about = {
  paragraphs: [
    "Étudiant en ingénierie logicielle, j'aime travailler sur toute la chaîne d'une application : l'interface, l'API, la base de données, puis la mise en production.",
    "Mes projets m'ont amené à construire des plateformes SaaS, des outils d'analyse de données intégrant l'IA et des applications temps réel, avec une attention constante portée à la sécurité : authentification, gestion des rôles, validation des entrées et bonnes pratiques OWASP.",
    "Je recherche un stage de fin d'études de 6 mois, à partir du 8 février 2027, en DevOps, Full Stack, Backend ou Frontend.",
  ],
  highlights: [
    { value: "4", label: "projets full stack" },
    { value: "6ᵉ", label: "place au challenge CTF de l'UIR" },
    { value: "6 mois", label: "de stage dès le 8 février 2027" },
  ],
};

export type SkillGroup = { title: string; icon: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["React", "Next.js", "Vue 3", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express", "API REST", "PHP", "Java", "Socket.io", "Swagger / OpenAPI"],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    items: ["Docker", "GitHub Actions (CI/CD)", "Vercel", "Render", "GitHub Pages", "Linux", "Git"],
  },
  {
    title: "Bases de données",
    icon: "database",
    items: ["MySQL", "Sequelize", "Modélisation SQL"],
  },
  {
    title: "Sécurité",
    icon: "shield",
    items: ["JWT", "bcrypt", "Helmet", "Rate limiting", "Gestion des rôles", "Bonnes pratiques OWASP"],
  },
  {
    title: "Data & IA",
    icon: "spark",
    items: ["Python", "FastAPI", "Pandas", "scikit-learn", "API Claude (Anthropic)"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  repo?: string;
  demo?: string;
  privateCode?: boolean;
  screenshots?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    title: "AFD Security",
    tagline: "Plateforme SaaS d'audit de sécurité",
    description:
      "Application SaaS permettant d'auditer la sécurité d'un site web, de tester la robustesse des mots de passe, de détecter des fuites de données et de générer des rapports.",
    features: [
      "Offres Free, Pro et Expert avec espaces dédiés",
      "Authentification JWT et gestion des rôles",
      "Espace d'administration et support",
      "Génération de rapports d'audit",
    ],
    stack: ["Node.js", "Express", "MySQL", "JWT", "JavaScript ES6"],
    privateCode: true,
  },
  {
    title: "DataPilot",
    tagline: "Analyse de données assistée par IA",
    description:
      "Importez un fichier CSV ou Excel et obtenez automatiquement un dashboard, une synthèse rédigée par l'IA, un assistant conversationnel et des prédictions de tendance.",
    features: [
      "Dashboard automatique : indicateurs clés et graphiques adaptés aux données",
      "Assistant IA en langage naturel (API Claude)",
      "Prédiction de tendance par Machine Learning (scikit-learn)",
      "Export PDF, lien de partage, thème clair / sombre, FR / EN",
    ],
    stack: ["Next.js", "React", "Tailwind", "Express", "MySQL", "FastAPI", "scikit-learn", "Docker"],
    privateCode: true,
  },
  {
    title: "NOVA",
    tagline: "Plateforme de gestion de ville intelligente",
    description:
      "Plateforme Smart City centralisant les alertes citoyennes, les interventions techniques, la messagerie interne et le monitoring IoT en temps réel.",
    features: [
      "Suivi des alertes citoyennes et des interventions",
      "Messagerie interne et notifications en temps réel (Socket.io)",
      "Monitoring IoT avec graphiques (Chart.js)",
      "API documentée avec Swagger, tests avec Vitest",
    ],
    stack: ["React 19", "Vite", "Node.js", "Express 5", "MySQL", "Socket.io", "Swagger"],
    repo: "https://github.com/adameafd/nova",
    demo: "https://nova-flame-three.vercel.app",
  },
  {
    title: "Gestion des ventes & des stocks",
    tagline: "Application web de gestion commerciale",
    description:
      "Application web pour un magasin : gestion des utilisateurs, suivi des produits en temps réel et alertes de stock faible.",
    features: [
      "Gestion des utilisateurs",
      "Suivi des produits en temps réel",
      "Alertes en cas de stock faible",
      "CRUD complet sur les produits et les ventes",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/adameafd/gestiondesventes",
    screenshots: [
      { src: scrin1, alt: "Gestion des ventes — capture 1" },
      { src: scrin2, alt: "Gestion des ventes — capture 2" },
    ],
  },
];

export type TimelineItem = { date: string; title: string; text: string; current?: boolean };

export const timeline: TimelineItem[] = [
  {
    date: "Février 2027",
    title: "Stage de fin d'études — 6 mois",
    text: "Disponible à partir du 8 février 2027 pour un stage en DevOps, Full Stack, Backend ou Frontend.",
    current: true,
  },
  {
    date: "2026",
    title: "AFD Security & DataPilot",
    text: "Conception de deux plateformes complètes : un SaaS d'audit de sécurité et un outil d'analyse de données intégrant l'IA et le Machine Learning.",
  },
  {
    date: "2025",
    title: "NOVA — Smart City",
    text: "Développement d'une plateforme temps réel (React, Node.js, Socket.io, MySQL) avec API documentée et tests.",
  },
  {
    date: "Challenge CTF",
    title: "6ᵉ place — UIR, avec Akasec (1337)",
    text: "Compétition de cybersécurité en équipe : cryptographie, exploitation de vulnérabilités (pwn) et résolution de problèmes sous contrainte de temps.",
  },
  {
    date: "Juillet 2024",
    title: "Stage d'observation — Service informatique, RADEEJ",
    text: "Découverte d'un service IT : sécurité, étude & développement, exploitation et réseaux.",
  },
];
