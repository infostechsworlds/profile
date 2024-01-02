// Service worker installation and caching
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-web-app-v1').then(cache => {
            return cache.addAll([
                // List of files to be cached
                'index.html',
                'https://infostechsworlds.github.io/profile/skill.png',
                'https://infostechsworlds.github.io/profile/skill.png',
                // Add other assets here, e.g., CSS, JS, images, etc.
            ]);
        })
    );
});

// Service worker fetch event (cache-first strategy)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
