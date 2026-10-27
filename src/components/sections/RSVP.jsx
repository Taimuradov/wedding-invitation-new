import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";

function RSVP({ guestName }) {
  const [guests, setGuests] = useState(() => {
    let guestId = localStorage.getItem("guestId");

    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guestId", guestId);
    }

    return [
      {
        id: guestId,
        name: guestName.trim(),
        attendance: "",
      },
    ];
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [alreadySent, setAlreadySent] = useState(false);

  const getGroupId = () => {
    let groupId = localStorage.getItem("rsvpGroupId");

    if (!groupId) {
      groupId = crypto.randomUUID();
      localStorage.setItem("rsvpGroupId", groupId);
    }

    return groupId;
  };

  useEffect(() => {
    setAlreadySent(localStorage.getItem("rsvpSent") === "true");
    setChecking(false);
  }, []);

  useEffect(() => {
    setGuests((prev) => {
      if (!prev.length) return prev;

      return prev.map((guest, index) =>
        index === 0
          ? {
              ...guest,
              name: guestName.trim(),
            }
          : guest,
      );
    });
  }, [guestName]);

  const addGuest = () => {
    if (guests.length >= 3) return;

    setGuests((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: "",
        attendance: "",
      },
    ]);
  };

  const updateGuestName = (id, name) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === id
          ? {
              ...guest,
              name,
            }
          : guest,
      ),
    );
  };

  const updateAttendance = (id, attendance) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === id
          ? {
              ...guest,
              attendance,
            }
          : guest,
      ),
    );
  };

  const handleSubmit = async () => {
    const invalidGuest = guests.some(
      (guest) => !guest.name.trim() || !guest.attendance,
    );

    if (invalidGuest) {
      alert("Пожалуйста, заполните имя и выберите ответ для каждого гостя");
      return;
    }

    try {
      setLoading(true);

      const groupId = getGroupId();

      await Promise.all(
        guests.map((guest, index) =>
          setDoc(doc(db, "rsvps", guest.id), {
            guestId: guest.id,
            groupId,
            personIndex: index,
            name: guest.name.trim(),
            attendance: guest.attendance,
            createdAt: serverTimestamp(),
          }),
        ),
      );

      localStorage.setItem("rsvpSent", "true");
      setSent(true);
      setAlreadySent(true);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Не удалось отправить ответ. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <section className="relative overflow-hidden bg-[#49432C] px-5 pt-10">
        <div className="flex min-h-[300px] items-center justify-center">
          <p
            className="text-lg text-[#F2E4BB]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Загрузка...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#49432C] px-5 pt-10">
      <div className="relative z-10 mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Подтверждение участия
          </p>

          <h2
            className="text-6xl font-normal text-[#F2E4BB] md:text-7xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Будем рады видеть вас
          </h2>
        </motion.div>

        {alreadySent || sent ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative px-2 py-10 text-center sm:px-8"
          >
            <div className="relative z-10">
              <h3
                className="text-5xl font-normal text-[#F2E4BB]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Спасибо
              </h3>

              <p
                className="mt-5 text-xl leading-relaxed text-[#F2E4BB]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Ваш ответ уже получен.
                <br />
                Будем рады разделить этот день вместе с вами.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative px-2 pb-14 pt-4 sm:px-8"
          >
            <div className="relative z-10">
              {guests.map((guest, index) => (
                <div key={guest.id} className={index > 0 ? "mt-10" : ""}>
                  <div className="text-center">
                    {index === 0 ? (
                      <span
                        className="whitespace-nowrap text-3xl font-normal leading-tight text-[#F2E4BB] sm:text-4xl"
                        style={{
                          fontFamily: "'Great Vibes', cursive",
                        }}
                      >
                        {guest.name}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={guest.name}
                        onChange={(e) =>
                          updateGuestName(guest.id, e.target.value)
                        }
                        placeholder={
                          index === 1
                            ? "Имя второго гостя"
                            : "Имя третьего гостя"
                        }
                        className="w-full bg-transparent px-2 text-center text-3xl text-[#F2E4BB] outline-none placeholder:text-[#F2E4BB]/60 sm:text-4xl"
                        style={{
                          fontFamily: "'Great Vibes', cursive",
                        }}
                      />
                    )}

                    <p
                      className="mt-2 text-lg leading-tight text-[#F2E4BB] sm:text-2xl"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      сможете присутствовать?
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => updateAttendance(guest.id, "Да")}
                        className="flex-1 rounded-none py-3 transition-colors"
                        style={{
                          background:
                            guest.attendance === "Да"
                              ? "#F2E4BB"
                              : "transparent",
                          color:
                            guest.attendance === "Да" ? "#49432C" : "#F2E4BB",
                          border: "1px solid #F2E4BB",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "18px",
                        }}
                      >
                        Да
                      </button>

                      <button
                        type="button"
                        onClick={() => updateAttendance(guest.id, "Нет")}
                        className="flex-1 rounded-none py-3 transition-colors"
                        style={{
                          background:
                            guest.attendance === "Нет"
                              ? "#F2E4BB"
                              : "transparent",
                          color:
                            guest.attendance === "Нет" ? "#49432C" : "#F2E4BB",
                          border: "1px solid #F2E4BB",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "18px",
                        }}
                      >
                        Нет
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {guests.length < 3 && (
                <button
                  type="button"
                  onClick={addGuest}
                  className="mt-6 w-full rounded-none py-3 transition-opacity hover:opacity-80"
                  style={{
                    background: "transparent",
                    color: "#F2E4BB",
                    border: "1px solid rgba(242, 228, 187, 0.6)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                  }}
                >
                  {guests.length === 1
                    ? "Добавить пару"
                    : "Добавить ещё одного"}
                </button>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="mt-6 w-full rounded-none py-4 transition-opacity"
                style={{
                  background: "#F2E4BB",
                  color: "#49432C",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Отправка..." : "Отправить ответ"}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default RSVP;
