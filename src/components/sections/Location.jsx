import { motion } from "framer-motion";
import colanderImage from "../../images/colander.png";

function Location() {
  const mapLink =
    "https://www.google.com/maps/place/%D0%AF%D0%BA%D0%BA%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%80/@38.5541469,68.7543703,14.75z/data=!4m6!3m5!1s0x38b5d198d4afbc93:0x9dfa3ce6879e7a19!8m2!3d38.5563681!4d68.7571313!16s%2Fg%2F11cn9lfmr2?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D;";

  return (
    <section className="relative overflow-hidden bg-[#5A292A] px-5 py-20 md:py-24">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#C5B477]/60 sm:w-20" />

          <div
            className="flex h-9 w-9 items-center justify-center"
            style={{
              border: "1px solid rgba(197, 180, 119, 0.7)",
              transform: "rotate(45deg)",
            }}
          >
            <span
              className="-rotate-45 text-xl text-[#C5B477]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              ♡
            </span>
          </div>

          <div className="h-px w-12 bg-[#C5B477]/60 sm:w-20" />
        </div>
        <p
          className="text-sm uppercase tracking-[0.45em] text-[#C5B477]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Место проведения
        </p>
        <h2
          className="mx-auto mt-8 max-w-3xl text-4xl font-normal leading-tight text-[#F2E4BB] sm:text-5xl md:text-6xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Ресторан «Яккачинар»
        </h2>
        <div className="mx-auto my-9 flex items-center justify-center gap-3">
          <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />

          <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

          <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />
        </div>
        <p
          className="mx-auto max-w-md text-lg leading-relaxed text-[#F2E4BB] sm:text-xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Республика Таджикистан
          <br />
          г. Душанбе
          <br />
          Ориентир "Цирк"
        </p>
        <p
          className="mt-9 text-3xl text-[#C5B477] sm:text-4xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Ноябрь
        </p>
        <div className="mt-3 flex justify-center">
          <img
            src={colanderImage}
            alt=""
            className="w-48 max-w-full object-contain sm:w-56 md:w-64"
          />
        </div>
        <p
          className="mt-5 text-xl text-[#F2E4BB] sm:text-2xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          15:30
        </p>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full px-8 py-3 text-lg transition-opacity hover:opacity-80"
          style={{
            background: "#C5B477",
            color: "#5A292A",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Открыть карту
        </a>
        <div className="mx-auto mt-10 h-px w-20 bg-[#C5B477]" />
      </motion.div>
    </section>
  );
}

export default Location;
