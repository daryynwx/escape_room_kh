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