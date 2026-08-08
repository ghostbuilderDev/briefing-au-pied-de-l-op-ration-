/*
 * Briefing au pied de l'opération — GitHub Pages
 *
 * La stratégie est "réseau d'abord" : dès que le téléphone a Internet,
 * il reçoit la dernière version publiée sur GitHub, même si les noms de
 * fichiers n'ont pas changé. Les fichiers mis en cache restent disponibles
 * comme secours hors connexion.
 */
const CACHE_NAME = 'briefing-pwa-pages-v26-dictation-reliable';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192-v19b.png',
  './icon-512-v19b.png',
  './vendor/html2canvas.min.js',
  './vendor/jspdf.umd.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      // no-store évite qu'un ancien index.html ou ancien JavaScript soit
      // conservé par le navigateur après une nouvelle publication GitHub.
      const fresh = await fetch(event.request, { cache: 'no-store' });
      if (fresh && fresh.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, fresh.clone());
      }
      return fresh;
    } catch (error) {
      const saved = await caches.match(event.request);
      if (saved) return saved;

      if (event.request.mode === 'navigate') {
        const shell = await caches.match('./index.html');
        if (shell) return shell;
      }

      return new Response('Application indisponible hors connexion.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
