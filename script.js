const sounds = [
  new Audio("./sounds/boom.wav"),
  new Audio("./sounds/clap.wav"),
  new Audio("./sounds/hihat.wav"),
  new Audio("./sounds/kick.wav"),
  new Audio("./sounds/openhat.wav"),
  new Audio("./sounds/ride.wav"),
  new Audio("./sounds/snare.wav"),
  new Audio("./sounds/tink.wav"),
  new Audio("./sounds/tom.wav"),
];

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      {
        sounds[0].currentTime = 0;
        sounds[0].play();
      }
      break;

    case "s":
      {
        sounds[1].currentTime = 0;
        sounds[1].play();
      }
      break;

    case "d":
      {
        sounds[2].currentTime = 0;
        sounds[2].play();
      }
      break;
    case "f":
      {
        sounds[3].currentTime = 0;
        sounds[3].play();
      }
      break;

    case "g":
      {
        sounds[4].currentTime = 0;
        sounds[4].play();
      }
      break;

    case "h":
      {
        sounds[5].currentTime = 0;
        sounds[5].play();
      }
      break;
    case "j":
      {
        sounds[6].currentTime = 0;
        sounds[6].play();
      }
      break;

    case "k":
      {
        sounds[7].currentTime = 0;
        sounds[7].play();
      }
      break;

    case "l":
      {
        sounds[8].currentTime = 0;
        sounds[8].play();
      }
      break;
  }
});
