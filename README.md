# 🚀 Angular 19 Boilerplate

Starter Angular 19 avec :
- ✅ Angular CLI
- 🎨 Tailwind CSS 4
- 📦 Angular Material
- 🐳 Docker-ready
- ♻️ GitHub template compatible

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) 20+
- [Docker](https://www.docker.com/) (optionnel)

---

## 🚀 Démarrage

### 🧪 Méthode 1 – Locale (classique)

```bash
git clone https://github.com/marcofiesque/ng-boilerplate.git
cd ng-boilerplate
npm install
ng serve
```

### 🐳 Méthode 2 – Docker (isolée)
git clone https://github.com/tonuser/ng-boilerplate.git
cd ng-boilerplate
docker build -t ng-boilerplate .
docker run -p 4200:4200 ng-boilerplate

### 📦 Contenu
Angular CLI + Angular 19

Tailwind CSS prêt à l'emploi (config purge ok)

Angular Material installé et stylisé

Dockerfile inclus pour usage rapide

Compatible GitHub template (clonable en un clic)

### 🧬 Créer un nouveau projet à partir du template
👉 Use this template

### 🛠 Roadmap
 Ajouter un composant exemple (ButtonComponent)

 Ajouter tests unitaires de base

 Ajouter support PWA

 Intégrer Storybook (optionnel)


---

## 🧨 Étape 3 – Activer le repo comme **GitHub Template**

1. -> GitHub.com
2. repo → Settings → Cocher ✅ **Template repository**

Cloner depuis le bouton **« Use this template »**

---

## ✅ Pousser :

```bash
git init
git remote add origin git@github.com:tonuser/ng-boilerplate.git
git add .
git commit -m "Initial boilerplate Angular 19 + Tailwind + Material"
git push -u origin main
