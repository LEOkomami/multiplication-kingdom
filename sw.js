const CACHE_NAME = 'multi-kingdom-v7';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon-512.png'
];
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});
