const CACHE_NAME = 'visitaco-v1';
const ASSETS = [
  './visitaco.html',
  './manifest.json',
  './icona-192.png',
  './icona-512.png'
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
