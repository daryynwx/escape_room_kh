// ==========================================
// Gallery.js
// Анимации карточек
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    animateCards();
    tiltCards();

});

// ==========================================
// Появление при прокрутке
// ==========================================

function animateCards() {

    const cards = document.querySelectorAll(".card");

    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-card");

            }

        });

    }, {

        threshold: .15

    });

    cards.forEach(card => observer.observe(card));

}

// ==========================================
// 3D эффект
// ==========================================

function tiltCards() {

    if (window.innerWidth < 992) return;

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - .5) * 18;
            const rotateX = ((y / rect.height) - .5) * -18;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) scale(1)";

        });

    });

}