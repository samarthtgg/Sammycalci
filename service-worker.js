const CACHE_NAME = "sammycalci-v2";

const urlsToCache = [
  "/Sammycalci/",
  "/Sammycalci/index.html",
  "/Sammycalci/manifest.json",
  "/Sammycalci/icon-192.png",
  "/Sammycalci/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
