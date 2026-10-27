import { motion } from "framer-motion";

import dress1 from "../../assets/dress-code/dress1.jpg";
import dress2 from "../../assets/dress-code/dress2.jpg";
import dress3 from "../../assets/dress-code/dress3.jpg";
import dress4 from "../../assets/dress-code/dress4.jpg";
import dress5 from "../../assets/dress-code/dress5.jpg";
import dress6 from "../../assets/dress-code/dress6.jpg";

const dressCodeItems = [
  {
    id: 1,
    image: dress1,
  },
  {
    id: 2,
    image: dress2,
  },
  {
    id: 3,
    image: dress3,
  },
  {
    id: 4,
    image: dress4,
  },
  {
    id: 5,
    image: dress5,
  },
  {
    id: 6,
    image: dress6,
  },
];

function DressCode() {
  return (
    <section className="relative overflow-hidden bg-[#5A292A] px-5 py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Заголовок */}
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
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#C5B477]" />

            <span className="text-sm text-[#C5B477]">✦</span>

            <div className="h-px w-10 bg-[#C5B477]" />
          </div>

          <p
            className="mb-3 text-xs uppercase tracking-[0.4em] text-[#C5B477] sm:text-sm"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Стиль нашего дня
          </p>

          <h2
            className="text-5xl font-normal text-[#F2E4BB] md:text-7xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Дресс-код
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#F2E4BB]/90 sm:text-base md:text-lg"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Будем рады, если вы поддержите атмосферу нашего праздника и выберете
            образ в оттенках нашей свадебной палитры.
          </p>
        </motion.div>

        {/* Цвета для образов */}
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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-2xl px-5 py-8 sm:px-8 sm:py-9"
        >
          {/* Заголовок блока */}
          <div className="mb-8 text-center">
            <p
              className="text-xs uppercase tracking-[0.35em] text-[#C5B477] sm:text-sm"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Цвета для образов
            </p>

            <div className="mx-auto mt-3 h-px w-14 bg-[#C5B477]" />
          </div>

          {/* 6 круглых фотографий */}
          <div className="mx-auto grid max-w-xl grid-cols-3 justify-items-center gap-x-6 gap-y-9 sm:gap-x-10 sm:gap-y-10">
            {dressCodeItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  scale: 0.75,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="group"
              >
                <div
                  className="relative h-32 w-32 overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-105 sm:h-36 sm:w-36"
                  style={{
                    border: "1px solid #C5B477",
                    boxShadow: "0 8px 20px rgba(63, 27, 20, 0.35)",
                  }}
                >
                  <img
                    src={item.image}
                    alt="Цвет для образа"
                    className="h-full w-full rounded-full object-cover"
                  />

                  {/* Тонкая золотая внутренняя рамка */}
                  <div className="pointer-events-none absolute inset-[4px] rounded-full border border-[#C5B477]/70" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Нижний декор */}
          <div className="mt-9 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#C5B477]" />

            <span className="text-xs text-[#C5B477]">✦</span>

            <div className="h-px w-10 bg-[#C5B477]" />
          </div>

          <p
            className="mx-auto mt-5 max-w-md text-center text-sm italic leading-relaxed text-[#F2E4BB]/90 sm:text-base"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Выберите оттенок, который вам ближе, и создайте свой образ в
            гармонии с нашей свадебной палитрой.
          </p>
        </motion.div>

        {/* Нижний разделитель */}
        <div className="mx-auto mt-10 h-px w-20 bg-[#C5B477]" />
      </div>
    </section>
  );
}

export default DressCode;
