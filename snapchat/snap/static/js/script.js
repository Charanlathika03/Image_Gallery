document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".grid-gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightImg = document.getElementById("lightImg");
    const exit = document.getElementById("exit");

    photos.forEach(img => {
        img.addEventListener("click", () => {
            lightImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    exit.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});