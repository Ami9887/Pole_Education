# Pôle Éducation — version 1.0.0 (étape 1 : fondations)

Application de suivi des élèves (Qâ'ida Nourâniyya). Fonctionne sans internet une fois installée.
Toutes les données restent sur l'appareil du professeur.

## Contenu du dossier

- `index.html` : l'application
- `sw.js` : le fonctionnement hors ligne
- `manifest.webmanifest` : l'installation sur l'écran d'accueil
- `fonts/` : les polices (Nunito, Amiri) intégrées pour le hors ligne
- `icons/` : les icônes de l'application

## Mettre l'application en ligne gratuitement (GitHub Pages)

1. Créez un compte gratuit sur https://github.com
2. Cliquez sur **New repository**, nommez-le `pole-education`, laissez-le **Public**, puis **Create repository**.
   (Seul le code est public : aucune donnée d'élève n'est envoyée sur GitHub.)
3. Cliquez sur **uploading an existing file** et glissez **le contenu** de ce dossier
   (index.html, sw.js, manifest.webmanifest, et les dossiers fonts et icons), puis **Commit changes**.
4. Allez dans **Settings › Pages**. Dans **Source**, choisissez **Deploy from a branch**,
   branche **main**, dossier **/ (root)**, puis **Save**.
5. Après 1 à 2 minutes, l'adresse s'affiche : `https://VOTRE-PSEUDO.github.io/pole-education/`
6. Ouvrez cette adresse sur chaque téléphone et installez l'application
   (dans l'application : Aide › Installer sur iPhone / Android).

## Mettre à jour l'application plus tard

1. Remplacez les fichiers sur GitHub par les nouveaux.
2. Les téléphones récupèrent la mise à jour à la prochaine ouverture avec internet.
   Les données des élèves ne sont pas touchées.

## Tester sur un PC sans mise en ligne

Dans ce dossier, lancez : `python -m http.server 8000`, puis ouvrez http://localhost:8000
(ouvrir directement le fichier index.html ne permet pas le mode hors ligne).

## En cas de problème

Paramètres › Diagnostic › **Exporter le journal**, et envoyez le fichier au développeur.
