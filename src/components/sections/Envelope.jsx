import { useEffect, useState } from "react";
import envelopeImage from "../../images/envelope.webp";
import MusicPlayer from "../MusicPlayer";

function Envelope({ guestName, onGuestNameSubmit }) {
  const [opened, setOpened] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [name, setName] = useState(guestName);

  const openInvitation = () => {
    const trimmedName = name.trim();

    if (!trimmedName || opened) return;

    onGuestNameSubmit(trimmedName);

    setName(trimmedName);
    setOpened(true);
    setMusicStarted(true);
  };

  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);

  return (
    <>
      <MusicPlayer play={musicStarted} />

      {!opened && (
        <section
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden px-5"
          style={{
            background: "#49432C",
          }}
        >
          {/* Свечение фона */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(197, 180, 119, 0.16) 0%, rgba(73, 67, 44, 0) 62%)",
            }}
          />

          {/* Конверт */}
          <div className="relative z-10 -mt-16 flex items-center justify-center">
            <img
              src={envelopeImage}
              alt="Конверт"
              className="h-[430px] w-[340px] select-none object-contain drop-shadow-[0_25px_45px_rgba(63,27,20,0.45)] sm:h-[520px] sm:w-[460px] md:h-[620px] md:w-[600px] lg:h-[680px] lg:w-[700px] xl:h-[740px] xl:w-[760px]"
              draggable="false"
            />

            {/* Поле имени и фамилии прямо на конверте */}
            <div className="absolute left-1/2 top-[42%] w-[58%] -translate-x-1/2 -translate-y-1/2 text-center sm:w-[55%]">
              <p
                className="mb-3 text-[15px] leading-tight tracking-[0.03em] text-[#3F1B14] sm:text-[16px] md:text-[17px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Введите имя и фамилию
              </p>

              <div className="mx-auto w-[88%] sm:w-[82%] md:w-[78%]">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      openInvitation();
                    }
                  }}
                  placeholder="Имя и фамилия"
                  autoFocus
                  autoComplete="name"
                  maxLength={60}
                  className="w-full min-w-0 border-0 bg-transparent px-1 py-2 text-center text-[14px] text-[#3F1B14] outline-none placeholder:text-[#3F1B14]/45 sm:text-[15px] md:text-[16px]"
                  style={{
                    borderBottom: "1px solid rgba(63, 27, 20, 0.5)",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Кнопка — выше на мобильных устройствах */}
          <button
            type="button"
            onClick={openInvitation}
            disabled={!name.trim()}
            className="absolute bottom-24 left-1/2 z-[100] -translate-x-1/2 px-10 py-3 text-[17px] tracking-[0.12em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:scale-[1.03] enabled:hover:bg-[#6A3031] sm:bottom-16"
            style={{
              background: "#5A292A",
              border: "1px solid #C5B477",
              color: "#F2E4BB",
              fontFamily: "'Cormorant Garamond', serif",
              boxShadow: "0 8px 20px rgba(63, 27, 20, 0.35)",
            }}
          >
            Продолжить
          </button>
        </section>
      )}
    </>
  );
}

export default Envelope;
