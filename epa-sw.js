self.addEventListener("install", e =>
    e.waitUntil(
        caches.open("cache-store").then(caches => {
            return caches.addAll([
                "./", "./home", "./wbsu-ug", "./about", "./assets/*",
            ])
        })
    )
);