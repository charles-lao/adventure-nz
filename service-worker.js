const CACHE_NAME = 'adventure-nz-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/images/favicon.ico',
  '/images/DSC_0332.jpg',
  '/images/chch-port-hills.jpg',
  '/images/lake-tekapo-1.jpg',
  '/images/lake-tekapo-2.jpg',
  '/images/lake-tekapo-3.jpg',
  '/images/new-brighton-1.jpg',
  '/images/new-brighton-2.jpg',
  '/images/mt-hutt-1.jpg',
  '/images/mt-hutt-2.jpg',
  '/images/mt-hutt-3.jpg',
  '/images/lake-tekapo-4.jpg',
  '/images/DSC_0329.jpg',
  '/images/DSC_0340.jpg',
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