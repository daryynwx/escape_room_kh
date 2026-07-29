// =============================
// Burger Menu
// =============================

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            nav.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            burger.classList.remove("active");
            nav.classList.remove("active");
            document.body.classList.remove("menu-open");
        }
    });
});