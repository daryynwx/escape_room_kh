const quests = {
    harry: {
        title: "Гаррі Поттер: Косий провулок",
        image: "images/quests/harry.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "8+",
        description:
            "Пориньте у світ магії, виконуйте завдання, шукайте артефакти та взаємодійте з професійними акторами."
    },

    squid: {
        title: "Гра в кальмара",
        image: "images/quests/squid.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "10+",
        description:
            "Серія випробувань, командна гра та атмосфера популярного серіалу."
    },

    pirates: {
        title: "Пірати",
        image: "images/quests/pirates.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "6+",
        description:
            "Пошуки скарбів, піратські загадки та пригоди на справжньому кораблі."
    },

    hogwarts: {
        title: "Піжамна вечірка у Гоґвортсі",
        image: "images/quests/hogwarts.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "8+",
        description:
            "Магічна вечірка у школі чарівництва з тематичними іграми."
    },

    freak: {
        title: "Цирк виродків",
        image: "images/quests/freak.jpg",
        time: "1,5 години",
        players: "До 7 гравців",
        age: "14+",
        description:
            "Похмура історія за мотивами новели The Freak Circus."
    },

    naruto: {
        title: "Наруто",
        image: "images/quests/naruto.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "8+",
        description:
            "Станьте справжніми шинобі та виконайте секретну місію."
    },

    wednesday: {
        title: "Венздей",
        image: "images/quests/wednesday.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "10+",
        description:
            "Містична атмосфера Nevermore та загадкові пригоди."
    },

    labubu: {
        title: "Лабубу",
        image: "images/quests/labubu.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "6+",
        description:
            "Яскравий дитячий квест із веселими персонажами."
    },

    trap: {
        title: "Пастка людожера",
        image: "images/quests/trap.jpg",
        time: "1 година",
        players: "До 7 гравців",
        age: "14+",
        description:
            "Моторошний квест, де кожне рішення має наслідки."
    }
};

const modal = document.querySelector(".quest-modal");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalTime = document.querySelector(".modal-time");
const modalPlayers = document.querySelector(".modal-players");
const modalAge = document.querySelector(".modal-age");
const modalDescription = document.querySelector(".modal-description");

const buttons = document.querySelectorAll(".details-btn");
const closeBtn = document.querySelector(".modal-close");

buttons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        const card = button.closest(".quest-card");
        const questId = card.dataset.quest;
        const quest = quests[questId];

        if (!quest) return;

        modalImage.src = quest.image;
        modalImage.alt = quest.title;

        modalTitle.textContent = quest.title;
        modalTime.textContent = "⏳ " + quest.time;
        modalPlayers.textContent = "👥 " + quest.players;
        modalAge.textContent = "🎂 " + quest.age;
        modalDescription.textContent = quest.description;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});

function closeModal() {

    modal.classList.remove("active");
    document.body.style.overflow = "";

}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});

const modalBook = document.querySelector(".modal-book");

modalBook.addEventListener("click", () => {

    closeModal();

    document.querySelector("#booking").scrollIntoView({

        behavior: "smooth"

    });

});