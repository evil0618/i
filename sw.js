const CACHE_NAME = 'evil0618-v3';
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css?v=3',
  './script.js?v=3',
  './manifest.json',
  './favicon.svg',
];

// Install: precache shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: stale-while-revalidate for same-origin, network-first for API
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin API calls
  if (request.method !== 'GET') return;

  // Bing API: network only
  if (url.hostname === 'cn.bing.com' || url.hostname.includes('allorigins') || url.hostname.includes('corsproxy')) {
    return;
  }

  // Same-origin: stale-while-revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cached) => {
          const fetched = fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          }).catch(() => cached);
          return cached || fetched;
        })
      )
    );
  }
});
