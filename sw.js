window.addEventListener("install", e => {
    e.waitUntil(
        caches.open("my-cache").then(function(cache) {
            return cache.addAll(["./index.html", "./index.js"]);
        })
    );
});