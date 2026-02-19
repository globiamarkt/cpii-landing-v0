/**
 * ================================================================================
 * ARCHIVO:  i18n.js
 * VERSIÓN:  2.1.0
 * FECHA:    2026-02-18
 * PROPÓSITO: Motor de internacionalización CPII. Diccionario completo para
 * 4 idiomas (PT / ES / EN / FR). Compatible con todos los archivos
 * del proyecto que usen atributos data-i18n.
 * [v2.1.0]: Integración claves eXp Commercial Group + Parche de 
 * seguridad XSS (renderizado HTML controlado vía data-i18n-html).
 * AUTORES:  Claude Sonnet 4.6 (Base) / Gemini 3 Pro (Parche XSS & Transposición)
 *
 * ÍNDICE DE CLAVES [SEC-01]:
 * ├── nav.* Navegación principal
 * ├── btn.* Botones CTA globales
 * ├── hero.* Sección hero (badge, título 3 nodos, párrafo)
 * ├── preview.* Preview card patrimonio
 * ├── section.* Encabezados de secciones
 * ├── access.* Sección "Tres Vías de Acceso" (cards)
 * ├── team.* Sección "Equipo Comercial" (eXp Commercial Group)
 * ├── cta.* Sección CTA final
 * ├── footer.* Pie de página
 *
 * USO MOTOR [SEC-02]:
 * · Añadir <script src="i18n.js"></script> en el <head> de cada página
 * · El selector de idioma debe tener id="lang-selector"
 * · Nodos de texto: <elem data-i18n="clave">texto por defecto</elem>
 * · Nodos con HTML (Seguridad): <elem data-i18n="clave" data-i18n-html="true"></elem>
 * ================================================================================
 */

