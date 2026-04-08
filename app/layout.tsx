import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mariachiamigosla.com"),
  title: {
    default: "Mariachi Amigos LA | Professional Mariachi Band in Los Angeles",
    template: "%s | Mariachi Amigos LA",
  },
  description:
    "Mariachi Amigos LA — Los Angeles' premier traditional mariachi band. Available for weddings, quinceañeras, birthdays, corporate events, and more. Book now! (323) 767-6657",
  keywords: [
    "mariachi band Los Angeles",
    "mariachi LA",
    "mariachi wedding",
    "mariachi quinceañera",
    "mariachi Orange County",
    "mariachi hire",
    "mariachi band near me",
    "Mariachi Amigos LA",
    "banda de mariachi Los Ángeles",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Mariachi Amigos LA",
              telephone: "+13237676657",
              email: "mariachiamigosla@gmail.com",
              url: "https://mariachiamigosla.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: [
                "Los Angeles County",
                "Orange County",
                "San Bernardino County",
                "Riverside County",
                "Ventura County",
              ],
              sameAs: [
                "https://www.instagram.com/mariachiamigos_la",
                "https://www.facebook.com/mariachiamigosla",
              ],
              genre: "Mariachi",
              description:
                "Professional traditional mariachi band based in Los Angeles, available for weddings, quinceañeras, birthday parties, corporate events, and more.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
