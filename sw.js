/* Pôle Éducation — service worker : rend l'application disponible sans internet. */
const VERSION = 'pole-education-v1.0.0';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './fonts/nunito-latin-400-normal.woff2',
  './fonts/nunito-latin-700-normal.woff2',
  './fonts/nunito-latin-800-normal.woff2',
  './fonts/amiri-arabic-400-normal.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

/* Toujours répondre depuis le cache d'abord : l'application marche hors ligne.
   Si internet est disponible, on met à jour le cache en arrière-plan. */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      const network = fetch(event.request)
        .then((res) => {
          if (res && res.ok && new URL(event.request.url).origin === location.origin) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(event.request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
