// ======================================
// Booking.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    initBooking();

});

function initBooking() {

    const bookBtn = document.querySelector(".book-btn");

    const form = document.querySelector(".booking-form");

    if (!bookBtn || !form) return;

    bookBtn.addEventListener("click", () => {

        form.classList.toggle("show");

        bookBtn.style.display = "none";

    });

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("userName").value.trim();

        const phone = document.getElementById("userPhone").value.trim();

        const date = document.getElementById("userDate").value;

        const time = document.getElementById("userTime").value;

        const players = document.getElementById("players").value;

        if (
            name === "" ||
            phone === "" ||
            date === "" ||
            time === "" ||
            players === ""
        ) {

            alert("Будь ласка, заповніть усі обов'язкові поля.");

            return;

        }

        alert(
            `🎉 Дякуємо!

Ваше бронювання прийнято.

Ми зв'яжемося з вами найближчим часом.`
        );

        form.reset();

        form.classList.remove("show");

        bookBtn.style.display = "block";

    });

}