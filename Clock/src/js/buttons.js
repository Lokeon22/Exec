import {
  minutes,
  seconds,
  play,
  pause,
  resete,
  plus,
  decrease,
  unmuted,
  muted,
} from "./content.js";

import { startClock, stopClock } from "./timer.js";

export function buttonsClick() {
  let beat = new Audio("./src/assets/witchersong.mp3");

  unmuted.addEventListener("click", () => {
    unmuted.classList.add("hidden");
    muted.classList.remove("hidden");
    beat.play();
  });

  muted.addEventListener("click", () => {
    muted.classList.add("hidden");
    unmuted.classList.remove("hidden");
    beat.pause();
  });

  play.addEventListener("click", () => {
    play.classList.add("hidden");
    pause.classList.remove("hidden");
    startClock();
  });

  pause.addEventListener("click", () => {
    play.classList.remove("hidden");
    pause.classList.add("hidden");
    stopClock();
  });

  resete.addEventListener("click", () => {
    stopClock();
    pause.classList.add("hidden");
    play.classList.remove("hidden");
    minutes.innerText = "30";
    seconds.innerText = "00";
  });

  plus.addEventListener("click", () => {
    let minutos = Number(minutes.textContent);

    minutes.innerText = minutos + 5;

    if (minutes.innerText > 60) {
      minutes.innerText = "05";
      seconds.innerText = "00";
    }
  });

  decrease.addEventListener("click", () => {
    let minutos = Number(minutes.textContent);

    minutes.innerText = minutos - 5;

    if (minutes.innerText < 5) {
      minutes.innerText = "60";
      seconds.innerText = "00";
    }
  });
}
