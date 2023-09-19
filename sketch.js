let images = ["1.gif", "2.png"];
let media = [];
let texts = ["dream.txt"];
let dream;
let font;
function preload() {
  font = loadFont("Spectral-Regular.ttf");
  for (let i of images) {
    let img = loadImage("/assets/" + i);
    let m = new MediaEvent("image", img);
    media.push(m);
  }

  for (let t of texts) {
    let txt = loadStrings("/assets/" + t);
    let m = new MediaEvent("text", txt);
    media.push(m);
  }
}

function setup() {
  textFont(font);
  createCanvas(window.innerWidth, window.innerHeight);
  dream = new Dream(frameCount, media);
}

function draw() {
  background(0);
  dream.show();
}
