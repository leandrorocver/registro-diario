self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('registro-cache').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(resposta => {
        return resposta || fetch(e.request);
      })
    );
  });
  