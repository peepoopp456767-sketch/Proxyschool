if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./uv/uv.sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        console.log("Lions Defense Ready");
    });
}
