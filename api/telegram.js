export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed",
        });
    }

    try {
        const {
            name,
            phone,
            quest,
            date,
            time,
            players,
            packageType,
            comment,
            services,
            contactMethod,
        } = req.body;

        const message = `
🎭 <b>НОВА ЗАЯВКА</b>

👤 <b>Ім'я:</b> ${name}
📞 <b>Телефон:</b> ${phone}

🗝️ <b>Квест:</b> ${quest}
🎁 <b>Пакет:</b> ${packageType}

📅 <b>Дата:</b> ${date}
🕒 <b>Час:</b> ${time}

👥 <b>Гравців:</b> ${players}

📱 <b>Зручний спосіб зв'язку:</b>
${contactMethod || "Не обрано"}

⭐ <b>Додаткові послуги:</b>
${services || "Не обрано"}

💬 <b>Коментар:</b>
${comment || "-"}
`;

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: process.env.CHAT_ID,
                    text: message,
                    parse_mode: "HTML",
                }),
            }
        );

        const telegramData = await telegramResponse.json();

        console.log("BOT_TOKEN exists:", !!process.env.BOT_TOKEN);
        console.log("CHAT_ID:", process.env.CHAT_ID);
        console.log("Telegram response:", telegramData);


        if (!telegramData.ok) {
            return res.status(500).json({
                success: false,
                telegram: telegramData,
            });
        }

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error("SERVER ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}