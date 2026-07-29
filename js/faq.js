const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((faq) => {
            faq.classList.remove("active");
            faq.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});