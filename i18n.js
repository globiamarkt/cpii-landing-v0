/**
 * ================================================================================
 *   ARCHIVO:  i18n.js
 *   VERSIÓN:  2.0.0
 *   FECHA:    2026-02-17
 *   PROPÓSITO: Motor de internacionalización CPII. Diccionario completo para
 *              4 idiomas (PT / ES / EN / FR). Compatible con todos los archivos
 *              del proyecto que usen atributos data-i18n.
 *   AUTOR:    Claude Sonnet 4.6 — Protocolo Cartografía Quirúrgica v3.1
 *
 *   ÍNDICE DE CLAVES:
 *   ├── nav.*          Navegación principal
 *   ├── btn.*          Botones CTA globales
 *   ├── hero.*         Sección hero (badge, título 3 nodos, párrafo)
 *   ├── preview.*      Preview card patrimonio
 *   ├── section.*      Encabezados de secciones
 *   ├── access.*       Sección "Tres Vías de Acceso" (cards)
 *   ├── cta.*          Sección CTA final
 *   ├── footer.*       Pie de página
 *
 *   USO:
 *   · Añadir <script src="i18n.js"></script> en el <head> de cada página
 *   · El selector de idioma debe tener id="lang-selector"
 *   · Elementos traducibles: <elem data-i18n="clave">texto por defecto</elem>
 *   · Idioma por defecto si no hay nada en localStorage: "pt"
 *   · Para añadir claves: añadir en los 4 bloques de idioma simultáneamente
 * ================================================================================
 */

