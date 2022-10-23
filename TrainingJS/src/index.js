const countdownNewYear = () => {
  const dia = document.querySelector("#dia");
  const hora = document.querySelector("#hora");
  const minutos = document.querySelector("#minutos");
  const segundos = document.querySelector("#segundos");

  const newYear = new Date("Jan 1, 2023 00:00:00");

  const countdown = setInterval(() => {
    const now = new Date();

    const timeDifference = newYear - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    dia.innerText = days;
    hora.innerText = hours;
    minutos.innerText = minutes;
    segundos.innerText = seconds;

    if (timeDifference < 0) {
      clearInterval(countdown);
      dia.innerText = "0";
      hora.innerText = "0";
      minutos.innerText = "00";
      segundos.innerText = "00";
      return alert("Feliz Ano Novo");
    }
  }, 1000);
};

countdownNewYear();
