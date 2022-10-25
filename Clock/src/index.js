const minutes = document.querySelector("#minutos");
const seconds = document.querySelector("#segundos");

const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const resete = document.querySelector("#resete");
const plus = document.querySelector("#plus");
const decrease = document.querySelector("#decrease");

const unmuted = document.querySelector("#unmuted");
const muted = document.querySelector("#muted");

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
