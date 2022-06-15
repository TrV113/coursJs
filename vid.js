let video = document.querySelector(".video");
let juice = document.querySelector(".orange-juice");
let btn = document.getElementById("play-pause");
let muteBtn = document.getElementById("mute");
let volumeslider = document.getElementById("volumeSlider");
let orangeBar = document.querySelector(".orange-bar");

function togglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function () {
  togglePlayPause();
};

video.addEventListener("timeupdate", function () {
  let juicePos = video.currentTime / video.duration;

  juice.style.width = juicePos * 100 + "%";

  if (video.ended) {
    btn.className = "play";
  }
});

muteBtn.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = "Mute";
  } else {
    video.muted = true;
    muteBtn.innerHTML = "Unmute";
  }
});

volumeslider.addEventListener("change", function () {
  video.volume = volumeslider.value / 100;
});

let rect = orangeBar.getBoundingClientRect();
console.log(rect);

let largeur = rect.width;

orangeBar.addEventListener("click", function (e) {
  let x = e.clientX - rect.left;

  let widthPercent = (x * 100) / largeur;

  let currentTimeTrue = (widthPercent * 63) / 100;

  video.currentTime = currentTimeTrue;
  juice.style.width = widthPercent + "%";
});