const translations = {

    // ══════════════════════════════════════════════════════════ PORTUGUÊS (PT) ══
    pt: {
        // Navegación
        "nav.inicio": "Início",
        "nav.simulador": "Simulador",
        "nav.como_funciona": "Como Funciona",
        "nav.webinars": "Webinars",
        "nav.privacy": "Privacidade",
        "nav.terms": "Termos",

        // Botones globales
        "btn.acceder": "Aceder",
        "btn.solicitar": "Solicitar Acesso",
        "btn.simulador": "Ver Simulação",

        // Hero
        "hero.badge": "Clube Privado de Investimento",
        "hero.title.main": "Construa o seu",
        "hero.title.highlight": "Património",
        "hero.title.suffix": "com Investimento Inteligente",
        "hero.p": "Aceda a oportunidades exclusivas de investimento imobiliário de alto rendimento. Una-se a uma rede de investidores seletos e aproveite o poder do Revenue Share para acelerar o seu caminho para a Autofinanciação.",

        // Preview card
        "preview.label": "Património Projetado",
        "preview.subtitle": "Com 50€/mês + Rede Nível 1",
        "preview.row1": "Poupança Pessoal",
        "preview.row2": "Revenue Share (Rede)",
        "preview.row3": "Rendimento Investimento",
        "preview.autofinance": "Autofinanciamento: Mês 12",
        "preview.autofinance.sub": "Património > Poupança Acumulada",

        // Sección acceso
        "section.access.title": "Três Vias de Acesso",
        "section.access.subtitle": "Escolha o perfil que melhor se adapta aos seus objetivos financeiros e capacidades",

        // Cards — Inversor
        "card.inversor.badge": "Mais Popular",
        "card.inversor.title": "Investidor",
        "card.inversor.subtitle": "Construa património a partir de 100€",
        "card.inversor.price.suffix": "/inicial",
        "card.inversor.price.alt": "ou 50€/mês recorrente",
        "card.inversor.f1": "Acesso a Janelas de Investimento (Tier A e B)",
        "card.inversor.f2": "Revenue Share até Nível 3",
        "card.inversor.f3": "Rentabilidade: 8-20% APY",
        "card.inversor.f4": "Dashboard de acompanhamento",
        "card.inversor.cta": "Quero Ser Investidor",

        // Cards — Promotor
        "card.promotor.title": "Promotor / Agente",
        "card.promotor.subtitle": "Capture ativos off-market",
        "card.promotor.price": "Rede",
        "card.promotor.price.alt": "Acesso por networking",
        "card.promotor.f1": "Comissões por captação de ativos",
        "card.promotor.f2": "Revenue Share na sua rede",
        "card.promotor.f3": "Ferramentas de prospeção",
        "card.promotor.f4": "Formação especializada",
        "card.promotor.cta": "Quero Ser Promotor",

        // Cards — Gestor
        "card.gestor.badge": "Elite",
        "card.gestor.title": "Gestor",
        "card.gestor.subtitle": "Liderança estratégica",
        "card.gestor.price.alt": "em 2 anos de volume",
        "card.gestor.f1": "Revenue Share alargado",
        "card.gestor.f2": "Bónus por marcos de equipa",
        "card.gestor.f3": "Acesso a deals premium",
        "card.gestor.f4": "Mentoria executiva",
        "card.gestor.cta": "Quero Ser Gestor",

        // CTA final
        "cta.title": "Pronto para Começar?",
        "cta.subtitle": "Complete o seu pedido de acesso e a nossa equipa entrará em contacto em 24-48 horas para validar o seu perfil",
        "cta.btn.primary": "Solicitar Acesso Agora",
        "cta.btn.secondary": "Simular o meu Património",

        // Footer
        "footer.about": "Clube Privado de Investimento Imobiliário. Construindo património sustentável desde 2024.",
        "footer.links.title": "Links",
        "footer.links.red": "Minha Rede",
        "footer.legal.title": "Legal",
        "footer.legal.support": "Suporte",
        "footer.copy": "© 2026 CPII Portugal. Sistema Verdent.",
    },

    // ══════════════════════════════════════════════════════════════ ESPAÑOL (ES) ══
    es: {
        // Navegación
        "nav.inicio": "Inicio",
        "nav.simulador": "Simulador",
        "nav.como_funciona": "Cómo Funciona",
        "nav.webinars": "Webinars",
        "nav.privacy": "Privacidad",
        "nav.terms": "Términos",

        // Botones globales
        "btn.acceder": "Acceder",
        "btn.solicitar": "Solicitar Acceso",
        "btn.simulador": "Ver Simulación",

        // Hero
        "hero.badge": "Club Privado de Inversión",
        "hero.title.main": "Construye tu",
        "hero.title.highlight": "Patrimonio",
        "hero.title.suffix": "con Inversión Inteligente",
        "hero.p": "Accede a oportunidades exclusivas de inversión inmobiliaria de alto rendimiento. Únete a una red de inversores selectos y aprovecha el poder del Revenue Share para acelerar tu camino hacia la Autofinanciación.",

        // Preview card
        "preview.label": "Patrimonio Proyectado",
        "preview.subtitle": "Con 50€/mes + Red Nivel 1",
        "preview.row1": "Ahorro Personal",
        "preview.row2": "Revenue Share (Red)",
        "preview.row3": "Rendimiento Inversión",
        "preview.autofinance": "Autofinanciación: Mes 12",
        "preview.autofinance.sub": "Patrimonio > Ahorro Acumulado",

        // Sección acceso
        "section.access.title": "Tres Vías de Acceso",
        "section.access.subtitle": "Elige el perfil que mejor se adapte a tus objetivos financieros y capacidades",

        // Cards — Inversor
        "card.inversor.badge": "Más Popular",
        "card.inversor.title": "Inversor",
        "card.inversor.subtitle": "Construye patrimonio desde 100€",
        "card.inversor.price.suffix": "/inicial",
        "card.inversor.price.alt": "o 50€/mes recurrente",
        "card.inversor.f1": "Acceso a Ventanas de Inversión (Tier A y B)",
        "card.inversor.f2": "Revenue Share hasta Nivel 3",
        "card.inversor.f3": "Rentabilidad: 8-20% APY",
        "card.inversor.f4": "Dashboard de seguimiento",
        "card.inversor.cta": "Quiero Ser Inversor",

        // Cards — Promotor
        "card.promotor.title": "Promotor / Agente",
        "card.promotor.subtitle": "Captura activos off-market",
        "card.promotor.price": "Red",
        "card.promotor.price.alt": "Acceso por networking",
        "card.promotor.f1": "Comisiones por captación de activos",
        "card.promotor.f2": "Revenue Share en tu red",
        "card.promotor.f3": "Herramientas de prospección",
        "card.promotor.f4": "Formación especializada",
        "card.promotor.cta": "Quiero Ser Promotor",

        // Cards — Gestor
        "card.gestor.badge": "Elite",
        "card.gestor.title": "Gestor",
        "card.gestor.subtitle": "Liderazgo estratégico",
        "card.gestor.price.alt": "en 2 años de volumen",
        "card.gestor.f1": "Revenue Share ampliado",
        "card.gestor.f2": "Bonos por hitos de equipo",
        "card.gestor.f3": "Acceso a deals premium",
        "card.gestor.f4": "Mentoría ejecutiva",
        "card.gestor.cta": "Quiero Ser Gestor",

        // CTA final
        "cta.title": "¿Listo para Empezar?",
        "cta.subtitle": "Completa tu solicitud de acceso y nuestro equipo te contactará en 24-48 horas para validar tu perfil",
        "cta.btn.primary": "Solicitar Acceso Ahora",
        "cta.btn.secondary": "Simular mi Patrimonio",

        // Footer
        "footer.about": "Club Privado de Inversión Inmobiliaria. Construyendo patrimonio sostenible desde 2024.",
        "footer.links.title": "Enlaces",
        "footer.links.red": "Mi Red",
        "footer.legal.title": "Legal",
        "footer.legal.support": "Soporte",
        "footer.copy": "© 2026 CPII España. Sistema Verdent.",
    },

    // ══════════════════════════════════════════════════════════════ ENGLISH (EN) ══
    en: {
        // Navigation
        "nav.inicio": "Home",
        "nav.simulador": "Simulator",
        "nav.como_funciona": "How It Works",
        "nav.webinars": "Webinars",
        "nav.privacy": "Privacy",
        "nav.terms": "Terms",

        // Global buttons
        "btn.acceder": "Login",
        "btn.solicitar": "Request Access",
        "btn.simulador": "View Simulation",

        // Hero
        "hero.badge": "Private Investment Club",
        "hero.title.main": "Build your",
        "hero.title.highlight": "Wealth",
        "hero.title.suffix": "with Smart Investment",
        "hero.p": "Access exclusive high-yield real estate investment opportunities. Join a network of elite investors and leverage Revenue Share to accelerate your path to financial freedom.",

        // Preview card
        "preview.label": "Projected Wealth",
        "preview.subtitle": "With €50/month + Level 1 Network",
        "preview.row1": "Personal Savings",
        "preview.row2": "Revenue Share (Network)",
        "preview.row3": "Investment Returns",
        "preview.autofinance": "Self-funding: Month 12",
        "preview.autofinance.sub": "Wealth > Accumulated Savings",

        // Access section
        "section.access.title": "Three Access Paths",
        "section.access.subtitle": "Choose the profile that best fits your financial goals and capabilities",

        // Cards — Investor
        "card.inversor.badge": "Most Popular",
        "card.inversor.title": "Investor",
        "card.inversor.subtitle": "Build wealth from €100",
        "card.inversor.price.suffix": "/initial",
        "card.inversor.price.alt": "or €50/month recurring",
        "card.inversor.f1": "Access to Investment Windows (Tier A & B)",
        "card.inversor.f2": "Revenue Share up to Level 3",
        "card.inversor.f3": "Returns: 8-20% APY",
        "card.inversor.f4": "Tracking dashboard",
        "card.inversor.cta": "Become an Investor",

        // Cards — Promoter
        "card.promotor.title": "Promoter / Agent",
        "card.promotor.subtitle": "Source off-market assets",
        "card.promotor.price": "Network",
        "card.promotor.price.alt": "Access by networking",
        "card.promotor.f1": "Commissions for asset sourcing",
        "card.promotor.f2": "Revenue Share in your network",
        "card.promotor.f3": "Prospecting tools",
        "card.promotor.f4": "Specialized training",
        "card.promotor.cta": "Become a Promoter",

        // Cards — Manager
        "card.gestor.badge": "Elite",
        "card.gestor.title": "Manager",
        "card.gestor.subtitle": "Strategic leadership",
        "card.gestor.price.alt": "in 2 years of volume",
        "card.gestor.f1": "Extended Revenue Share",
        "card.gestor.f2": "Team milestone bonuses",
        "card.gestor.f3": "Access to premium deals",
        "card.gestor.f4": "Executive mentoring",
        "card.gestor.cta": "Become a Manager",

        // Final CTA
        "cta.title": "Ready to Start?",
        "cta.subtitle": "Complete your access request and our team will contact you within 24-48 hours to validate your profile",
        "cta.btn.primary": "Request Access Now",
        "cta.btn.secondary": "Simulate my Wealth",

        // Footer
        "footer.about": "Private Real Estate Investment Club. Building sustainable wealth since 2024.",
        "footer.links.title": "Links",
        "footer.links.red": "My Network",
        "footer.legal.title": "Legal",
        "footer.legal.support": "Support",
        "footer.copy": "© 2026 CPII Global. Verdent System.",
    },

    // ══════════════════════════════════════════════════════════════ FRANÇAIS (FR) ══
    fr: {
        // Navigation
        "nav.inicio": "Accueil",
        "nav.simulador": "Simulateur",
        "nav.como_funciona": "Comment ça marche",
        "nav.webinars": "Webinaires",
        "nav.privacy": "Confidentialité",
        "nav.terms": "Conditions",

        // Boutons globaux
        "btn.acceder": "Accéder",
        "btn.solicitar": "Demander l'accès",
        "btn.simulador": "Voir la simulation",

        // Hero
        "hero.badge": "Club d'Investissement Privé",
        "hero.title.main": "Construisez votre",
        "hero.title.highlight": "Patrimoine",
        "hero.title.suffix": "avec l'Investissement Intelligent",
        "hero.p": "Accédez à des opportunités exclusives d'investissement immobilier à haut rendement. Rejoignez un réseau d'investisseurs d'élite et tirez parti du Revenue Share pour accélérer votre indépendance financière.",

        // Preview card
        "preview.label": "Patrimoine Projeté",
        "preview.subtitle": "Avec 50€/mois + Réseau Niveau 1",
        "preview.row1": "Épargne Personnelle",
        "preview.row2": "Revenue Share (Réseau)",
        "preview.row3": "Rendement Investissement",
        "preview.autofinance": "Auto-financement: Mois 12",
        "preview.autofinance.sub": "Patrimoine > Épargne Cumulée",

        // Section accès
        "section.access.title": "Trois Voies d'Accès",
        "section.access.subtitle": "Choisissez le profil qui correspond le mieux à vos objectifs financiers et à vos capacités",

        // Cards — Investisseur
        "card.inversor.badge": "Le Plus Populaire",
        "card.inversor.title": "Investisseur",
        "card.inversor.subtitle": "Constituez un patrimoine à partir de 100€",
        "card.inversor.price.suffix": "/initial",
        "card.inversor.price.alt": "ou 50€/mois récurrent",
        "card.inversor.f1": "Accès aux Fenêtres d'Investissement (Tier A et B)",
        "card.inversor.f2": "Revenue Share jusqu'au Niveau 3",
        "card.inversor.f3": "Rendement: 8-20% APY",
        "card.inversor.f4": "Tableau de bord de suivi",
        "card.inversor.cta": "Devenir Investisseur",

        // Cards — Promoteur
        "card.promotor.title": "Promoteur / Agent",
        "card.promotor.subtitle": "Sourcez des actifs off-market",
        "card.promotor.price": "Réseau",
        "card.promotor.price.alt": "Accès par networking",
        "card.promotor.f1": "Commissions pour l'apport d'actifs",
        "card.promotor.f2": "Revenue Share dans votre réseau",
        "card.promotor.f3": "Outils de prospection",
        "card.promotor.f4": "Formation spécialisée",
        "card.promotor.cta": "Devenir Promoteur",

        // Cards — Gestionnaire
        "card.gestor.badge": "Élite",
        "card.gestor.title": "Gestionnaire",
        "card.gestor.subtitle": "Leadership stratégique",
        "card.gestor.price.alt": "en 2 ans de volume",
        "card.gestor.f1": "Revenue Share élargi",
        "card.gestor.f2": "Bonus par jalons d'équipe",
        "card.gestor.f3": "Accès aux deals premium",
        "card.gestor.f4": "Mentorat exécutif",
        "card.gestor.cta": "Devenir Gestionnaire",

        // CTA final
        "cta.title": "Prêt à Commencer?",
        "cta.subtitle": "Complétez votre demande d'accès et notre équipe vous contactera dans 24-48 heures pour valider votre profil",
        "cta.btn.primary": "Demander l'accès maintenant",
        "cta.btn.secondary": "Simuler mon Patrimoine",

        // Footer
        "footer.about": "Club Privé d'Investissement Immobilier. Construire un patrimoine durable depuis 2024.",
        "footer.links.title": "Liens",
        "footer.links.red": "Mon Réseau",
        "footer.legal.title": "Légal",
        "footer.legal.support": "Support",
        "footer.copy": "© 2026 CPII France. Système Verdent.",
    },

};

// ══════════════════════════════════════════════════════ MOTOR DE TRADUCCIÓN ══

/**
 * Aplica las traducciones del idioma dado a todos los elementos [data-i18n].
 * Usa textContent (nunca innerHTML) — el estilo visual lo gestiona el HTML.
 * @param {string} lang — Código de idioma: "pt" | "es" | "en" | "fr"
 */
function applyTranslations(lang) {
    const dict = translations[lang] || translations["pt"];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });
    document.documentElement.lang = lang;
}

/**
 * Cambia el idioma, lo persiste en localStorage y aplica las traducciones
 * sin recargar la página.
 * @param {string} lang — Código de idioma: "pt" | "es" | "en" | "fr"
 */
function setLanguage(lang) {
    localStorage.setItem("cpii_lang", lang);
    applyTranslations(lang);
}

// ══════════════════════════════════════════════════════════════ INICIALIZACIÓN ══
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("cpii_lang") || "pt";

    // Sincronizar el selector si existe en la página
    const selector = document.getElementById("lang-selector");
    if (selector) selector.value = savedLang;

    applyTranslations(savedLang);
});