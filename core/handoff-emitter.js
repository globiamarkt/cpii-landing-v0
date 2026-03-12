/**
 * CPII — handoff-emitter.js
 * Emisor Universal de Salto
 * Ruta: core/handoff-emitter.js
 *
 * Cargar SOLO en la Landing Page (el pasillo) antes del </body>.
 * Intercepta clics en enlaces internos del ecosistema
 * e inyecta la mochila de configuración en la URL de destino.
 *
 * Doctrina: R0 Sin hardcode | Delegación de eventos
 */
(function () {
    'use strict';

    // ── Dominios del ecosistema CPII ──────────────────────────
    // Añadir aquí cualquier nuevo dominio/subdominio futuro
    const ECOSYSTEM_DOMAINS = [
        'cpii.clubsocios.digital',
        'webinar.clubsocios.digital',
        'clubsocios.digital',
        'cpii-crm-v0-1.vercel.app'
    ];

    const KEYS = {
        lang: 'cpii:locale',
        theme: 'cpii:theme',
        timezone: 'cpii:timezone'
    };

    // ── Leer mochila actual del localStorage ──────────────────
    function getMochila() {
        return {
            lang: localStorage.getItem(KEYS.lang) || 'pt',
            theme: localStorage.getItem(KEYS.theme) || 'system',
            timezone: localStorage.getItem(KEYS.timezone) || 'Europe/Lisbon'
        };
    }

    // ── Verificar si enlace pertenece al ecosistema ───────────
    function isEcosystemLink(href) {
        try {
            const url = new URL(href, window.location.origin);
            return ECOSYSTEM_DOMAINS.some(domain => url.hostname === domain);
        } catch {
            return false;
        }
    }

    // ── Inyectar mochila en URL de destino ────────────────────
    function injectMochila(href) {
        const url = new URL(href, window.location.origin);
        const config = getMochila();

        url.searchParams.set('cpii_lang', config.lang);
        url.searchParams.set('cpii_theme', config.theme);
        url.searchParams.set('cpii_tz', config.timezone);

        return url.toString();
    }

    // ── Delegación de eventos — interceptar clics ─────────────
    document.addEventListener('click', function (e) {
        const anchor = e.target.closest('a[href]');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

        if (isEcosystemLink(href)) {
            e.preventDefault();
            const enrichedURL = injectMochila(href);

            // Fix Lead Architect — respetar target="_blank"
            const target = anchor.getAttribute('target');
            if (target === '_blank') {
                window.open(enrichedURL, '_blank');
            } else {
                window.location.href = enrichedURL;
            }
        }
    });

    // ── API pública para uso programático ─────────────────────
    window.__CPII__ = window.__CPII__ || {};
    window.__CPII__.emitter = { getMochila, injectMochila, isEcosystemLink };

})();