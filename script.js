const a = document.querySelector("kbd");

const sound = new Audio("./sounds/boom.wav");

window.addEventListener("keypress", (e) => {
  if (e.keyCode === 97) {
    sound.play();
  }
});
