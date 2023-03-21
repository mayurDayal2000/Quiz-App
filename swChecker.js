if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("service worker registeration successfull"))
      .catch((err) =>
        console.error("service worker registeration failed", err)
      );
  });
}
