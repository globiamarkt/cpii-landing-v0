const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const axios = require("axios");

// CONFIGURACIÓN INSTITUCIONAL
const TELEGRAM_TOKEN = "8342717113:AAHSP5SgrZRkcJZYXdQY4i5uLHR9mdnrxA8";
const CHAT_ID = "6573048143";

exports.sendLeadToTelegram = onRequest({ cors: true }, async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const data = req.body;

    // FORMATO HTML: Blindado contra símbolos extraños en los datos del lead
    const mensaje = `
🚀 <b>NUEVO LEAD - CPII PORTUGAL</b>
────────────────────
👤 <b>Inversor:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
📞 <b>WhatsApp:</b> ${data.phone}
🌍 <b>País:</b> ${data.country}
🤝 <b>Embajador:</b> ${data.referral}
────────────────────
💰 <i>Estado: Pendiente de contacto comercial.</i>
    `;

    try {
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: mensaje,
            parse_mode: "HTML" // <--- LA LLAVE MAESTRA
        });

        logger.info("Notificación enviada con éxito para: " + data.email);
        res.status(200).send({ success: true });
    } catch (error) {
        logger.error("Fallo en el sistema de notificaciones", error);
        res.status(500).send({ success: false, error: error.message });
    }
});

exports.validateAdminGate = onRequest({ cors: true }, async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { key } = req.body;
    const MASTER_KEY = "cpii-staff"; // Clave doctrinal de acceso

    if (key === MASTER_KEY) {
        logger.info("Acceso ADMIN concedido");
        return res.status(200).send({
            success: true,
            url: "https://cpii-crm-v0-1.vercel.app/"

        });
    }

    logger.warn("Intento de acceso fallido con clave: " + key);
    res.status(401).send({ success: false, message: "Unauthorized" });
});