import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mariachiamigosla.com"),
  title: {
    default: "Mariachi Amigos LA | Professional Mariachi Band in Los Angeles",
    template: "%s | Mariachi Amigos LA",
  },
  description:
    "Mariachi Amigos de Los Angeles — top-rated mariachi band serving Los Angeles, Orange County, Riverside, San Bernardino & Ventura. Weddings, quinceañeras, birthdays, corporate events. 4.9★ on Yelp. Call (323) 767-6657.",
  keywords: [
    // Core
    "mariachi band Los Angeles",
    "mariachi band near me",
    "mariachi LA",
    "Mariachi Amigos LA",
    "Mariachi Amigos de Los Angeles",
    "hire mariachi band",
    "book mariachi band",
    // Events
    "mariachi wedding Los Angeles",
    "mariachi quinceañera",
    "mariachi birthday party",
    "mariachi corporate event",
    "mariachi celebration of life",
    "mariachi serenade",
    "mariachi band for party",
    // Cities — LA County
    "mariachi band Glendale",
    "mariachi band Pasadena",
    "mariachi band Long Beach",
    "mariachi band Burbank",
    "mariachi band Compton",
    "mariachi band East LA",
    "mariachi band Downey",
    "mariachi band Whittier",
    "mariachi band Pomona",
    "mariachi band Inglewood",
    "mariachi band Van Nuys",
    "mariachi band North Hollywood",
    "mariachi band Torrance",
    "mariachi band El Monte",
    // Cities — Orange County
    "mariachi band Orange County",
    "mariachi band Anaheim",
    "mariachi band Santa Ana",
    "mariachi band Garden Grove",
    "mariachi band Fullerton",
    "mariachi band Irvine",
    // Cities — IE / Ventura
    "mariachi band San Bernardino",
    "mariachi band Riverside",
    "mariachi band Ontario",
    "mariachi band Ventura",
    "mariachi band Oxnard",
    // Spanish keywords
    "mariachi para bodas Los Angeles",
    "mariachi para quinceañeras",
    "mariachi para fiestas",
    "contratar mariachi Los Angeles",
    "mariachi económico Los Angeles",
    "grupo de mariachi Los Angeles",
    "mariachi profesional Los Angeles",
    "mariachi para serenata",
    "mariachi para cumpleaños",
    "mariachi para eventos corporativos",
    "mariachi sur de California",
  ],
  authors: [{ name: "Mariachi Amigos LA" }],
  creator: "Mariachi Amigos LA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mariachiamigosla.com",
    siteName: "Mariachi Amigos LA",
    title: "Mariachi Amigos LA | Professional Mariachi Band Los Angeles",
    description:
      "Los Angeles' premier traditional mariachi band for weddings, quinceañeras, birthday parties, and corporate events. (323) 767-6657",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mariachi Amigos LA — Professional Mariachi Band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariachi Amigos LA | Professional Mariachi Band Los Angeles",
    description:
      "LA's premier traditional mariachi band. Weddings, quinceañeras, birthdays, corporate events. Call (323) 767-6657",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#DC2626" />
        {/* Structured Data — Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["MusicGroup", "LocalBusiness"],
                name: "Mariachi Amigos de Los Angeles",
                alternateName: "Mariachi Amigos LA",
                telephone: "+13237676657",
                email: "mariachiamigosla@gmail.com",
                url: "https://mariachiamigosla.com",
                logo: "https://mariachiamigosla.com/og-image.jpg",
                image: "https://mariachiamigosla.com/og-image.jpg",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Los Angeles",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 34.0522,
                  longitude: -118.2437,
                },
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Los Angeles County" },
                  { "@type": "AdministrativeArea", name: "Orange County" },
                  { "@type": "AdministrativeArea", name: "San Bernardino County" },
                  { "@type": "AdministrativeArea", name: "Riverside County" },
                  { "@type": "AdministrativeArea", name: "Ventura County" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "89",
                  bestRating: "5",
                  worstRating: "1",
                },
                review: [
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Crystal G." },
                    datePublished: "2024-01-02",
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    reviewBody: "They were really funny, polite and so much talent! Definitely a five-star experience.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Jackie R." },
                    datePublished: "2022-07-18",
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    reviewBody: "Surprised my mom and uncle with mariachi for their birthdays and they loved it. I definitely recommend, they are all talented and the young lady had a beautiful voice!",
                  },
                ],
                sameAs: [
                  "https://www.instagram.com/mariachiamigos_la",
                  "https://www.facebook.com/mariachiamigosla",
                  "https://www.yelp.com/biz/mariachi-amigos-de-los-angeles-los-angeles",
                ],
                genre: "Mariachi",
                foundingDate: "2005",
                description:
                  "Top-rated professional mariachi band based in Los Angeles, serving Southern California. Available for weddings, quinceañeras, birthdays, corporate events, celebrations of life, and more. Rated 4.9 stars on Yelp with 89 reviews.",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    opens: "08:00",
                    closes: "23:00",
                  },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Mariachi Packages",
                  itemListElement: [
                    { "@type": "Offer", name: "Trio Romántico (3 musicians)", price: "350", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Cuarteto Clásico (4 musicians)", price: "450", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Quinteto Festivo (5 musicians)", price: "550", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Sexteto Elegante (6 musicians)", price: "700", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Octeto de Fiesta (8 musicians)", price: "1000", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Gran Mariachi Completo (12 musicians)", price: "2000", priceCurrency: "USD" },
                  ],
                },
              },
            ]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
