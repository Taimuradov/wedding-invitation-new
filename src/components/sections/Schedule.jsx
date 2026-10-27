import { motion } from "framer-motion";

const events = [
  {
    time: "15:30",
    title: "Церемония венчания",
  },
  {
    time: "17:00",
    title: "Праздничный ужин",
  },
];

function Schedule() {
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
            Программа дня
          </p>

          <h2
            className="text-5xl text-[#F2E4BB] md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Торжества
          </h2>
        </motion.div>

        {/* Расписание */}
        <div className="mx-auto max-w-3xl">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative grid grid-cols-[110px_1fr] gap-6 py-8 sm:grid-cols-[150px_1fr] sm:gap-10"
            >
              {/* Время */}
              <div className="text-right">
                <p
                  className="text-3xl text-[#C5B477] sm:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {event.time}
                </p>
              </div>

              {/* Событие */}
              <div className="relative border-l border-[#C5B477]/60 pl-6 sm:pl-10">
                {/* Золотая точка */}
                <div className="absolute -left-[5px] top-3 h-2.5 w-2.5 rotate-45 bg-[#C5B477]" />

                <h3
                  className="text-2xl text-[#F2E4BB] sm:text-3xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {event.title}
                </h3>

                <p
                  className="mt-3 max-w-lg text-base leading-relaxed text-[#F2E4BB]/90 sm:text-lg"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Нижний разделитель */}
        <div className="mx-auto mt-8 h-px w-20 bg-[#C5B477]" />
      </div>
    </section>
  );
}

export default Schedule;
