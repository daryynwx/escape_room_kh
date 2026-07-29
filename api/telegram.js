export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed"
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
            services

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

⭐ <b>Додаткові послуги:</b>

${services || "Не обрано"}

💬 <b>Коментар:</b>

${comment || "-"}
`;

        const response = await fetch(
            `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                    chat_id: process.env.CHAT_ID,

                    text: message,

                    parse_mode: "HTML"

                }),
            }
        );

        const data = await response.json();

        if (!data.ok) {

            console.error("Telegram API Error:", data);

            throw new Error(
                `${data.error_code}: ${data.description}`
            );

        }

        return res.status(200).json({
            success: true
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

}