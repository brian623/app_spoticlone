import { useCtx } from "../../contexts/context";
import {
  backMusicIcon,
  loopIcon,
  nextMusicIcon,
  pauseIcon,
  randomIcon,
  reproducirIcon,
} from "../../public/Svgs";
import { useEffect, useState } from "react";

const Reproductor = () => {
  const [audio, setAudio] = useState(null);
  const [paused, setPaused] = useState(true);
  const { reproductor } = useCtx();
  useEffect(() => {
    setAudio(new Audio(reproductor ? reproductor : ""));
    audio && audio.play();
    audio && setPaused(false);
  }, [reproductor]);
  useEffect(() => {
    audio && audio.play();
  }, [audio]);
  useEffect(() => {
    document.addEventListener(
      "play",
      function (e) {
        var audios = document.getElementsByTagName("audio");
        for (var i = 0, len = audios.length; i < len; i++) {
          if (audios[i] != e.target) {
            audios[i].pause();
          }
        }
      },
      true
    );
    return () => {
      document.addEventListener(
        "play",
        function (e) {
          var audios = document.getElementsByTagName("audio");
          for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
              audios[i].pause();
            }
          }
        },
        true
      );
    };
  }, []);

  // reproducir
  const reproducir = () => {
    audio?.play();
    setPaused(false);
  };
  // pausar
  const pause = () => {
    audio?.pause();
    setPaused(true);
  };
  return (
    <div className="absolute text-white z-50 bottom-0 px-5 h-20 flex items-center border-t border-[#3a3a3a] bg-[#181818] w-full">
      <div className="mx-auto">
        <div>
          <button
            className="mr-4"
            onClick={() => {
              audio?.play();
            }}
          >
            {randomIcon}
          </button>
          <button
            onClick={() => {
              audio?.play();
            }}
          >
            {backMusicIcon}
          </button>
          {paused ? (
            <button
              className="bg-white mx-5 text-black rounded-full p-2"
              onClick={() => reproducir()}
            >
              {reproducirIcon}
            </button>
          ) : (
            <button
              className="bg-white mx-5 text-black rounded-full p-2"
              onClick={() => pause()}
            >
              {pauseIcon}
            </button>
          )}
          <button
            onClick={() => {
              audio?.play();
            }}
          >
            {nextMusicIcon}
          </button>
          <button className="ml-4" onClick={() => {}}>
            {loopIcon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reproductor;
