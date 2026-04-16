/**
 * CPII — at-bootstrapper.js
 * Receptor Universal de Configuración
 * Ruta: core/at-bootstrapper.js
 *
 * Colocar como PRIMER <script> en el <head> de TODAS las páginas del ecosistema.
 * Evita FOUC aplicando tema e idioma antes de que el DOM pinte.
 *
 * Doctrina: R0 Sin hardcode | R3 Sin hex | R4 data-i18n obligatorio
 */
(function () {
    'use strict';

    const KEYS = {
        lang: 'cpii:locale',
        theme: 'cpii:theme',
        timezone: 'cpii:timezone'
    };

    const ALLOWED_LANGS = ['pt', 'es', 'en', 'fr'];
    const ALLOWED_THEMES = ['light', 'dark', 'system'];

    // ── 1. Leer mochila desde URL ─────────────────────────────
    const params = new URLSearchParams(window.location.search);
    const incoming = {
        lang: params.get('cpii_lang'),
        theme: params.get('cpii_theme'),
        timezone: params.get('cpii_tz')
    };

    // ── 2. Validar y guardar en localStorage ──────────────────
    if (incoming.lang && ALLOWED_LANGS.includes(incoming.lang)) {
        localStorage.setItem(KEYS.lang, incoming.lang);
    }
    if (incoming.theme && ALLOWED_THEMES.includes(incoming.theme)) {
        localStorage.setItem(KEYS.theme, incoming.theme);
    }
    if (incoming.timezone) {
        // Fix Lead Architect — regex IANA corregido:
        // Acepta múltiples barras (America/Argentina/Buenos_Aires),
        // guiones (America/Port-au-Prince) y UTC sin barras
        if (/^[A-Za-z_]+(\/[A-Za-z_-]+)*$/.test(incoming.timezone)) {
            localStorage.setItem(KEYS.timezone, incoming.timezone);
        }
    }

    // ── 3. Leer configuración final ───────────────────────────
    // URL tiene prioridad sobre localStorage existente
    const lang = localStorage.getItem(KEYS.lang) || 'pt';
    const rawTheme = localStorage.getItem(KEYS.theme) || 'system';
    const timezone = localStorage.getItem(KEYS.timezone) || 'Europe/Lisbon';

    // Resolver "system" según preferencia del SO
    const resolvedTheme = rawTheme === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : rawTheme;

    // ── 4. Aplicar al DOM antes de pintar (anti-FOUC) ─────────
    const root = document.documentElement;
    root.setAttribute('data-theme', resolvedTheme);
    root.setAttribute('lang', lang);
    root.setAttribute('data-timezone', timezone);

    // ── 5. Limpiar URL sin recargar ───────────────────────────
    if (incoming.lang || incoming.theme || incoming.timezone) {
        const cleanParams = new URLSearchParams(window.location.search);
        cleanParams.delete('cpii_lang');
        cleanParams.delete('cpii_theme');
        cleanParams.delete('cpii_tz');

        const cleanSearch = cleanParams.toString();
        const cleanURL = window.location.pathname + (cleanSearch ? '?' + cleanSearch : '');
        window.history.replaceState(null, '', cleanURL);
    }

    // ── 6. Exponer config global para scripts posteriores ─────
    window.__CPII__ = window.__CPII__ || {};
    window.__CPII__.config = {
        lang,
        theme: rawTheme,
        resolvedTheme,
        timezone
    };

})();