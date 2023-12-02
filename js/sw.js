caches.keys().then(keys => {
    console.log("Caches:", keys);
});

self.addEventListener("install", (e) => {
    console.log("install");
    const cache = caches.open("mi-cache-2").then((cache) => {
        try {
            cache.addAll([
                '/',
                '/js/main.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
                '/img/logo-ext.png',
                '/img/logo.ico',
                '/img/logo.png',
                '/js/app.js',
                '/js/historial.js',
                '/js/login.js',
                '/js/perfil.js',
                '/js/state.js',
                '/js/sw.js',
                '/html/perfil.html',
                '/html/historial.html',
                '/html/login.html',
                '/css/login.css',
                '/php/backend.php',
            ]);
        } catch (error) {
            console.error("Error al agregar recursos a la caché:", error);
        }
    });
    e.waitUntil(cache);
});

self.addEventListener("fetch-cache-only", (e) => {
    const url = e.request.url;
    console.log(url);

    const cacheResponse = caches.match(e.request);

    e.respondWith(cacheResponse);

});

self.addEventListener("fetch-and-network", (e) => {
    const url = e.request.url;
    console.log(url);

    const cacheResponse = caches.match(e.request).then(response => {
        if(!response) {
            return fetch(e.request);
        }
        return response;
    });

    e.respondWith(cacheResponse);

});

self.addEventListener("fetch", (e) => {
    const url = e.request.url;
    console.log(url);
    const response =
        fetch(e.request)
            .then((res) => {
              return caches.open('mi-cache-2').then(cache => {
                  cache.put(e.request, res.clone());
                  return res;
              })
            })
            .catch((err) => {
                return caches.match(e.request);
            })
    e.respondWith(response);

});