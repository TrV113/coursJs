const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// ******************************************************* //
// KeyPress event

const Keypresscontainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const zenitsu = document.getElementById("zenitsu");

const ring = () => {
  const audio = new Audio();
  audio.src = "enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    Keypresscontainer.style.background = "pink";
  } else if (e.key === "Enter") {
    zenitsu.style.transform = "translateX(-0px)";
    setTimeout(function () {
      document.getElementById("zenitsu").style.display = "none";
    }, 3000);
    ring(e.key);
  } else {
    Keypresscontainer.style.background = "black";
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-50px";
  }
});

// *******************************************************//

const inputName = document.querySelector('input[type="text"]');
const elo = document.getElementById("elo");
const select = document.querySelector("select");
const form = document.querySelector("form");
var audio2 = new Audio("");
let pseudo = "";
var audio = new Audio("elodie.mp3");
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  if (pseudo === "Elodie") {
    audio.currentTime = 5;
    audio.play();
    setInterval(function () {
      audio.pause();
    }, 6000);
  }
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3> Peudo : ${pseudo}</h3>
    <h4>Personnage préféré : ${language}, <br>
    Tu peux acceder à cette masterclass : <a href="vid.html">Vidéos trop stylé ( et j'ai galéré à coder alors clique stp mdr </a></h4>`;
  } else if (cgv.checked && language === "Rengoku" && pseudo === "Elodie") {
    document.getElementById("containeur").style.visibility = "visible";
  } else {
    alert("Veuillez accepter les CGV");
  }
});
