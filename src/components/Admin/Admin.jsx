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
        style={{ background: "#334434" }}
      >
        <form
          onSubmit={login}
          className="w-full max-w-md rounded-[30px] p-10 text-center"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
          }}
        >
          <h1 className="text-4xl mb-8" style={{ color: "#334434" }}>
            Админка
          </h1>

          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl px-5 py-3 outline-none mb-5"
            style={{
              background: "#FFFFFF",
              border: "1px solid #D8D8D8",
              fontSize: "18px",
            }}
          />

          <button
            type="submit"
            className="w-full rounded-full py-3"
            style={{
              background: "#334434",
              color: "#FFFFFF",
              fontSize: "20px",
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
      className="min-h-screen px-5 py-20"
      style={{
        background: "#334434",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-5 mb-12">
          <h1 className="text-5xl text-center" style={{ color: "#FFFFFF" }}>
            Список гостей венчания
          </h1>

          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={loadGuests}
              disabled={loading}
              className="rounded-full px-8 py-3"
              style={{
                background: "#FFFFFF",
                color: "#334434",
                border: "2px solid #334434",
                fontSize: "18px",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? "Обновление..." : "Обновить список"}
            </button>

            <button
              onClick={logout}
              className="rounded-full px-8 py-3"
              style={{
                background: "#FFFFFF",
                color: "#334434",
                border: "2px solid #334434",
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
            style={{ background: "#FFFFFF", color: "#B94A48" }}
          >
            <p>{error}</p>
            <button onClick={loadGuests} className="mt-3 underline">
              Попробовать снова
            </button>
          </div>
        )}

        <div
          className="rounded-3xl p-8 mb-6"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            <div>
              <p className="text-xl" style={{ color: "#334434" }}>
                Всего ответов
              </p>
              <p className="mt-2 text-4xl" style={{ color: "#334434" }}>
                {guests.length}
              </p>
            </div>

            <div>
              <p className="text-xl" style={{ color: "#334434" }}>
                Придут
              </p>
              <p className="mt-2 text-4xl" style={{ color: "#334434" }}>
                {coming.length}
              </p>
            </div>

            <div>
              <p className="text-xl" style={{ color: "#334434" }}>
                Не придут
              </p>
              <p className="mt-2 text-4xl" style={{ color: "#334434" }}>
                {notComing.length}
              </p>
            </div>
          </div>
        </div>

        {loading && guests.length === 0 ? (
          <p className="text-center text-xl" style={{ color: "#FFFFFF" }}>
            Загружаем ответы...
          </p>
        ) : guests.length === 0 && !error ? (
          <div
            className="rounded-3xl p-8 text-center"
            style={{ background: "#FFFFFF", color: "#334434" }}
          >
            Ответов пока нет.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-3xl p-8"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <h2 className="text-3xl mb-5" style={{ color: "#334434" }}>
                ✅ Придут
              </h2>

              <p className="text-xl mb-5" style={{ color: "#334434" }}>
                Всего: {coming.length}
              </p>

              {coming.length === 0 ? (
                <p style={{ color: "#777777" }}>Пока никого нет.</p>
              ) : (
                coming.map((guest) => (
                  <div
                    key={guest.id}
                    className="flex justify-between items-center mb-3 gap-3"
                  >
                    <div>
                      <p className="text-lg" style={{ color: "#334434" }}>
                        {guest.name}
                      </p>
                      <p className="text-sm" style={{ color: "#777777" }}>
                        {guest.createdAt?.toDate
                          ? guest.createdAt.toDate().toLocaleString("ru-RU")
                          : "Дата не указана"}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteGuest(guest.id)}
                      className="rounded-full px-4 py-1 shrink-0"
                      style={{
                        background: "#FFFFFF",
                        color: "#B94A48",
                        border: "1px solid #B94A48",
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                ))
              )}
            </div>

            <div
              className="rounded-3xl p-8"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <h2 className="text-3xl mb-5" style={{ color: "#334434" }}>
                ❌ Не придут
              </h2>

              <p className="text-xl mb-5" style={{ color: "#334434" }}>
                Всего: {notComing.length}
              </p>

              {notComing.length === 0 ? (
                <p style={{ color: "#777777" }}>Пока никого нет.</p>
              ) : (
                notComing.map((guest) => (
                  <div
                    key={guest.id}
                    className="flex justify-between items-center mb-3 gap-3"
                  >
                    <div>
                      <p className="text-lg" style={{ color: "#334434" }}>
                        {guest.name}
                      </p>
                      <p className="text-sm" style={{ color: "#777777" }}>
                        {guest.createdAt?.toDate
                          ? guest.createdAt.toDate().toLocaleString("ru-RU")
                          : "Дата не указана"}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteGuest(guest.id)}
                      className="rounded-full px-4 py-1 shrink-0"
                      style={{
                        background: "#FFFFFF",
                        color: "#B94A48",
                        border: "1px solid #B94A48",
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
