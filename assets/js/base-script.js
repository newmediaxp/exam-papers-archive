// regester service script worker for PWA

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("epa-sw.js")
        .then(registration => console.log(registration))
        .catch(error => console.error(error))
}
