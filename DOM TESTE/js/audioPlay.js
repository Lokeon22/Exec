export function AudioPlayer(play, setPlay, audio, plus) {
  const iconMusic = document.querySelector(plus);

  setPlay(!play);
  if (!play) {
    audio.current.volume = 0.2;
    audio.current.play();
    iconMusic.classList.add("animate-spin");
  } else {
    audio.current.pause();
    iconMusic.classList.remove("animate-spin");
  }
}
