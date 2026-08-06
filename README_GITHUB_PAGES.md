# Briefing professionnel — mise à jour GitHub Pages

Cette archive ne contient **ni APK, ni projet Android**. Elle remplace la
partie web de votre dépôt GitHub existant et conserve son adresse GitHub Pages.

## Une seule fois : publier cette version

1. Sur un ordinateur, téléchargez puis **extrayez** l'archive ZIP.
2. Ouvrez votre dépôt GitHub actuel (celui dont l'adresse Pages fonctionne déjà).
3. À la racine du dépôt, choisissez **Add file** puis **Upload files**.
4. Glissez-déposez le contenu extrait : `index.html`, `manifest.json`,
   `service-worker.js`, `.nojekyll`, les dossiers `icons` et `vendor`.
5. Acceptez le remplacement de l'ancien `index.html`, puis cliquez sur
   **Commit changes**.
6. Gardez le même nom de dépôt : l'adresse GitHub Pages ne changera pas.

Ne téléversez pas le ZIP comme un simple fichier : GitHub ne l'extrait pas tout
seul. Il faut d'abord l'extraire, puis envoyer son contenu.

## Réglage GitHub Pages

Votre dépôt semble déjà publier avec GitHub Pages. Vérifiez seulement dans
**Settings > Pages** que la publication est activée depuis la branche principale
(`main`) et le dossier `/(root)`. Si l'adresse est déjà affichée dans cette page,
ne changez pas le réglage.

Ce paquet ne contient volontairement pas de dossier `.github` : conservez vos
réglages GitHub existants. Les anciens fichiers Android peuvent rester en place;
ils ne sont plus nécessaires pour utiliser cette application web.

## Téléphone professionnel

1. Ouvrez l'adresse GitHub Pages habituelle dans **Chrome**.
2. Dans le menu Chrome, choisissez **Ajouter à l'écran d'accueil**.
3. Ouvrez ensuite l'icône créée comme une application.

Il n'y a rien à installer comme APK : cette opération n'utilise donc pas
l'autorisation « sources inconnues ».

## Mises à jour ultérieures

À chaque modification de `index.html` ou des autres fichiers dans GitHub,
cliquez sur **Commit changes**. GitHub Pages republie la même adresse. Lors de
la prochaine ouverture de l'icône avec Internet, la PWA demande la version
publiée et se met à jour sans téléchargement ni réinstallation. Si elle est
déjà ouverte, fermez-la puis rouvrez-la une fois.

La sauvegarde du briefing reste locale au navigateur du téléphone. Ne supprimez
pas les données de Chrome si vous voulez conserver les brouillons locaux.

## PDF et WhatsApp

Les boutons de génération PDF et de partage restent dans l'application. Sur
Android, le bouton de partage ouvre le menu système : sélectionnez WhatsApp.
Si le téléphone bloque le partage direct, enregistrez d'abord le PDF puis
joignez-le dans WhatsApp.
