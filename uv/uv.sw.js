importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.bundle.js');
importScripts('uv.config.js');
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.handler.js');

const sw = new UVServiceWorker();
self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
