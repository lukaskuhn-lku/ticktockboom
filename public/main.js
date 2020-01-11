let bombRunning = false;
const bombSound = document.getElementById("sound");
const tickSound = document.getElementById("ticktock");

$("#startbomb").click(() => {
  if (!bombRunning) startBomb();
});

$("#stopbomb").click(() => {
  if (bombRunning) stopBomb();
});

function startBomb() {
  setBackgroundColor("white");

  tickSound.loop = true;
  tickSound.play();

  bombRunning = true;
  console.log("Bomb started");
  changeBombLabel("Bomb is ticking");

  let min = parseInt($("#minTimeTxt").val());
  let max = parseInt($("#maxTimeTxt").val());

  console.log(min);
  console.log(max);
  let secondsToTick = randomIntFromInterval(min, max);

  console.log("Seconds ticking: " + secondsToTick);

  bombTicking(secondsToTick).then(() => {
    if (bombRunning) {
      tickSound.pause();
      tickSound.currentTime = 0;
      bombRunning = false;
      setBackgroundColor("#FF4F29");
      changeBombLabel("<b style='color: white;font-size: 150%'>BOOOOOOM!</b>");
      console.log("Boom!");
      bombSound.play();
    }
  });
}

function bombTicking(secondsToTick) {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      resolve(true);
    }, secondsToTick * 1000);
  });
}

function stopBomb() {
  setBackgroundColor("white");
  bombRunning = false;
  console.log("Bomb stopped");
  changeBombLabel("Bomb is defused");
}

function changeBombLabel(text) {
  $("#bombtext").html(text);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setBackgroundColor(colorCode) {
  $("body").css({ backgroundColor: colorCode });
}
