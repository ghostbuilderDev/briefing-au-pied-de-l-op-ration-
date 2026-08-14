# Briefing au pied de l’opération — V34 finale

## Fichiers à remplacer à la racine du dépôt GitHub

- `index.html`
- `installer.html` (nouvelle page avec le logo et le bouton d’ouverture)
- `manifest.json`
- `service-worker.js`
- `robots.txt` (nouveau)

Conserver les icônes et le dossier `vendor` déjà présents dans le dépôt.

## Lien direct à transmettre aux collaborateurs

https://ghostbuilderdev.github.io/briefing-au-pied-de-l-op-ration-/installer.html

Cette page affiche le logo du Briefing. Son bouton ouvre le Briefing puis affiche l’aide d’installation. Sur Android, le bouton
« Installer maintenant » déclenche l’installation lorsqu’elle est proposée par Chrome/Edge ;
sinon l’écran indique le chemin « menu ⋮ → Installer l’application / Ajouter à l’écran d’accueil ».
Le fichier `installer.html` peut également être envoyé comme document : son bouton utilise le lien officiel du Briefing.

## Après remplacement

1. Déposer les cinq fichiers à la racine du dépôt, en remplaçant les trois existants.
2. Attendre la mise à jour GitHub Pages.
3. Ouvrir le lien ci-dessus une fois avec un téléphone Android et vérifier :
   - libellés « Protection de la voie » et « État de la caténaire » ;
   - alignement vertical des deux listes ;
   - même taille pour les cinq cases de la voie ;
   - fonctionnement normal du partage et de l’export PDF ;
   - installation et ouverture hors connexion.

## Sécurité incluse dans cette version

- Politique de sécurité navigateur (CSP) restreignant scripts, formulaires, cadres et ressources aux seules origines nécessaires.
- Referrer supprimé et page non indexable par les moteurs respectant robots/noindex.
- Blocage de l’affichage intégré dans une page tierce.
- Nettoyage des caractères HTML dangereux dans les champs de texte.
- Liens ouverts dans une nouvelle page protégés par `noopener noreferrer`.
- Cache PWA durci : il ne conserve plus de réponses avec paramètres d’URL et ne supprime que les anciens caches du Briefing.

## Sécurité à activer côté comptes

Ces protections n’empêchent pas la copie d’une PWA statique, mais empêchent son détournement
sur l’adresse officielle tant que les comptes restent protégés :

- activer passkey ou double authentification sur GitHub ;
- ne donner aucun accès d’écriture au dépôt sans nécessité ;
- activer la protection de la branche `main` et imposer une validation avant fusion ;
- conserver les clés/API uniquement dans Google Apps Script ou les secrets GitHub, jamais dans `index.html` ;
- protéger aussi le compte qui possède le script Google Apps Script d’amélioration IA.
