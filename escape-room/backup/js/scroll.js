// ==========================================
// Scroll.js
// Плавная прокрутка, Header, Scroll To Top
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    smoothScroll();
    headerScroll();
    createScrollTop();
    activeMenu();

});

// ===============================
// Плавная прокрутка
// ===============================

function smoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}

// ===============================
// Шапка
// ===============================

function headerScroll() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    });

}

// ===============================
// Кнопка наверх
// ===============================

function createScrollTop() {

    const button = document.createElement("button");

    button.className = "scroll-top";

    button.innerHTML = "↑";

    document.body.append(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ===============================
// Активный пункт меню
// ===============================

function activeMenu() {

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active-link");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active-link");

            }

        });

    });

}