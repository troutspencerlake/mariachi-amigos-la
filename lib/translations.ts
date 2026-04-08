// ============================================================
//  Mariachi Amigos LA — Bilingual Translations (EN / ES)
// ============================================================

export type Language = "en" | "es";

export const translations = {
  en: {
    // ── Navigation ──────────────────────────────────────────
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      gallery: "Gallery",
      booking: "Book Now",
      contact: "Contact",
      phone: "(323) 767-6657",
      langToggle: "Español",
    },

    // ── Hero ─────────────────────────────────────────────────
    hero: {
      headline: "Los Angeles' Most\nPassionate Mariachi",
      subheadline:
        "Bringing the heart and soul of Mexico to your most cherished celebrations.",
      cta1: "Book Now",
      cta2: "Call (323) 767-6657",
      scroll: "Scroll to explore",
      badge: "Serving LA Since 2005",
    },

    // ── About ────────────────────────────────────────────────
    about: {
      sectionLabel: "Our Story",
      title: "Music That Moves the Soul",
      bio1:
        "Mariachi Amigos de Los Angeles is a seasoned ensemble with decades of combined experience, and proud to be one of the highest-rated mariachi groups in Los Angeles. Devoted, passionate, and professional, we bring our full energy to every event we perform. Our extensive repertoire spans the full range of mariachi tradition — Sones, Rancheras, Huapangos, Boleros, Cumbias, Polkas, Joropos, and Danzones.",
      bio2:
        "We believe every event deserves to be unforgettable. From performing alongside well-known artists to intimate private gatherings, we treat each performance with the same dedication and care — so every moment becomes a memory worth keeping.",
      bio3:
        "Mariachi Amigos de Los Angeles serves all types of occasions, including concerts, birthdays, quinceañeras, television productions, corporate parties, weddings, and celebrations of life. Our members bring years of experience and a wide-ranging song selection that honors the full breadth of mariachi artistry. We are committed to growth, excellence, and always delivering the best show — no matter the setting.",
      bio4:
        "Punctuality and pace are a point of pride for us. We play efficiently so our clients get the most out of every hour, while seamlessly adapting to any occasion with a genuine sense of culture, language, and atmosphere. Contact us today — not just for a performance, but for a lifelong memory.",
      stat1: "Years of Experience",
      stat2: "Events Performed",
      stat3: "Happy Clients",
      stat4: "County Service Areas",
    },

    // ── Services ─────────────────────────────────────────────
    services: {
      sectionLabel: "What We Offer",
      title: "Our Services & Pricing",
      subtitle:
        "Choose the perfect ensemble for your celebration. All packages include traditional charro attire, full repertoire, and professional sound.",
      note: "Monday–Thursday bookings receive special discounted rates!",
      priceFrom: "Starting at",
      perHour: "/ hr",
      musicians: "Musicians",
      perfect: "Perfect for",
      bookThis: "Book This Package",
      travelNote:
        "We serve Los Angeles, Orange, San Bernardino, Riverside & Ventura Counties. Travel fees may apply for some areas.",
      packages: [
        {
          size: "3",
          name: "Trio Romántico",
          price: "$350",
          description: "Violin, Guitarrón & Vihuela. Intimate and elegant.",
          perfect: "Serenades, anniversaries, proposals, intimate dinners",
          highlights: ["Perfect serenade", "Elegant atmosphere", "Any venue"],
        },
        {
          size: "4",
          name: "Cuarteto Clásico",
          price: "$450",
          description: "Trio + Trumpet. Rich, classic mariachi sound.",
          perfect: "Birthdays, backyard parties, restaurants",
          highlights: ["Classic sound", "Crowd favorite", "Versatile repertoire"],
        },
        {
          size: "5",
          name: "Quinteto Festivo",
          price: "$550",
          description: "Full harmony with two violins and trumpet.",
          perfect: "Quinceañeras, baptisms, family celebrations",
          highlights: ["Full harmony", "Festive energy", "Two violins"],
          featured: true,
        },
        {
          size: "6",
          name: "Sexteto Elegante",
          price: "$700",
          description: "Doubled instruments for a powerful, rich sound.",
          perfect: "Weddings, corporate events, upscale parties",
          highlights: ["Rich full sound", "Stage presence", "Professional setup"],
        },
        {
          size: "8",
          name: "Octeto de Fiesta",
          price: "$1,000",
          description: "Eight musicians delivering a spectacular performance.",
          perfect: "Grand weddings, large quinceañeras, festivals",
          highlights: ["Grand performance", "High energy", "Festival ready"],
        },
        {
          size: "12",
          name: "Gran Mariachi Completo",
          price: "$2,000",
          description: "The full traditional mariachi experience. Unforgettable.",
          perfect: "Large weddings, corporate galas, major events",
          highlights: ["Maximum impact", "Full traditional", "Premium experience"],
        },
      ],
      eventTypes: {
        title: "We Perform At",
        events: [
          "Weddings & Receptions",
          "Quinceañeras",
          "Birthday Parties",
          "Corporate Events",
          "Anniversary Celebrations",
          "Baptisms & Communions",
          "Holiday Parties",
          "Restaurant Serenades",
          "Funerals & Memorials",
          "Festivals & Fairs",
        ],
      },
    },

    // ── Gallery ──────────────────────────────────────────────
    gallery: {
      sectionLabel: "Our Performances",
      title: "See Us in Action",
      subtitle:
        "A glimpse into our most memorable performances across Southern California.",
      followUs: "Follow us on Instagram",
      instagram: "@mariachiamigos_la",
    },

    // ── Booking ──────────────────────────────────────────────
    booking: {
      sectionLabel: "Get in Touch",
      title: "Book Your Celebration",
      subtitle:
        "Ready to bring the magic of mariachi to your event? Fill out the form and we'll get back to you within 24 hours.",
      directContact: "Or contact us directly:",
      phone: "(323) 767-6657",
      email: "mariachiamigosla@gmail.com",
      form: {
        name: "Full Name *",
        namePlaceholder: "Your full name",
        email: "Email Address *",
        emailPlaceholder: "your@email.com",
        phone: "Phone Number *",
        phonePlaceholder: "(xxx) xxx-xxxx",
        eventDate: "Event Date *",
        eventType: "Event Type *",
        eventTypePlaceholder: "Select event type",
        eventTypes: [
          "Wedding",
          "Quinceañera",
          "Birthday Party",
          "Anniversary",
          "Corporate Event",
          "Baptism / Communion",
          "Holiday Party",
          "Restaurant Serenade",
          "Funeral / Memorial",
          "Other",
        ],
        location: "Event Location / City *",
        locationPlaceholder: "City, neighborhood, or venue name",
        musicians: "Number of Musicians",
        musiciansPlaceholder: "Preferred group size (3–12)",
        duration: "Preferred Duration",
        durationPlaceholder: "e.g. 2 hours, 3 hours",
        requests: "Special Requests",
        requestsPlaceholder:
          "Song requests, special instructions, anything else we should know...",
        submit: "Send Booking Request",
        submitting: "Sending...",
        successTitle: "Request Received!",
        successMessage:
          "Thank you! We'll contact you within 24 hours to confirm your booking.",
        errorMessage: "Something went wrong. Please try again or call us directly.",
      },
    },

    // ── Footer ───────────────────────────────────────────────
    footer: {
      tagline: "Bringing joy, passion, and authentic Mexican music to\nSouthern California since 2005.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      contact: "Contact",
      copyright: "© {year} Mariachi Amigos LA. All rights reserved.",
      madeWith: "Made with ♥ in Los Angeles",
    },
  },

  // ────────────────────────────────────────────────────────────
  //  ESPAÑOL
  // ────────────────────────────────────────────────────────────
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      gallery: "Galería",
      booking: "Reservar",
      contact: "Contacto",
      phone: "(323) 767-6657",
      langToggle: "English",
    },

    hero: {
      headline: "El Mariachi Más\nApasionado de LA",
      subheadline:
        "Llevando el corazón y el alma de México a tus celebraciones más especiales.",
      cta1: "Reservar Ahora",
      cta2: "Llamar (323) 767-6657",
      scroll: "Desplázate para explorar",
      badge: "Sirviendo a LA desde 2005",
    },

    about: {
      sectionLabel: "Nuestra Historia",
      title: "Música Que Mueve el Alma",
      bio1:
        "Mariachi Amigos de Los Ángeles es un conjunto experimentado con décadas de experiencia combinada, y uno de los grupos de mariachi mejor calificados en Los Ángeles. Dedicados, apasionados y profesionales, aportamos toda nuestra energía en cada evento. Nuestro extenso repertorio abarca toda la tradición mariachi — Sones, Rancheras, Huapangos, Boleros, Cumbias, Polkas, Joropos y Danzones.",
      bio2:
        "Creemos que cada evento merece ser inolvidable. Desde actuar junto a artistas reconocidos hasta reuniones privadas íntimas, tratamos cada presentación con la misma dedicación y cuidado — para que cada momento se convierta en un recuerdo que vale la pena guardar.",
      bio3:
        "Mariachi Amigos de Los Ángeles sirve todo tipo de ocasiones: conciertos, cumpleaños, quinceañeras, producciones televisivas, fiestas corporativas, bodas y celebraciones de vida. Nuestros miembros aportan años de experiencia y una amplia selección de canciones que honra toda la riqueza del mariachi. Estamos comprometidos con el crecimiento, la excelencia y siempre dar el mejor espectáculo.",
      bio4:
        "La puntualidad y el ritmo son puntos de orgullo para nosotros. Tocamos con eficiencia para que nuestros clientes aprovechen al máximo cada hora, adaptándonos con naturalidad a cualquier ocasión con un genuino sentido de cultura, idioma y atmósfera. Contáctenos hoy — no solo para una actuación, sino para un recuerdo de por vida.",
      stat1: "Años de Experiencia",
      stat2: "Eventos Realizados",
      stat3: "Clientes Felices",
      stat4: "Condados Servidos",
    },

    services: {
      sectionLabel: "Lo Que Ofrecemos",
      title: "Servicios y Precios",
      subtitle:
        "Elige el conjunto perfecto para tu celebración. Todos los paquetes incluyen vestimenta charra, repertorio completo y sonido profesional.",
      note: "¡Las reservas de lunes a jueves reciben tarifas especiales con descuento!",
      priceFrom: "Desde",
      perHour: "/ hr",
      musicians: "Músicos",
      perfect: "Ideal para",
      bookThis: "Reservar Este Paquete",
      travelNote:
        "Servimos los condados de Los Ángeles, Orange, San Bernardino, Riverside y Ventura. Pueden aplicarse cargos por desplazamiento en algunas áreas.",
      packages: [
        {
          size: "3",
          name: "Trío Romántico",
          price: "$350",
          description: "Violín, Guitarrón y Vihuela. Íntimo y elegante.",
          perfect: "Serenatas, aniversarios, propuestas, cenas íntimas",
          highlights: ["Serenata perfecta", "Ambiente elegante", "Cualquier lugar"],
        },
        {
          size: "4",
          name: "Cuarteto Clásico",
          price: "$450",
          description: "Trío + Trompeta. Sonido clásico de mariachi.",
          perfect: "Cumpleaños, fiestas en casa, restaurantes",
          highlights: ["Sonido clásico", "Favorito del público", "Repertorio versátil"],
        },
        {
          size: "5",
          name: "Quinteto Festivo",
          price: "$550",
          description: "Armonía completa con dos violines y trompeta.",
          perfect: "Quinceañeras, bautizos, celebraciones familiares",
          highlights: ["Armonía completa", "Energía festiva", "Dos violines"],
          featured: true,
        },
        {
          size: "6",
          name: "Sexteto Elegante",
          price: "$700",
          description: "Instrumentos duplicados para un sonido poderoso y rico.",
          perfect: "Bodas, eventos corporativos, fiestas de lujo",
          highlights: ["Sonido pleno", "Presencia en escena", "Configuración profesional"],
        },
        {
          size: "8",
          name: "Octeto de Fiesta",
          price: "$1,000",
          description: "Ocho músicos ofreciendo una actuación espectacular.",
          perfect: "Grandes bodas, quinceañeras grandes, festivales",
          highlights: ["Gran actuación", "Alta energía", "Listo para festivales"],
        },
        {
          size: "12",
          name: "Gran Mariachi Completo",
          price: "$2,000",
          description: "La experiencia de mariachi tradicional completo. Inolvidable.",
          perfect: "Bodas grandes, galas corporativas, eventos importantes",
          highlights: ["Máximo impacto", "Tradición completa", "Experiencia premium"],
        },
      ],
      eventTypes: {
        title: "Actuamos En",
        events: [
          "Bodas y Recepciones",
          "Quinceañeras",
          "Fiestas de Cumpleaños",
          "Eventos Corporativos",
          "Celebraciones de Aniversario",
          "Bautizos y Comuniones",
          "Fiestas de Temporada",
          "Serenatas en Restaurantes",
          "Funerales y Memoriales",
          "Festivales y Ferias",
        ],
      },
    },

    gallery: {
      sectionLabel: "Nuestras Actuaciones",
      title: "Míranos en Acción",
      subtitle:
        "Un vistazo a nuestras actuaciones más memorables en el sur de California.",
      followUs: "Síguenos en Instagram",
      instagram: "@mariachiamigos_la",
    },

    booking: {
      sectionLabel: "Ponte en Contacto",
      title: "Reserva Tu Celebración",
      subtitle:
        "¿Listo para llevar la magia del mariachi a tu evento? Llena el formulario y te responderemos en 24 horas.",
      directContact: "O contáctanos directamente:",
      phone: "(323) 767-6657",
      email: "mariachiamigosla@gmail.com",
      form: {
        name: "Nombre Completo *",
        namePlaceholder: "Tu nombre completo",
        email: "Correo Electrónico *",
        emailPlaceholder: "tu@correo.com",
        phone: "Teléfono *",
        phonePlaceholder: "(xxx) xxx-xxxx",
        eventDate: "Fecha del Evento *",
        eventType: "Tipo de Evento *",
        eventTypePlaceholder: "Selecciona el tipo de evento",
        eventTypes: [
          "Boda",
          "Quinceañera",
          "Fiesta de Cumpleaños",
          "Aniversario",
          "Evento Corporativo",
          "Bautizo / Comunión",
          "Fiesta de Temporada",
          "Serenata en Restaurante",
          "Funeral / Memorial",
          "Otro",
        ],
        location: "Lugar del Evento / Ciudad *",
        locationPlaceholder: "Ciudad, colonia o nombre del lugar",
        musicians: "Número de Músicos",
        musiciansPlaceholder: "Tamaño preferido del grupo (3–12)",
        duration: "Duración Preferida",
        durationPlaceholder: "Ej. 2 horas, 3 horas",
        requests: "Peticiones Especiales",
        requestsPlaceholder:
          "Canciones especiales, instrucciones especiales, cualquier otra cosa que debamos saber...",
        submit: "Enviar Solicitud de Reserva",
        submitting: "Enviando...",
        successTitle: "¡Solicitud Recibida!",
        successMessage:
          "¡Gracias! Nos comunicaremos contigo en 24 horas para confirmar tu reserva.",
        errorMessage: "Algo salió mal. Por favor intenta de nuevo o llámanos directamente.",
      },
    },

    footer: {
      tagline: "Llevando alegría, pasión y auténtica música mexicana al\nsur de California desde 2005.",
      quickLinks: "Enlaces Rápidos",
      followUs: "Síguenos",
      contact: "Contacto",
      copyright: "© {year} Mariachi Amigos LA. Todos los derechos reservados.",
      madeWith: "Hecho con ♥ en Los Ángeles",
    },
  },
} as const;

// Translations type is the union of both languages — using the EN shape as the canonical type
// We cast to a common shape to allow language switching without TS errors
export type Translations = {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    booking: string;
    contact: string;
    phone: string;
    langToggle: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
    scroll: string;
    badge: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    bio1: string;
    bio2: string;
    bio3: string;
    bio4: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
  };
  services: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    note: string;
    priceFrom: string;
    perHour: string;
    musicians: string;
    perfect: string;
    bookThis: string;
    travelNote: string;
    packages: {
      size: string;
      name: string;
      price: string;
      description: string;
      perfect: string;
      highlights: readonly string[];
      featured?: boolean;
    }[];
    eventTypes: {
      title: string;
      events: readonly string[];
    };
  };
  gallery: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    followUs: string;
    instagram: string;
  };
  booking: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    directContact: string;
    phone: string;
    email: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      eventDate: string;
      eventType: string;
      eventTypePlaceholder: string;
      eventTypes: readonly string[];
      location: string;
      locationPlaceholder: string;
      musicians: string;
      musiciansPlaceholder: string;
      duration: string;
      durationPlaceholder: string;
      requests: string;
      requestsPlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    followUs: string;
    contact: string;
    copyright: string;
    madeWith: string;
  };
};
