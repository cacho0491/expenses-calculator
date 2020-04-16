const expensesCalculator = "expenses-calculator-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "js/script.js"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(expensesCalculator).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWidth(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
});

