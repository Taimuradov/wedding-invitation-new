import { motion } from "framer-motion";

function Wishes() {
  const wishes = [
    {
      title: "Просим оставить детей дома",
      text: "Чтобы церемония и праздничный ужин прошли в спокойной и уютной атмосфере, просим вас в этот день оставить детей под заботливым присмотром.",
    },
    {
      title: "Пожалуйста, вовремя",
      text: "Будем очень признательны, если вы придёте вовремя: церемония начнётся точно в назначенное время.",
    },
    {
      title: "Поздравления и сюрпризы",
      text: "Наша программа продумана заранее. Если вы захотите подготовить поздравление или сделать сюрприз, пожалуйста, заранее согласуйте это с организаторами.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#5A292A] px-5 py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl">
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
          className="text-center"
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
            Для наших гостей
          </p>

          <h2
            className="mt-6 text-5xl font-normal leading-tight text-[#F2E4BB] sm:text-6xl md:text-7xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Наши пожелания
          </h2>

          {/* Декоративный разделитель */}
          <div className="mx-auto my-9 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />

            <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

            <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />
          </div>
        </motion.div>

        {/* Пожелания */}
        <div className="mx-auto max-w-3xl">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="py-8 text-center sm:py-10"
            >
              <h3
                className="text-3xl text-[#C5B477] sm:text-4xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {wish.title}
              </h3>

              <p
                className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#F2E4BB] sm:text-xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {wish.text}
              </p>

              {index < wishes.length - 1 && (
                <div className="mx-auto mt-10 flex items-center justify-center gap-3">
                  <div className="h-px w-10 bg-[#C5B477]/50 sm:w-16" />

                  <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

                  <div className="h-px w-10 bg-[#C5B477]/50 sm:w-16" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

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
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-6 h-px w-20 bg-[#C5B477]"
        />
      </div>
    </section>
  );
}

export default Wishes;
