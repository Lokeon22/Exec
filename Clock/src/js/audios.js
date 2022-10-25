let beat = new Audio("./src/assets/witchersong.mp3");

/* Volume Controll */
range.addEventListener("change", () => {
  beat.volume = range.value / 100;
});

export { beat };
