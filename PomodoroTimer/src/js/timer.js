import { minutes, seconds } from "./content.js";

let waitTimer;

const startClock = () => {
  stopClock();
  waitTimer = setInterval(playTimer, 1000);
};

const stopClock = () => {
  clearInterval(waitTimer);
};

const playTimer = () => {
  let minutos = Number(minutes.textContent);
  let segundos = Number(seconds.textContent);

  if (segundos <= 0) {
    minutos = minutes.innerText = minutos - 1;
    segundos = 60;
  }

  const secondsResult = (seconds.innerText = segundos - 1);

  if (secondsResult < 10) {
    seconds.innerText = "0" + secondsResult;
  }

  if (minutos < 10) {
    minutes.innerText = "0" + minutos;
  }

  if (minutes.innerText == 0 && seconds.innerText == 0) {
    stopClock();
    minutes.innerText = "25";
    seconds.innerText = "00";
    play.classList.remove("hidden");
    pause.classList.add("hidden");
    return alert("Tempo esgotado");
  }
};

export { startClock, stopClock };
