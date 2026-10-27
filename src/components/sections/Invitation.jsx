import { motion } from "framer-motion";

import fon from "../../assets/gallery/fon2.jpg";

function Invitation() {
  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-[#5A292A] px-5 py-20 md:py-24"
    >
      {/* Фоновая фотография */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={fon}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />

        {/* Затемнение фона */}
        <div className="absolute inset-0 bg-[#5A292A]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Заголовок */}
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
          className="mb-14 text-center"
        >
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Особенный день
          </p>

          <h2
            className="text-5xl font-normal text-[#F2E4BB] md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Приглашение
          </h2>
        </motion.div>

        {/* Имена */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#C5B477]/60 sm:w-16" />

            <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

            <div className="h-px w-10 bg-[#C5B477]/60 sm:w-16" />
          </div>

          <p
            className="text-sm uppercase tracking-[0.4em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            На свадьбу
          </p>

          <div className="mt-8">
            <h2
              className="text-6xl font-normal leading-none text-[#F2E4BB] sm:text-7xl md:text-8xl"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Артём
            </h2>

            <div
              className="my-2 text-4xl text-[#C5B477] sm:text-5xl"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              и
            </div>

            <h2
              className="text-5xl font-normal leading-none text-[#F2E4BB] sm:text-6xl md:text-7xl"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Лиза
            </h2>
          </div>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#C5B477]/60 sm:w-16" />

            <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

            <div className="h-px w-10 bg-[#C5B477]/60 sm:w-16" />
          </div>
        </motion.div>

        {/* Текст */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p
            className="text-lg leading-relaxed text-[#F2E4BB] sm:text-xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            «Приглашаем вас разделить с нами радость этого дня и стать частью
            нашей истории».
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-[#C5B477]" />
        </motion.div>
      </div>
    </section>
  );
}

export default Invitation;
