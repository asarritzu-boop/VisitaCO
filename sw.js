const CACHE_NAME = 'visitaco-v3';
const ASSETS = [
  '/VisitaCO/index.html',
  '/VisitaCO/manifest.json',
  '/VisitaCO/icona-192.png',
  '/VisitaCO/icona-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