const translations = {

    // ══════════════════════════════════════════════════════════ PORTUGUÊS (PT) ══
    pt: {
        "nav.inicio": "Início",
        "nav.grupo_comercial": "Grupo Comercial",
        "nav.simulador": "Simulador",
        "nav.como_funciona": "Como Funciona",
        "nav.webinars": "Webinars",
        "nav.privacy": "Privacidade",
        "nav.terms": "Termos",
        "btn.acceder": "Aceder",
        "btn.solicitar": "Solicitar Acesso",
        "btn.simulador": "Ver Simulação",
        "hero.badge": "Clube Privado de Investimento",
        "hero.title.main": "Construa o seu",
        "hero.title.highlight": "Património",
        "hero.title.suffix": "com Investimento Inteligente",
        "hero.p": "Aceda a oportunidades exclusivas de investimento imobiliário de alto rendimento. Una-se a uma rede de investidores seletos e aproveite o poder do Revenue Share para acelerar o seu caminho para a Autofinanciação.",
        "preview.label": "Património Projetado",
        "preview.subtitle": "Com 50€/mês + Rede Nível 1",
        "preview.row1": "Poupança Pessoal",
        "preview.row2": "Revenue Share (Rede)",
        "preview.row3": "Rendimento Investimento",
        "preview.autofinance": "Autofinanciamento: Mês 12",
        "preview.autofinance.sub": "Património > Poupança Acumulada",
        "section.access.title": "Três Vias de Acesso",
        "section.access.subtitle": "Escolha o perfil que melhor se adapta aos seus objetivos financeiros e capacidades",
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
        "card.promotor.title": "Promotor / Agente",
        "card.promotor.subtitle": "Capture ativos off-market",
        "card.promotor.price": "Rede",
        "card.promotor.price.alt": "Acesso por networking",
        "card.promotor.f1": "Comissões por captação de ativos",
        "card.promotor.f2": "Revenue Share na sua rede",
        "card.promotor.f3": "Ferramentas de prospeção",
        "card.promotor.f4": "Formação especializada",
        "card.promotor.cta": "Quero Ser Promotor",
        "card.gestor.badge": "Elite",
        "card.gestor.title": "Gestor",
        "card.gestor.subtitle": "Liderança estratégica",
        "card.gestor.price.alt": "em 2 anos de volume",
        "card.gestor.f1": "Revenue Share alargado",
        "card.gestor.f2": "Bónus por marcos de equipa",
        "card.gestor.f3": "Acesso a deals premium",
        "card.gestor.f4": "Mentoria executiva",
        "card.gestor.cta": "Quero Ser Gestor",
        "cta.title": "Pronto para Começar?",
        "cta.subtitle": "Complete o seu pedido de acesso e a nossa equipa entrará em contacto em 24-48 horas para validar o seu perfil",
        "cta.btn.primary": "Solicitar Acesso Agora",
        "cta.btn.secondary": "Simular o meu Património",
        "footer.about": "Clube Privado de Investimento Imobiliário. Construindo património sustentável desde 2024.",
        "footer.links.title": "Links",
        "footer.links.red": "Minha Rede",
        "footer.legal.title": "Legal",
        "footer.legal.support": "Suporte",
        "footer.copy": "© 2026 CPII Portugal. Sistema Verdent.",
        // Team Section
        "team.badge": "eXp Portugal Commercial Group",
        "team.title.main": "O Grupo Comercial mais",
        "team.title.highlight": "estruturado de Portugal",
        "team.subtitle": "Não vendemos propriedades — atraímos investimento estratégico. Uma fórmula de sucesso alinhada com os padrões internacionais da eXp Commercial USA e KYC/AML.",
        "team.stat1.value": "+25%",
        "team.stat1.label": "da faturação total eXp Portugal",
        "team.stat2.value": "7/17",
        "team.stat2.label": "CAPs do país no nosso grupo",
        "team.stat3.value": "3+",
        "team.stat3.label": "anos de metodologia provada",
        "team.da.role": "Agente Senior & Founder",
        "team.da.badge1": "Agente do Ano 2025",
        "team.da.badge2": "eXp Global Autorizado",
        "team.da.badge3": "Exclusividade Comercial PT",
        "team.da.bio": "Fundador e líder estratégico do grupo. Responsável por mais de <strong class=\"text-white\">25% da faturação total da eXp Portugal</strong>, com contrato de exclusividade assinado para a área Comercial. Mentor de referência e guardião da metodologia de captação estruturada no mercado ibérico.",
        "team.da.focus.label": "Foco:",
        "team.da.focus.text": "Liderança · Captação Senior · Estratégia de Mercado",
        "team.cb.role": "Senior Agent & CTO",
        "team.cb.badge1": "Chief Technology Officer",
        "team.cb.badge2": "KYC/AML Specialist",
        "team.cb.badge3": "Co-fundador CPII",
        "team.cb.bio": "Arquitecto digital do grupo. Combina experiência em mercados internacionais de commodities com o desenvolvimento do <strong class=\"text-white\">CRM proprietário e da plataforma CPII</strong>. Especialista em compliance internacional e atração de investidores estratégicos à escala global.",
        "team.cb.focus.label": "Foco:",
        "team.cb.focus.text": "Tecnologia · Atração de Investidores · Compliance Internacional",
        "team.cta.pre": "Acesso condicionado aos critérios do grupo",
        "team.cta.title.main": "Conheça a metodologia",
        "team.cta.title.highlight": "e os elementos nucleares",
        "team.cta.subtitle": "Aceda aos perfis completos do grupo, à metodologia de captação estruturada e aos princípios de compliance internacional que diferenciam a eXp Portugal Commercial Group.",
        "team.cta.btn.primary": "Conhecer o Grupo Comercial",
        "team.cta.btn.secondary": "Solicitar Acesso Agora"
    },

    // ══════════════════════════════════════════════════════════════ ESPAÑOL (ES) ══
    es: {
        "nav.inicio": "Inicio",
        "nav.grupo_comercial": "Grupo Comercial",
        "nav.simulador": "Simulador",
        "nav.como_funciona": "Cómo Funciona",
        "nav.webinars": "Webinars",
        "nav.privacy": "Privacidad",
        "nav.terms": "Términos",
        "btn.acceder": "Acceder",
        "btn.solicitar": "Solicitar Acceso",
        "btn.simulador": "Ver Simulación",
        "hero.badge": "Club Privado de Inversión",
        "hero.title.main": "Construye tu",
        "hero.title.highlight": "Patrimonio",
        "hero.title.suffix": "con Inversión Inteligente",
        "hero.p": "Accede a oportunidades exclusivas de inversión inmobiliaria de alto rendimiento. Únete a una red de inversores selectos y aprovecha el poder del Revenue Share para acelerar tu camino hacia la Autofinanciación.",
        "preview.label": "Patrimonio Proyectado",
        "preview.subtitle": "Con 50€/mes + Red Nivel 1",
        "preview.row1": "Ahorro Personal",
        "preview.row2": "Revenue Share (Red)",
        "preview.row3": "Rendimiento Inversión",
        "preview.autofinance": "Autofinanciación: Mes 12",
        "preview.autofinance.sub": "Patrimonio > Ahorro Acumulado",
        "section.access.title": "Tres Vías de Acceso",
        "section.access.subtitle": "Elige el perfil que mejor se adapte a tus objetivos financieros y capacidades",
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
        "card.promotor.title": "Promotor / Agente",
        "card.promotor.subtitle": "Captura activos off-market",
        "card.promotor.price": "Red",
        "card.promotor.price.alt": "Acceso por networking",
        "card.promotor.f1": "Comisiones por captación de activos",
        "card.promotor.f2": "Revenue Share en tu red",
        "card.promotor.f3": "Herramientas de prospección",
        "card.promotor.f4": "Formación especializada",
        "card.promotor.cta": "Quiero Ser Promotor",
        "card.gestor.badge": "Elite",
        "card.gestor.title": "Gestor",
        "card.gestor.subtitle": "Liderazgo estratégico",
        "card.gestor.price.alt": "en 2 años de volumen",
        "card.gestor.f1": "Revenue Share ampliado",
        "card.gestor.f2": "Bonos por hitos de equipo",
        "card.gestor.f3": "Acceso a deals premium",
        "card.gestor.f4": "Mentoría ejecutiva",
        "card.gestor.cta": "Quiero Ser Gestor",
        "cta.title": "¿Listo para Empezar?",
        "cta.subtitle": "Completa tu solicitud de acceso y nuestro equipo te contactará en 24-48 horas para validar tu perfil",
        "cta.btn.primary": "Solicitar Acceso Ahora",
        "cta.btn.secondary": "Simular mi Patrimonio",
        "footer.about": "Club Privado de Inversión Inmobiliaria. Construyendo patrimonio sostenible desde 2024.",
        "footer.links.title": "Enlaces",
        "footer.links.red": "Mi Red",
        "footer.legal.title": "Legal",
        "footer.legal.support": "Soporte",
        "footer.copy": "© 2026 CPII España. Sistema Verdent.",
        // Team Section
        "team.badge": "eXp Portugal Commercial Group",
        "team.title.main": "El Grupo Comercial más",
        "team.title.highlight": "estructurado de Portugal",
        "team.subtitle": "No vendemos propiedades — atraemos inversión estratégica. Una fórmula de éxito alineada con los estándares internacionales de eXp Commercial USA y KYC/AML.",
        "team.stat1.value": "+25%",
        "team.stat1.label": "de la facturación total eXp Portugal",
        "team.stat2.value": "7/17",
        "team.stat2.label": "CAPs del país en nuestro grupo",
        "team.stat3.value": "3+",
        "team.stat3.label": "años de metodología probada",
        "team.da.role": "Agente Senior & Fundador",
        "team.da.badge1": "Agente del Año 2025",
        "team.da.badge2": "eXp Global Autorizado",
        "team.da.badge3": "Exclusividad Comercial PT",
        "team.da.bio": "Fundador y líder estratégico del grupo. Responsable de más del <strong class=\"text-white\">25% de la facturación total de eXp Portugal</strong>, con contrato de exclusividad firmado para el área Comercial. Mentor de referencia y guardián de la metodología en el mercado ibérico.",
        "team.da.focus.label": "Foco:",
        "team.da.focus.text": "Liderazgo · Captación Senior · Estrategia de Mercado",
        "team.cb.role": "Senior Agent & CTO",
        "team.cb.badge1": "Chief Technology Officer",
        "team.cb.badge2": "Especialista KYC/AML",
        "team.cb.badge3": "Co-fundador CPII",
        "team.cb.bio": "Arquitecto digital del grupo. Combina experiencia en mercados internacionales de commodities con el desarrollo del <strong class=\"text-white\">CRM propietario y la plataforma CPII</strong>. Especialista en compliance internacional y atracción de inversores estratégicos.",
        "team.cb.focus.label": "Foco:",
        "team.cb.focus.text": "Tecnología · Atracción de Inversores · Compliance Internacional",
        "team.cta.pre": "Acceso condicionado a los criterios del grupo",
        "team.cta.title.main": "Conoce la metodología",
        "team.cta.title.highlight": "y los elementos nucleares",
        "team.cta.subtitle": "Accede a los perfiles completos del grupo, la metodología de captación estructurada y los principios de compliance internacional que diferencian a eXp Portugal Commercial Group.",
        "team.cta.btn.primary": "Conocer el Grupo Comercial",
        "team.cta.btn.secondary": "Solicitar Acceso Ahora"
    },

    // ══════════════════════════════════════════════════════════════ ENGLISH (EN) ══
    en: {
        "nav.inicio": "Home",
        "nav.grupo_comercial": "Commercial Group",
        "nav.simulador": "Simulator",
        "nav.como_funciona": "How It Works",
        "nav.webinars": "Webinars",
        "nav.privacy": "Privacy",
        "nav.terms": "Terms",
        "btn.acceder": "Login",
        "btn.solicitar": "Request Access",
        "btn.simulador": "View Simulation",
        "hero.badge": "Private Investment Club",
        "hero.title.main": "Build your",
        "hero.title.highlight": "Wealth",
        "hero.title.suffix": "with Smart Investment",
        "hero.p": "Access exclusive high-yield real estate investment opportunities. Join a network of elite investors and leverage Revenue Share to accelerate your path to financial freedom.",
        "preview.label": "Projected Wealth",
        "preview.subtitle": "With €50/month + Level 1 Network",
        "preview.row1": "Personal Savings",
        "preview.row2": "Revenue Share (Network)",
        "preview.row3": "Investment Returns",
        "preview.autofinance": "Self-funding: Month 12",
        "preview.autofinance.sub": "Wealth > Accumulated Savings",
        "section.access.title": "Three Access Paths",
        "section.access.subtitle": "Choose the profile that best fits your financial goals and capabilities",
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
        "card.promotor.title": "Promoter / Agent",
        "card.promotor.subtitle": "Source off-market assets",
        "card.promotor.price": "Network",
        "card.promotor.price.alt": "Access by networking",
        "card.promotor.f1": "Commissions for asset sourcing",
        "card.promotor.f2": "Revenue Share in your network",
        "card.promotor.f3": "Prospecting tools",
        "card.promotor.f4": "Specialized training",
        "card.promotor.cta": "Become a Promoter",
        "card.gestor.badge": "Elite",
        "card.gestor.title": "Manager",
        "card.gestor.subtitle": "Strategic leadership",
        "card.gestor.price.alt": "in 2 years of volume",
        "card.gestor.f1": "Extended Revenue Share",
        "card.gestor.f2": "Team milestone bonuses",
        "card.gestor.f3": "Access to premium deals",
        "card.gestor.f4": "Executive mentoring",
        "card.gestor.cta": "Become a Manager",
        "cta.title": "Ready to Start?",
        "cta.subtitle": "Complete your access request and our team will contact you within 24-48 hours to validate your profile",
        "cta.btn.primary": "Request Access Now",
        "cta.btn.secondary": "Simulate my Wealth",
        "footer.about": "Private Real Estate Investment Club. Building sustainable wealth since 2024.",
        "footer.links.title": "Links",
        "footer.links.red": "My Network",
        "footer.legal.title": "Legal",
        "footer.legal.support": "Support",
        "footer.copy": "© 2026 CPII Global. Verdent System.",
        // Team Section
        "team.badge": "eXp Portugal Commercial Group",
        "team.title.main": "The most structured",
        "team.title.highlight": "Commercial Group in Portugal",
        "team.subtitle": "We don't sell properties — we attract strategic investment. A success formula aligned with eXp Commercial USA and KYC/AML international standards.",
        "team.stat1.value": "+25%",
        "team.stat1.label": "of total eXp Portugal revenue",
        "team.stat2.value": "7/17",
        "team.stat2.label": "country CAPs in our group",
        "team.stat3.value": "3+",
        "team.stat3.label": "years of proven methodology",
        "team.da.role": "Senior Agent & Founder",
        "team.da.badge1": "Agent of the Year 2025",
        "team.da.badge2": "eXp Global Authorized",
        "team.da.badge3": "Commercial Exclusivity PT",
        "team.da.bio": "Founder and strategic leader of the group. Responsible for over <strong class=\"text-white\">25% of total eXp Portugal revenue</strong>, with an exclusivity contract signed for the Commercial area. Reference mentor and guardian of the structured acquisition methodology.",
        "team.da.focus.label": "Focus:",
        "team.da.focus.text": "Leadership · Senior Acquisition · Market Strategy",
        "team.cb.role": "Senior Agent & CTO",
        "team.cb.badge1": "Chief Technology Officer",
        "team.cb.badge2": "KYC/AML Specialist",
        "team.cb.badge3": "CPII Co-founder",
        "team.cb.bio": "The group's digital architect. Combines international commodities market experience with the development of the <strong class=\"text-white\">proprietary CRM and CPII platform</strong>. Specialist in international compliance and global investor attraction.",
        "team.cb.focus.label": "Focus:",
        "team.cb.focus.text": "Technology · Investor Attraction · International Compliance",
        "team.cta.pre": "Access subject to group criteria",
        "team.cta.title.main": "Discover the methodology",
        "team.cta.title.highlight": "and the core elements",
        "team.cta.subtitle": "Access the complete team profiles, structured acquisition methodology and international compliance principles that set eXp Portugal Commercial Group apart.",
        "team.cta.btn.primary": "Meet the Commercial Group",
        "team.cta.btn.secondary": "Request Access Now"
    },

    // ══════════════════════════════════════════════════════════════ FRANÇAIS (FR) ══
    fr: {
        "nav.inicio": "Accueil",
        "nav.grupo_comercial": "Groupe Commercial",
        "nav.simulador": "Simulateur",
        "nav.como_funciona": "Comment ça marche",
        "nav.webinars": "Webinaires",
        "nav.privacy": "Confidentialité",
        "nav.terms": "Conditions",
        "btn.acceder": "Accéder",
        "btn.solicitar": "Demander l'accès",
        "btn.simulador": "Voir la simulation",
        "hero.badge": "Club d'Investissement Privé",
        "hero.title.main": "Construisez votre",
        "hero.title.highlight": "Patrimoine",
        "hero.title.suffix": "avec l'Investissement Intelligent",
        "hero.p": "Accédez à des opportunités exclusives d'investissement immobilier à haut rendement. Rejoignez un réseau d'investisseurs d'élite et tirez parti du Revenue Share pour accélérer votre indépendance financière.",
        "preview.label": "Patrimoine Projeté",
        "preview.subtitle": "Avec 50€/mois + Réseau Niveau 1",
        "preview.row1": "Épargne Personnelle",
        "preview.row2": "Revenue Share (Réseau)",
        "preview.row3": "Rendement Investissement",
        "preview.autofinance": "Auto-financement: Mois 12",
        "preview.autofinance.sub": "Patrimoine > Épargne Cumulée",
        "section.access.title": "Trois Voies d'Accès",
        "section.access.subtitle": "Choisissez le profil qui correspond le mieux à vos objectifs financiers et à vos capacités",
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
        "card.promotor.title": "Promoteur / Agent",
        "card.promotor.subtitle": "Sourcez des actifs off-market",
        "card.promotor.price": "Réseau",
        "card.promotor.price.alt": "Accès par networking",
        "card.promotor.f1": "Commissions pour l'apport d'actifs",
        "card.promotor.f2": "Revenue Share dans votre réseau",
        "card.promotor.f3": "Outils de prospection",
        "card.promotor.f4": "Formation spécialisée",
        "card.promotor.cta": "Devenir Promoteur",
        "card.gestor.badge": "Élite",
        "card.gestor.title": "Gestionnaire",
        "card.gestor.subtitle": "Leadership stratégique",
        "card.gestor.price.alt": "en 2 ans de volume",
        "card.gestor.f1": "Revenue Share élargi",
        "card.gestor.f2": "Bonus par jalons d'équipe",
        "card.gestor.f3": "Accès aux deals premium",
        "card.gestor.f4": "Mentorat exécutif",
        "card.gestor.cta": "Devenir Gestionnaire",
        "cta.title": "Prêt à Commencer?",
        "cta.subtitle": "Complétez votre demande d'accès et notre équipe vous contactera dans 24-48 heures pour valider votre profil",
        "cta.btn.primary": "Demander l'accès maintenant",
        "cta.btn.secondary": "Simuler mon Patrimoine",
        "footer.about": "Club Privé d'Investissement Immobilier. Construire un patrimoine durable depuis 2024.",
        "footer.links.title": "Liens",
        "footer.links.red": "Mon Réseau",
        "footer.legal.title": "Légal",
        "footer.legal.support": "Support",
        "footer.copy": "© 2026 CPII France. Système Verdent.",
        // Team Section
        "team.badge": "eXp Portugal Commercial Group",
        "team.title.main": "Le Groupe Commercial le plus",
        "team.title.highlight": "structuré du Portugal",
        "team.subtitle": "Nous ne vendons pas des propriétés — nous attirons des investissements stratégiques. Une formule alignée avec les normes eXp Commercial USA et KYC/AML.",
        "team.stat1.value": "+25%",
        "team.stat1.label": "du chiffre d'affaires total eXp Portugal",
        "team.stat2.value": "7/17",
        "team.stat2.label": "CAPs du pays dans notre groupe",
        "team.stat3.value": "3+",
        "team.stat3.label": "ans de méthodologie éprouvée",
        "team.da.role": "Agent Senior & Fondateur",
        "team.da.badge1": "Agent de l'Année 2025",
        "team.da.badge2": "eXp Global Autorisé",
        "team.da.badge3": "Exclusivité Commerciale PT",
        "team.da.bio": "Fondateur et leader stratégique du groupe. Responsable de plus de <strong class=\"text-white\">25% du chiffre d'affaires total d'eXp Portugal</strong>, avec un contrat d'exclusivité signé pour le domaine Commercial.",
        "team.da.focus.label": "Focus:",
        "team.da.focus.text": "Leadership · Captation Senior · Stratégie de Marché",
        "team.cb.role": "Agent Senior & CTO",
        "team.cb.badge1": "Chief Technology Officer",
        "team.cb.badge2": "Spécialiste KYC/AML",
        "team.cb.badge3": "Co-fondateur CPII",
        "team.cb.bio": "Architecte numérique du groupe. Combine une expérience des marchés internationaux de matières premières avec le développement du <strong class=\"text-white\">CRM propriétaire et de la plateforme CPII</strong>.",
        "team.cb.focus.label": "Focus:",
        "team.cb.focus.text": "Technologie · Attraction d'Investisseurs · Compliance International",
        "team.cta.pre": "Accès conditionné aux critères du groupe",
        "team.cta.title.main": "Découvrez la méthodologie",
        "team.cta.title.highlight": "et les éléments nucléaires",
        "team.cta.subtitle": "Accédez aux profils complets du groupe, à la méthodologie de captation structurée et aux principes de compliance international.",
        "team.cta.btn.primary": "Découvrir le Groupe Commercial",
        "team.cta.btn.secondary": "Demander l'Accès Maintenant"
    }

};

// ══════════════════════════════════════════════════════ MOTOR DE TRADUCCIÓN ══

/**
 * Aplica las traducciones gestionando seguridad HTML.
 * Usa innerHTML solo si data-i18n-html="true" está presente.
 */
function applyTranslations(lang) {
    const dict = translations[lang] || translations["pt"];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            // Parche de seguridad para renderizado HTML vs Texto plano
            const useHTML = el.getAttribute("data-i18n-html") === "true";
            if (useHTML) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
    document.documentElement.lang = lang;
}

/**
 * Cambia el idioma, lo persiste en localStorage y aplica las traducciones
 */
function setLanguage(lang) {
    localStorage.setItem("cpii_lang", lang);
    applyTranslations(lang);
}

// ══════════════════════════════════════════════════════════════ INICIALIZACIÓN ══
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("cpii_lang") || "pt";

    const selector = document.getElementById("lang-selector");
    if (selector) selector.value = savedLang;

    applyTranslations(savedLang);
});