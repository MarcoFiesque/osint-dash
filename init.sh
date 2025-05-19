#!/bin/bash

# 🚀 Script pour initialiser un nouveau projet Angular depuis un boilerplate

BOILERPLATE_REPO="https://github.com/tonuser/ng-boilerplate.git"
DEFAULT_PROJECT_NAME="my-angular-app"

echo "Nom du nouveau projet :"
read PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-$DEFAULT_PROJECT_NAME}

echo "📥 Clonage du boilerplate..."
git clone "$BOILERPLATE_REPO" "$PROJECT_NAME" || exit 1

cd "$PROJECT_NAME" || exit 1

echo "🧹 Nettoyage du repository Git d'origine..."
rm -rf .git
git init
git add .
git commit -m "🔧 Initial commit from boilerplate"

echo "📦 Installation des dépendances..."
npm install || exit 1

echo "🚀 Lancement du serveur Angular..."
npm start
