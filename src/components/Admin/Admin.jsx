import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

function Admin() {
  const [password, setPassword] = useState("");

  const [authorized, setAuthorized] = useState(() => {
    return localStorage.getItem("adminAuth") === "true";
  });

  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (password === "11112026") {
      localStorage.setItem("adminAuth", "true");
      setAuthorized(true);
      setPassword("");
    } else {
      alert("Неверный пароль");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    setAuthorized(false);
  };

  const loadGuests = async () => {
    try {
      setLoading(true);
      setError("");

      const q = query(collection(db, "rsvps"), orderBy("createdAt", "desc"));

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setGuests(data);
    } catch (error) {
      console.error("Ошибка загрузки гостей:", error);
      setError("Не удалось загрузить ответы. Попробуйте обновить список.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorized) {
      loadGuests();
    }
  }, [authorized]);

  const deleteGuest = async (id) => {
    const confirmDelete = window.confirm("Удалить ответ этого гостя?");

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "rsvps", id));

      setGuests((prev) => prev.filter((guest) => guest.id !== id));
    } catch (error) {
      console.error("Ошибка удаления:", error);
      alert("Не удалось удалить ответ.");
    }
  };

  if (!authorized) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-5"
        style={{
          background: "#49432C",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        <form
          onSubmit={login}
          className="w-full max-w-md rounded-[30px] p-8 sm:p-10 text-center"
          style={{
            background: "#F2E4BB",
            border: "1px solid #C5B477",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-3xl"
            style={{
              color: "#5A292A",
              border: "1px solid #C5B477",
            }}
          >
            ♡
          </div>

          <p
            className="mb-2 text-xs uppercase tracking-[0.3em]"
            style={{ color: "#827A60" }}
          >
            Wedding invitation
          </p>

          <h1
            className="text-4xl mb-8"
            style={{ color: "#5A292A", fontWeight: 500 }}
          >
            Админка
          </h1>

          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl px-5 py-3 outline-none mb-5"
            style={{
              background: "#FFFDF7",
              border: "1px solid rgba(197, 180, 119, 0.7)",
              color: "#5A292A",
              fontSize: "18px",
            }}
          />

          <button
            type="submit"
            className="w-full rounded-full py-3 transition-colors duration-200 hover:opacity-90"
            style={{
              background: "#5A292A",
              color: "#F2E4BB",
              fontSize: "20px",
              border: "1px solid #C5B477",
            }}
          >
            Войти
          </button>
        </form>
      </div>
    );
  }

  const coming = guests.filter((guest) => guest.attendance === "Да");
  const notComing = guests.filter((guest) => guest.attendance === "Нет");

  return (
    <div
      className="min-h-screen px-5 py-12 sm:py-20"
      style={{
        background: "#49432C",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-5 mb-12">
          <p
            className="text-xs uppercase tracking-[0.35em]"
            style={{ color: "#C5B477" }}
          >
            Wedding invitation
          </p>

          <div className="h-px w-20" style={{ background: "#C5B477" }} />

          <h1
            className="text-4xl sm:text-5xl text-center"
            style={{ color: "#F2E4BB", fontWeight: 500 }}
          >
            Список гостей венчания
          </h1>

          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center mt-3">
            <button
              onClick={loadGuests}
              disabled={loading}
              className="rounded-full px-6 sm:px-8 py-3 transition-colors duration-200 hover:opacity-90"
              style={{
                background: "#5A292A",
                color: "#F2E4BB",
                border: "1px solid #C5B477",
                fontSize: "18px",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? "Обновление..." : "Обновить список"}
            </button>

            <button
              onClick={logout}
              className="rounded-full px-6 sm:px-8 py-3 transition-colors duration-200 hover:opacity-90"
              style={{
                background: "transparent",
                color: "#F2E4BB",
                border: "1px solid #C5B477",
                fontSize: "18px",
              }}
            >
              Выйти
            </button>
          </div>
        </div>

        {error && (
          <div
            className="rounded-2xl p-5 mb-6 text-center"
            style={{
              background: "#F2E4BB",
              color: "#9C4141",
              border: "1px solid #C5B477",
            }}
          >
            <p>{error}</p>
            <button onClick={loadGuests} className="mt-3 underline">
              Попробовать снова
            </button>
          </div>
        )}

        <div
          className="rounded-3xl p-6 sm:p-8 mb-6"
          style={{
            background: "#F2E4BB",
            border: "1px solid #C5B477",
            boxShadow: "0 12px 35px rgba(0,0,0,0.18)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            <div
              className="rounded-2xl p-4"
              style={{
                background: "rgba(255,253,247,0.65)",
                border: "1px solid rgba(197,180,119,0.35)",
              }}
            >
              <p className="text-xl" style={{ color: "#827A60" }}>
                Всего ответов
              </p>
              <p className="mt-2 text-4xl" style={{ color: "#5A292A" }}>
                {guests.length}
              </p>
            </div>

            <div
              className="rounded-2xl p-4"
              style={{
                background: "rgba(255,253,247,0.65)",
                border: "1px solid rgba(197,180,119,0.35)",
              }}
            >
              <p className="text-xl" style={{ color: "#827A60" }}>
                Придут
              </p>
              <p className="mt-2 text-4xl" style={{ color: "#5A292A" }}>
                {coming.length}
              </p>
            </div>

            <div
              className="rounded-2xl p-4"
              style={{
                background: "rgba(255,253,247,0.65)",
                border: "1px solid rgba(197,180,119,0.35)",
              }}
            >
              <p className="text-xl" style={{ color: "#827A60" }}>
                Не придут
              </p>
              <p className="mt-2 text-4xl" style={{ color: "#5A292A" }}>
                {notComing.length}
              </p>
            </div>
          </div>
        </div>

        {loading && guests.length === 0 ? (
          <p className="text-center text-xl" style={{ color: "#F2E4BB" }}>
            Загружаем ответы...
          </p>
        ) : guests.length === 0 && !error ? (
          <div
            className="rounded-3xl p-8 text-center"
            style={{
              background: "#F2E4BB",
              color: "#5A292A",
              border: "1px solid #C5B477",
            }}
          >
            Ответов пока нет.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-3xl p-6 sm:p-8"
              style={{
                background: "#F2E4BB",
                border: "1px solid #C5B477",
                boxShadow: "0 12px 35px rgba(0,0,0,0.18)",
              }}
            >
              <h2 className="text-3xl mb-5" style={{ color: "#5A292A" }}>
                Придут
              </h2>

              <p className="text-xl mb-5" style={{ color: "#827A60" }}>
                Всего: {coming.length}
              </p>

              {coming.length === 0 ? (
                <p style={{ color: "#827A60" }}>Пока никого нет.</p>
              ) : (
                coming.map((guest) => (
                  <div
                    key={guest.id}
                    className="flex justify-between items-center mb-3 gap-3 rounded-xl p-3"
                    style={{
                      background: "#FFFDF7",
                      border: "1px solid rgba(197,180,119,0.35)",
                    }}
                  >
                    <div className="min-w-0">
                      <p
                        className="text-lg break-words"
                        style={{ color: "#5A292A" }}
                      >
                        {guest.name}
                      </p>
                      <p className="text-sm" style={{ color: "#827A60" }}>
                        {guest.createdAt?.toDate
                          ? guest.createdAt.toDate().toLocaleString("ru-RU")
                          : "Дата не указана"}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteGuest(guest.id)}
                      className="rounded-full px-3 sm:px-4 py-1 shrink-0 transition-colors duration-200 hover:opacity-80"
                      style={{
                        background: "transparent",
                        color: "#5A292A",
                        border: "1px solid #5A292A",
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                ))
              )}
            </div>

            <div
              className="rounded-3xl p-6 sm:p-8"
              style={{
                background: "#F2E4BB",
                border: "1px solid #C5B477",
                boxShadow: "0 12px 35px rgba(0,0,0,0.18)",
              }}
            >
              <h2 className="text-3xl mb-5" style={{ color: "#5A292A" }}>
                Не придут
              </h2>

              <p className="text-xl mb-5" style={{ color: "#827A60" }}>
                Всего: {notComing.length}
              </p>

              {notComing.length === 0 ? (
                <p style={{ color: "#827A60" }}>Пока никого нет.</p>
              ) : (
                notComing.map((guest) => (
                  <div
                    key={guest.id}
                    className="flex justify-between items-center mb-3 gap-3 rounded-xl p-3"
                    style={{
                      background: "#FFFDF7",
                      border: "1px solid rgba(197,180,119,0.35)",
                    }}
                  >
                    <div className="min-w-0">
                      <p
                        className="text-lg break-words"
                        style={{ color: "#5A292A" }}
                      >
                        {guest.name}
                      </p>
                      <p className="text-sm" style={{ color: "#827A60" }}>
                        {guest.createdAt?.toDate
                          ? guest.createdAt.toDate().toLocaleString("ru-RU")
                          : "Дата не указана"}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteGuest(guest.id)}
                      className="rounded-full px-3 sm:px-4 py-1 shrink-0 transition-colors duration-200 hover:opacity-80"
                      style={{
                        background: "transparent",
                        color: "#5A292A",
                        border: "1px solid #5A292A",
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
