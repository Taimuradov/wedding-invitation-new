import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date(2026, 10, 11, 15, 30, 0);

function calculateTime() {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function Countdown() {
  const [time, setTime] = useState(() => calculateTime());

  useEffect(() => {
    const updateTimer = () => {
      setTime(calculateTime());
    };

    updateTimer();

    const timer = window.setInterval(updateTimer, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const timerItems = [
    { value: time.days, label: "ДНЕЙ" },
    { value: time.hours, label: "ЧАСОВ" },
    { value: time.minutes, label: "МИНУТ" },
    { value: time.seconds, label: "СЕКУНД" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#49432C] px-5 py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Совсем скоро
          </p>

          <h2
            className="text-5xl text-[#F2E4BB] md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Мы скажем друг другу «да»
          </h2>
        </motion.div>

        {/* Таймер */}
        <div className="mx-auto grid max-w-3xl grid-cols-2 sm:grid-cols-4">
          {timerItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative px-4 py-6 text-center sm:px-6"
            >
              {/* Вертикальный разделитель */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-16 -translate-y-1/2 border-l border-[#C5B477]/60 sm:block" />
              )}

              {/* Золотой ромб */}
              <div className="mx-auto mb-4 h-2.5 w-2.5 rotate-45 bg-[#C5B477]" />

              {/* Значение */}
              <div
                className="text-5xl leading-none text-[#F2E4BB] sm:text-6xl md:text-7xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {String(item.value).padStart(2, "0")}
              </div>

              {/* Подпись */}
              <p
                className="mt-3 text-xs tracking-[0.25em] text-[#C5B477] sm:text-sm"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countdown;
