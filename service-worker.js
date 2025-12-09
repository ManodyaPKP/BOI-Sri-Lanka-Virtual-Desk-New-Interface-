/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'boi-helpdesk-v1';
const IMAGE_CACHE_NAME = 'boi-images-v1';

const urlsToCache = [
  '/',
  '/index.html',
  // Add your main bundle files here
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache, update cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Special handling for GIF images - cache aggressively
  if (url.pathname.match(/\.(gif|png|jpg|jpeg|webp)$/)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request)
            .then((cachedResponse) => {
              // Return cached version immediately
              if (cachedResponse) {
                console.log('Serving from cache:', url.pathname);
                return cachedResponse;
              }
              
              // Fetch and cache
              return fetch(event.request)
                .then((networkResponse) => {
                  if (networkResponse && networkResponse.status === 200) {
                    cache.put(event.request, networkResponse.clone());
                  }
                  return networkResponse;
                })
                .catch(() => {
                  // If fetch fails, serve a placeholder
                  return new Response('', {
                    status: 408,
                    statusText: 'Offline'
                  });
                });
            });
        })
    );
    return;
  }
  
  // For other requests, try cache then network
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, IMAGE_CACHE_NAME];
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