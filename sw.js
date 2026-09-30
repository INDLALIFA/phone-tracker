const CACHE_NAME = 'tracker-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './node_modules/leaflet/dist/leaflet.css',
  './node_modules/leaflet/dist/leaflet.js'
];

// Installs the background app service
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetches assets locally so your app interface loads instantly
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
