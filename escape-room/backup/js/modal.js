// =====================================
// Modal Window
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    initModal();

});

const quests = {

    harry: {

        title: "Гаррі Поттер • Косий провулок",

        image: "images/harry.jpg",

        age: "🧒 8+",

        players: "👥 2–6",

        time: "⏳ 60 хв",

        description: "Пориньте у чарівний світ магії. На вас чекають загадки, таємні проходи та справжні артефакти."

    },

    squid: {

        title: "Гра в кальмара",

        image: "images/squid.jpg",

        age: "🔞 14+",

        players: "👥 2–8",

        time: "⏳ 70 хв",

        description: "Випробуйте себе у серії небезпечних ігор. Чи вистачить сміливості дійти до фіналу?"

    },

    pirates: {

        title: "Пірати",

        image: "images/pirates.jpg",

        age: "🧒 8+",

        players: "👥 2–6",

        time: "⏳ 60 хв",

        description: "Пошуки стародавнього скарбу серед піратських легенд."

    },

    hogwarts: {

        title: "Піжамна вечірка у Гоґвортсі",

        image: "images/hogwarts.jpg",

        age: "🧒 7+",

        players: "👥 2–8",

        time: "⏳ 60 хв",

        description: "Нічна пригода у школі магії з чарами та веселими загадками."

    },

    circus: {

        title: "Цирк виродків",

        image: "images/circus.jpg",

        age: "🔞 16+",

        players: "👥 2–6",

        time: "⏳ 75 хв",

        description: "Моторошний цирк, у якому кожна кімната приховує новий жах."

    },

    naruto: {

        title: "Naruto",

        image: "images/naruto.jpg",

        age: "🧒 8+",

        players: "👥 2–6",

        time: "⏳ 60 хв",

        description: "Виконайте місію шинобі та врятуйте село."

    },

    wednesday: {

        title: "Wednesday",

        image: "images/wednesday.jpg",

        age: "🧒 10+",

        players: "👥 2–6",

        time: "⏳ 60 хв",

        description: "Таємниці академії Невермор чекають саме на вас."

    },

    labubu: {

        title: "Labubu",

        image: "images/labubu.jpg",

        age: "🧒 6+",

        players: "👥 2–6",

        time: "⏳ 60 хв",

        description: "Казковий світ із несподіваними загадками."

    },

    trap: {

        title: "Пастка людожера",

        image: "images/trap.jpg",

        age: "🔞 16+",

        players: "👥 2–6",

        time: "⏳ 75 хв",

        description: "Втечіть із будинку, поки господар не повернувся."

    }

};

function initModal() {

    const cards = document.querySelectorAll(".card");

    const modal = document.querySelector(".modal");

    const close = document.querySelector(".close-modal");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.quest;

            const quest = quests[id];

            if (!quest) return;

            document.getElementById("modalTitle").textContent = quest.title;
            document.getElementById("modalImage").src = quest.image;
            document.getElementById("modalAge").textContent = quest.age;
            document.getElementById("modalPlayers").textContent = quest.players;
            document.getElementById("modalTime").textContent = quest.time;
            document.getElementById("modalDescription").textContent = quest.description;

            modal.classList.add("open");

            document.body.style.overflow = "hidden";

        });

    });

    close.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeModal();

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeModal();

        }

    });

    function closeModal() {

        modal.classList.remove("open");

        document.body.style.overflow = "";

    }

}