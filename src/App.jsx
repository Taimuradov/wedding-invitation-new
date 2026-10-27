import { useState } from "react";

import Envelope from "./components/sections/Envelope";
import Couple from "./components/sections/Couple";
import Invitation from "./components/sections/Invitation";
import Countdown from "./components/sections/Countdown";
import DressCode from "./components/sections/DressCode";
import Schedule from "./components/sections/Schedule";
import Wishes from "./components/sections/Wishes";
import Gifts from "./components/sections/Gifts";
import Location from "./components/sections/Location";
import RSVP from "./components/sections/RSVP";
import Footer from "./components/sections/Footer";

import Admin from "./components/Admin/Admin";

function App() {
  const [guestName, setGuestName] = useState(() => {
    return localStorage.getItem("guestName") || "";
  });

  const handleGuestNameSubmit = (name) => {
    localStorage.setItem("guestName", name);
    setGuestName(name);
  };

  // Админская страница
  if (window.location.pathname === "/admin") {
    return <Admin />;
  }

  // Основной сайт приглашения
  return (
    <>
      <Envelope
        guestName={guestName}
        onGuestNameSubmit={handleGuestNameSubmit}
      />

      <main>
        <Couple />

        <Invitation />

        <Countdown />

        <DressCode />

        <Schedule />

        <Wishes />

        <Gifts />

        <Location />

        <RSVP guestName={guestName} />

        <Footer />
      </main>
    </>
  );
}

export default App;
