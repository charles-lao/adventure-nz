const CACHE_NAME = 'adventure-nz-cache-v1';
const urlsToCache = [
  '/adventure-nz/',
  '/adventure-nz/styles.css',
  '/adventure-nz/script.js',
  '/adventure-nz/images/favicon.ico',
  '/adventure-nz/images/DSC_0332.jpg',
  '/adventure-nz/images/chch-port-hills.jpg',
  '/adventure-nz/images/lake-tekapo-1.jpg',
  '/adventure-nz/images/lake-tekapo-2.jpg',
  '/adventure-nz/images/lake-tekapo-3.jpg',
  '/adventure-nz/images/new-brighton-1.jpg',
  '/adventure-nz/images/new-brighton-2.jpg',
  '/adventure-nz/images/mt-hutt-1.jpg',
  '/adventure-nz/images/mt-hutt-2.jpg',
  '/adventure-nz/images/mt-hutt-3.jpg',
  '/adventure-nz/images/lake-tekapo-4.jpg',
  '/adventure-nz/images/DSC_0329.jpg',
  '/adventure-nz/images/DSC_0340.jpg',
  // Add all other images and assets that should be cached
];

// Install event: Caching files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: Serving cached files
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate event: Cleaning up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});