/**
 * SeoContent — visually subtle section that provides rich, crawlable
 * geo- and keyword-targeted text for Google. Fully readable by users
 * but styled to blend into the page footer area.
 */
export default function SeoContent() {
  return (
    <section
      aria-label="Service area information"
      className="bg-[#0a0300] py-12 px-6"
    >
      <div className="max-w-5xl mx-auto text-white/30 text-sm leading-relaxed space-y-6">

        <div>
          <h2 className="text-white/40 font-semibold text-base mb-2">
            Mariachi Band for Hire — Los Angeles &amp; Southern California
          </h2>
          <p>
            Mariachi Amigos de Los Angeles is one of Southern California&apos;s highest-rated
            professional mariachi bands, serving the greater Los Angeles area and all of
            Southern California since 2005. Whether you are searching for a mariachi band
            in Los Angeles, a mariachi band in Orange County, or a mariachi group near you
            in the Inland Empire or Ventura County, we bring the full tradition of mariachi
            music to your event — from intimate serenades to grand celebrations.
          </p>
        </div>

        <div>
          <h3 className="text-white/40 font-semibold mb-2">
            Mariachi for Weddings, Quinceañeras &amp; Special Events
          </h3>
          <p>
            We perform at weddings, quinceañeras, birthday parties, baptisms, anniversaries,
            corporate events, holiday parties, celebrations of life, television productions,
            and restaurant serenades throughout Los Angeles County — including East LA,
            Boyle Heights, Glendale, Pasadena, Burbank, Van Nuys, North Hollywood, Long Beach,
            Compton, Inglewood, Downey, Whittier, El Monte, Pomona, and Torrance — as well as
            cities across Orange County including Anaheim, Santa Ana, Garden Grove, Fullerton,
            and Irvine.
          </p>
        </div>

        <div>
          <h3 className="text-white/40 font-semibold mb-2">
            Mariachi Band — Inland Empire &amp; Ventura County
          </h3>
          <p>
            Our service area extends to San Bernardino County and Riverside County cities
            including San Bernardino, Ontario, Fontana, Rancho Cucamonga, Moreno Valley,
            and Riverside, as well as Ventura County cities including Ventura, Oxnard,
            Camarillo, and Thousand Oaks. No matter where in Southern California your event
            is held, Mariachi Amigos de Los Angeles delivers a professional, on-time, and
            unforgettable performance.
          </p>
        </div>

        <div>
          <h3 className="text-white/40 font-semibold mb-2">
            Mariachi para Bodas, Quinceañeras y Fiestas — Los Ángeles
          </h3>
          <p>
            Mariachi Amigos de Los Ángeles ofrece servicios de mariachi profesional para
            bodas, quinceañeras, cumpleaños, bautizos, serenatas, eventos corporativos,
            fiestas privadas y celebraciones especiales en toda el área de Los Ángeles y
            el sur de California. Somos uno de los grupos de mariachi mejor calificados en
            Los Ángeles — contáctenos hoy para contratar mariachi para su evento.
            Servimos comunidades de habla hispana en East Los Ángeles, Boyle Heights,
            Huntington Park, South Gate, Bell Gardens, Maywood, Montebello, Pico Rivera,
            La Puente, Norwalk, y toda el área metropolitana de Los Ángeles.
          </p>
        </div>

        <div>
          <h3 className="text-white/40 font-semibold mb-2">
            Book a Mariachi Band — (323) 767-6657
          </h3>
          <p>
            Ready to hire a mariachi band for your event in Los Angeles or Southern
            California? Call or text Mariachi Amigos de Los Angeles at{" "}
            <a
              href="tel:+13237676657"
              className="text-white/40 hover:text-white/60 underline"
            >
              (323) 767-6657
            </a>{" "}
            or email{" "}
            <a
              href="mailto:mariachiamigosla@gmail.com"
              className="text-white/40 hover:text-white/60 underline"
            >
              mariachiamigosla@gmail.com
            </a>
            . Rated 4.9 stars with 89 reviews on Yelp. We look forward to making your
            celebration an unforgettable memory.
          </p>
        </div>

      </div>
    </section>
  );
}
