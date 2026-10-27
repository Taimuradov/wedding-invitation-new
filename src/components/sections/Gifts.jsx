import { motion } from "framer-motion";

import fon1 from "../../assets/gallery/fon3.jpg";

function Gifts() {
  return (
    <section
      id="gifts"
      className="relative overflow-hidden px-5 py-20 md:py-24"
    >
      {/* Фоновая фотография */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fon1})`,
        }}
      />

      {/* Оливково-зелёный затемняющий слой */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(73, 67, 44, 0.78)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
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
        >
          {/* Верхний декоративный элемент */}
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

          {/* Заголовок */}
          <p
            className="text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Маленькая просьба
          </p>

          <h2
            className="mt-6 text-6xl font-normal leading-tight text-[#F2E4BB] sm:text-7xl md:text-8xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Подарки
          </h2>

          {/* Разделитель */}
          <div className="mx-auto my-9 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />

            <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

            <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />
          </div>

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
              delay: 0.15,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="mx-auto max-w-2xl text-lg leading-relaxed text-[#F2E4BB] sm:text-xl md:text-2xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              «Думая о том, что нам подарить, вы можете доверить выбор нам. Мы
              будем рады денежному подарку, ведь так мы сможем выбрать именно
              то, что сделает наш дом уютнее».
            </p>
          </motion.div>

          {/* Нижний декоративный элемент */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto mt-10 h-px w-20 bg-[#C5B477]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Gifts;
