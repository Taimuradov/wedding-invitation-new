import { useEffect, useRef } from "react";

import weddingMusic from "../assets/music/wedding.mp3";

function MusicPlayer({ play }) {
  const audioRef = useRef(null);
  const restartTimeoutRef = useRef(null);

  const clearRestart = () => {
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }
  };

  const startRestartTimer = () => {
    const audio = audioRef.current;

    if (!audio) return;

    clearRestart();

    restartTimeoutRef.current = setTimeout(() => {
      audio.currentTime = 0;

      audio.play().catch((error) => {
        console.log("Музыка не перезапустилась:", error);
      });

      startRestartTimer();
    }, 255000);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
        clearRestart();
      } else if (play) {
        audio.play().catch((error) => {
          console.log("Музыка не возобновилась:", error);
        });

        startRestartTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [play]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    clearRestart();

    if (play) {
      audio.volume = 0.4;
      audio.currentTime = 0;

      audio
        .play()
        .then(() => {
          startRestartTimer();
        })
        .catch((error) => {
          console.log("Музыка не запустилась:", error);
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      clearRestart();
    };
  }, [play]);

  useEffect(() => {
    return () => {
      clearRestart();

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return <audio ref={audioRef} src={weddingMusic} loop />;
}

export default MusicPlayer;
