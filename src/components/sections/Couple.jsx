import { motion } from "framer-motion";

import photo1 from "../../assets/gallery/photo1.jpg";
import photo2 from "../../assets/gallery/photo2.jpg";

function Couple() {
  return (
    <section
      id="couple"
      className="relative overflow-hidden bg-[#49432C] px-5 py-16 md:py-20"
    >
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
            className="mb-5 text-base uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Wedding day
          </p>

          <h2
            className="text-5xl text-[#F2E4BB] md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Начало нашего пути
          </h2>
        </motion.div>

        {/* Мобильная композиция */}
        <div className="mx-auto max-w-md md:hidden">
          {/* Фото 1 + Дата */}
          <div className="grid grid-cols-2 items-center gap-5">
            {/* Фото 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative translate-x-2"
            >
              <div
                className="relative rotate-[-4deg]"
                style={{
                  border: "1px solid #C5B477",
                  boxShadow: "0 10px 18px rgba(63, 27, 20, 0.28)",
                }}
              >
                <img
                  src={photo1}
                  alt="Момент нашей истории"
                  className="aspect-square w-full rotate-[3deg] scale-[0.97] object-cover"
                  style={{
                    border: "1px solid #C5B477",
                  }}
                />
              </div>
            </motion.div>

            {/* Дата */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center"
            >
              <p
                className="text-[72px] font-light leading-[0.7] tracking-[-0.06em] text-[#F2E4BB]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                11
              </p>

              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-px w-5 bg-[#C5B477]/70" />

                <div className="h-2 w-2 rotate-45 bg-[#C5B477]" />

                <div className="h-px w-5 bg-[#C5B477]/70" />
              </div>

              <p
                className="mt-4 text-sm uppercase tracking-[0.25em] text-[#C5B477]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                ноября
              </p>

              <p
                className="mt-1 text-xl font-light tracking-[0.15em] text-[#F2E4BB]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                2026
              </p>
            </motion.div>
          </div>

          {/* Две души + Фото 2 */}
          <div className="mt-12 grid grid-cols-2 items-center gap-5">
            {/* Фраза */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p
                className="text-3xl leading-tight text-[#F2E4BB]"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Две души
                <br />— один путь
              </p>
            </motion.div>

            {/* Фото 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative rotate-[4deg]"
                style={{
                  border: "1px solid #C5B477",
                  boxShadow: "0 10px 18px rgba(63, 27, 20, 0.28)",
                }}
              >
                <img
                  src={photo2}
                  alt="Наша любовь"
                  className="aspect-square w-full rotate-[-6deg] scale-[0.97] object-cover"
                  style={{
                    border: "1px solid #C5B477",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "rgba(20, 18, 16, 0.14)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Основная композиция для больших экранов */}
        <div className="mx-auto hidden max-w-3xl md:block">
          <div className="grid grid-cols-3 items-center gap-3 sm:gap-6 md:gap-10">
            {/* Фото 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative rotate-[-4deg]"
                style={{
                  border: "1px solid #C5B477",
                  boxShadow: "0 10px 18px rgba(63, 27, 20, 0.28)",
                }}
              >
                <img
                  src={photo1}
                  alt="Момент нашей истории"
                  className="aspect-square w-full rotate-[3deg] scale-[0.97] object-cover"
                  style={{
                    border: "1px solid #C5B477",
                  }}
                />
              </div>
            </motion.div>

            {/* Дата */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center"
            >
              <p
                className="text-[105px] font-light leading-[0.7] tracking-[-0.06em] text-[#F2E4BB] md:text-[135px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                11
              </p>

              <div className="mt-7 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-[#C5B477]/70" />

                <div className="h-2 w-2 rotate-45 bg-[#C5B477]" />

                <div className="h-px w-8 bg-[#C5B477]/70" />
              </div>

              <p
                className="mt-4 text-lg uppercase tracking-[0.25em] text-[#C5B477] md:text-xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                ноября
              </p>

              <p
                className="mt-1 text-2xl font-light tracking-[0.15em] text-[#F2E4BB] md:text-3xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                2026
              </p>
            </motion.div>

            {/* Фото 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative rotate-[4deg]"
                style={{
                  border: "1px solid #C5B477",
                  boxShadow: "0 10px 18px rgba(63, 27, 20, 0.28)",
                }}
              >
                <img
                  src={photo2}
                  alt="Наша любовь"
                  className="aspect-square w-full rotate-[-3deg] scale-[0.97] object-cover"
                  style={{
                    border: "1px solid #C5B477",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "rgba(20, 18, 16, 0.14)",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Фраза */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p
              className="text-3xl leading-tight text-[#F2E4BB] sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Две души
              <br />— один путь
            </p>
          </motion.div>
        </div>

        {/* Цитата */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="mx-auto mb-6 h-px w-20 bg-[#C5B477]" />

          <p
            className="mx-auto max-w-xl text-base italic leading-relaxed text-[#F2E4BB] md:text-lg"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            «И с этого дня начинается наша вечная история…»
          </p>

          <p
            className="mt-2 text-sm text-[#F2E4BB]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Созданы друг для друга
          </p>
        </motion.div>

        {/* Нижний разделитель */}
        <div className="mx-auto mt-8 h-px w-20 bg-[#C5B477]" />
      </div>
    </section>
  );
}

export default Couple;
