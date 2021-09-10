window.onload = () => {
  var seconds = 00;
  var miliseconds = 00;
  var minutes = 00;
  var milisecondsMarkup = document.getElementById("miliseconds");
  var secondsMarkup = document.getElementById("seconds");
  var minutesMarkup = document.getElementById("minutes");
  var buttonStart = document.getElementById("start");
  var buttonStop = document.getElementById("stop");
  var buttonReset = document.getElementById("reset");
  var placeholder = document.getElementById("placeholder");
  var interval;

  buttonStart.disabled = false;
  buttonStop.disabled = false;
  buttonReset.disabled = false;

  buttonStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    buttonStart.disabled = true;
    buttonStart.style.cursor = "default";
    buttonStop.disabled = false;
    buttonStop.style.cursor = "pointer";
    placeholder.style.color = "orange";
  };

  buttonStop.onclick = () => {
    clearInterval(interval);
    buttonStart.disabled = false;
    buttonStart.style.cursor = "pointer";
    buttonStop.disabled = true;
    buttonStop.style.cursor = "default";
  };

  buttonReset.onclick = () => {
    clearInterval(interval);
    miliseconds = "00";
    seconds = "00";
    minutes = "00";
    milisecondsMarkup.innerHTML = miliseconds;
    secondsMarkup.innerHTML = seconds;
    minutesMarkup.innerHTML = minutes;
    buttonStart.disabled = false;
    buttonStop.disabled = false;
    placeholder.style.color = "white";
  };

  startTimer = () => {
    miliseconds++;

    if (miliseconds <= 9) {
      milisecondsMarkup.innerHTML = "0" + miliseconds;
    }

    if (miliseconds > 9) {
      milisecondsMarkup.innerHTML = miliseconds;
    }

    if (miliseconds > 99) {
      seconds++;
      secondsMarkup.innerHTML = "0" + seconds;
      miliseconds = 0;
      milisecondsMarkup.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      secondsMarkup.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      minutesMarkup.innerHTML = "0" + minutes;
      seconds = 0;
      secondsMarkup.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      minutesMarkup.innerHTML = minutes;
    }
  };
};
