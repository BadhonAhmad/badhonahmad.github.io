// Simple service worker for PWA
self.addEventListener('install', function() {
  console.log('Service Worker installing');
  self.skipWaiting();
});

self.addEventListener('activate', function() {
  console.log('Service Worker activating');
});

self.addEventListener('fetch', function() {
  // Let the browser handle all fetch events
  return;
});
