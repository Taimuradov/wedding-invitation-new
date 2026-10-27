import { motion } from "framer-motion";
import { Send } from "lucide-react";

function Footer() {
  const telegramLink = "https://t.me/RasulTai";

  return (
    <footer className="relative overflow-hidden bg-[#5A292A] px-5 pb-12 pt-20 md:pb-16 md:pt-24">
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
          До встречи
        </p>

        {/* Имена */}
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
            className="my-2 text-4xl text-[#C5B477] sm:my-3"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            &
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

        {/* Декоративный разделитель */}
        <div className="mx-auto my-9 flex items-center justify-center gap-3">
          <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />

          <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

          <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />
        </div>

        {/* Пожелание */}
        <p
          className="mx-auto max-w-xl text-lg leading-relaxed text-[#F2E4BB] sm:text-xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          «С радостью и трепетом ждём вас на нашем празднике.»
        </p>

        {/* Дата */}
        <div className="mt-9">
          <p
            className="text-2xl tracking-[0.15em] text-[#C5B477] sm:text-3xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            11 ноября 2026
          </p>

          <p
            className="mt-3 text-base text-[#F2E4BB]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            С любовью и благодарностью
          </p>
        </div>

        {/* Заказ сайта */}
        <div
          className="mx-auto mt-14 max-w-2xl border-t pt-8"
          style={{
            borderColor: "rgba(197, 180, 119, 0.4)",
          }}
        >
          <p
            className="text-sm leading-relaxed text-[#F2E4BB]/80 sm:text-base"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Хотите такое же красивое приглашение
            <br />
            для вашего особенного события?
          </p>

          <p
            className="mt-4 text-lg text-[#F2E4BB] sm:text-xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Создание свадебных сайтов и приглашений
          </p>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-[#C5B477]/70 bg-[#C5B477]/10 px-6 py-3 text-base text-[#C5B477] transition-all duration-300 hover:bg-[#C5B477] hover:text-[#5A292A] sm:px-7 sm:text-lg"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            <Send size={19} strokeWidth={1.8} />

            <span>Написать по вопросам заказа сайта</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
