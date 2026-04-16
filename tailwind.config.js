/**
 * Archivo: tailwind.config.js
 * Versión: 3.0 (Unified Design System)
 * Propósito: Fuente única de verdad para tokens de diseño y directivas del CLI.
 * Índice Maestro: [SEC-01] Configuración Global
 */

module.exports = {
    darkMode: "class",
    // [SEC-01-A] Protección contra purga: Escanear HTML y JS (vital para i18n.js)
    content: ["./*.html", "./*.js", "./js/**/*.js"],
    theme: {
        extend: {
            colors: {
                // --- Paleta Principal CPII ---
                primary: "#C1A85D",
                "primary-hover": "#A8924D",
                "background-dark": "#161513",
                "card-dark": "#1e1b14",
                "border-dark": "#35332c",
                "text-secondary": "#b2afa3",

                // --- Paleta Formularios (Fusionada) ---
                gold: "#C1A85D",
                "gold-light": "#D4BC7A",
                "gold-hover": "#A8924D",
                "gold-dim": "rgba(193,168,93,0.12)",
                carbon: "#131313",
                "carbon-mid": "#1C1C1C",
                "dark-grey": "#282828",
                "input-bg": "#222222",
                "text-main": "#F5F0E8",
                "text-muted": "#8A8A8A",
                "text-dim": "#555555",
                "border-sub": "rgba(255,255,255,0.07)",
            },
            fontFamily: {
                display: ["Playfair Display", "Georgia", "serif"],
                body: ["Manrope", "system-ui", "sans-serif"],
            },
            boxShadow: {
                gold: "0 0 30px rgba(193,168,93,0.18)",
                "gold-sm": "0 0 12px rgba(193,168,93,0.12)",
                card: "0 8px 48px rgba(0,0,0,0.55)",
            },
            // Absorción de animaciones de access-form.css
            keyframes: {
                fadeUp: {
                    from: { opacity: "0", transform: "translateY(18px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                spin: {
                    to: { transform: "rotate(360deg)" },
                },
                growLine: {
                    to: { height: "100px" },
                },
            },
            animation: {
                "fade-up": "fadeUp 0.55s ease both",
                "spin-slow": "spin 0.7s linear infinite",
                "grow-line": "growLine 1.2s ease 0.6s forwards",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/container-queries"),
    ],
};