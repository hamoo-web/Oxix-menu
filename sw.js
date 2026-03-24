self.addEventListener('install', (e) => {
  console.log('OXIX Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // This allows the app to work even with slow internet
});
