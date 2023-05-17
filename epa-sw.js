// (A) CREATE/INSTALL CACHE
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("epa-cache").then(cache => {
            return cache.addAll([
                "/",
                "/manifest.json",
                "/favicon.png",
                //html
                "/home",
                "/wbsu-ug",
                "/about",
                // css
                "/assets/css/base-style.css",
                // img
                "/assets/img/search-toggle-select-icn.png",
                "/assets/img/search-toggle-text-icn.png",
                "/assets/img/site-big-icn.png",
                // js
                "/assets/js/base-script.js",
                "/assets/js/home-script.js",
                "/assets/js/wbsu-ug-script.js",
            ])
        }).then(() => self.skipWaiting()).catch()
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
