const quests = {
    harry: {
        title: "Гаррі Поттер: Косий провулок",
        image: "images/quests/harry.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "8+",
        description:
            `Квест містить в собі велику кількість спецефектів, що вразить уяву дітей та залишить яскраві спогади🎉

2 гри - 3 - 4 години
Від 3-х акторів 
План: перша гра; перерва на обід; друга гра; торт 


Події відбуваються в косому провулку - у команди є завдання знайти предмети, котрі приведуть її до стін школи магії та чаклунства - Хогвартс. 

У Хогвартсі їх зустрічають рухомі портрети, таємні двері, магічні предмети.Звісно команда відвідає і гостьову кімнату «Гріффіндор»  де отримає магічні листи і підказки, як знайти Гаррі Поттера.На шляху юних гріффіндорців зустрінуться і перешкоди. 

«Той, Кого Не Можна називати знову спробує захопити Хогвартс та завдати шкоду Гаррі Поттеру. 

Знайшовши щоденник Тома Редла, у команди будують всі шанси перемогти Темного Лорда. 
Але спершу треба відвідати «Виручай - кімнату» і Азкабан.`
    },

    squid: {
        title: "Гра в кальмара",
        image: "images/quests/squid.jpg",
        time: "2–4 години",
        players: "До 13 гравців",
        age: "10+",
        description:
            "Учасники отримають головне завдання гри і мають до кінця зберегти всіх учасників. Спробувати всі ігри південнокорейського серіалу зможе кожен."
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
        description: `
Це унікальний квест, який поєднує у собі 🎭 костюмовану вечірку, 🧩 захопливі логічні завдання та 🎉 динамічні розваги.

Несподіваний сюжет і тісна взаємодія з акторами перенесуть вас у справжній світ ✨ магії, таємниць і чарівних пригод.

На вас чекає неймовірна подорож:

🌳 ви можете застрягти у Плакучій Іві;

🏛 відвідати Міністерство Магії;

🖤 і навіть потоваришувати з Тим-Кого-Не-Можна-Називати.

Але пам’ятайте…

🎇 У вас є лише один шанс потрапити на легендарну Піжамну вечірку у Гоґвортсі та розгадати найголовнішу таємницю цієї чарівної ночі! 🔮
`
    },

    freak: {
        title: "At Pierrot’s show",
        image: "images/quests/freak.jpg",
        time: "1,5 години",
        players: "До 7 гравців",
        age: "13+",
        description:
            "занурює в атмосферу незвичних пригод у оточенні Пьеро і його циркових друзів. У тебе є шанс залишитись у цирку назавжди або виконати всі завдання і вийти неушкодженим.Самотужки тут не впоратись, тож бери завзяту і відчайдушну команду."
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
            "Діти зустрічаються з героями серіалу і отримують  одну з найскладніших справ. Допомогти знайти Венздей та потоваришували з головною героїнею - завдання не з найлегших. Ви зможете?"
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