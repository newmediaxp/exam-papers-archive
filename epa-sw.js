// (A) CREATE/INSTALL CACHE
self.addEventListener("install", e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open("epa-cache")
        .then(cache => cache.add("./"))
        .catch(err => console.error(err))
    );
});

// (B) CLAIM CONTROL INSTANTLY
self.addEventListener("activate", e => self.clients.claim());

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
/*self.addEventListener("fetch", e => e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
));*/

// (C) LOAD WITH NETWORK FIRST, FALLBACK TO CACHE IF OFFLINE
self.addEventListener("fetch", e => e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
));
