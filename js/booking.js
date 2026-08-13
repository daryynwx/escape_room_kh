const form = document.querySelector("#bookingForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const services = [];

    document
        .querySelectorAll(".checkboxes input:checked")
        .forEach(service => {

            services.push(service.value);

        });

    const formData = {

        name: form.name.value,
        phone: form.phone.value,
        quest: form.quest.value,
        packageType: form.package.value,
        date: form.date.value,
        time: form.time.value,
        players: form.players.value,
        comment: form.comment.value,
        services: services.join(", ")

    };

    try {

        const response = await fetch("/api/telegram", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(formData)

        });

        const result = await response.json();

        if (result.success) {

            alert("🎉 Дякуємо!\n\nВашу заявку успішно надіслано.\n\nНаш адміністратор скоро зв'яжеться з вами.");

            form.reset();

        } else {

            alert("Помилка відправки 😔");

        }

    } catch (error) {

        console.error(error);

        alert("Помилка з'єднання із сервером.");

    }

});
/* =========================
   CUSTOM SELECTS
========================= */

const customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach((select) => {

    const trigger = select.querySelector(".custom-select-trigger");
    const selectedValue = select.querySelector(".selected-value");
    const options = select.querySelectorAll(".custom-option");
    const input = select.querySelector("input");

    trigger.addEventListener("click", () => {

        customSelects.forEach((otherSelect) => {

            if (otherSelect !== select) {
                otherSelect.classList.remove("open");
            }

        });

        select.classList.toggle("open");

    });

    options.forEach((option) => {

        option.addEventListener("click", () => {

            const value = option.dataset.value;

            selectedValue.textContent = option.textContent.trim();

            input.value = value;

            options.forEach((item) => {
                item.classList.remove("selected");
            });

            option.classList.add("selected");

            select.classList.remove("open");

        });

    });

});


document.addEventListener("click", (event) => {

    customSelects.forEach((select) => {

        if (!select.contains(event.target)) {
            select.classList.remove("open");
        }

    });

});

const dateInput = document.querySelector("#date");

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;

/* =========================
   DATE & TIME PICKER
========================= */

const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;

dateInput.addEventListener("click", () => {
    if (dateInput.showPicker) {
        dateInput.showPicker();
    }
});

timeInput.addEventListener("click", () => {
    if (timeInput.showPicker) {
        timeInput.showPicker();
    }
});