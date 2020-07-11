const staticCalle4 = "calle-4-taqueria"
const assets = [
  "/",
  "index.html",
  "/menu.html",
  "/galeria.html",
  "/css/main.css",
  "/css/slick.css",
  "/css/jquery.fancybox.min.css",
  "/js/horizontal-scroll.js",
  "/js/jquery.fancybox.min.js",
  "/js/slick.min.js",
  "/js/main.js",
  "/js/vertical-scroll.js",
  "/img/*"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCalle4).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});