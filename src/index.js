const btn = document.querySelector("#generatorBtn");
const container = document.querySelector(".container");
const generatedColor = document.querySelector(".generated-color");

const directions = [];
const gradients = ["none", "linear", "radial"];

btn.addEventListener("click", generateHexColor);

function generateHexColor() {
  let selectGradient = gradients[Math.floor(Math.random() * gradients.length)];
  generatedColor.textContent = determineBackground(selectGradient) + ";";
  container.setAttribute(
    "style",
    `background: ${determineBackground(selectGradient)};`
  );
}

function determineBackground(gradient) {
  if (gradient == "none") {
    return randomHex();
  } else {
    if (gradient == "linear") {
      let degrees = Math.floor(Math.random() * 360) + 1;
      return `${gradient}-gradient(${degrees}deg, ${randomHex()}, ${randomHex()})`;
    } else {
      return `${gradient}-gradient(${randomHex()}, ${randomHex()})`;
    }
  }
}

function randomHex() {
  return "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
}
