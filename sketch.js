let images = ["1.gif", "2.png"];
let media = [];
let texts = ["dream.txt"];
let dream;
let font;

function preload() {
  //  font = loadFont("Spectral-Regular.ttf");
  for (let i of images) {
    let url = "/assets/" + i;
    let m = new MediaEvent("image", url);
    media.push(m);
  }

  for (let t of texts) {
    let txt = loadStrings("/assets/" + t);
    let m = new MediaEvent("text", txt);
    media.push(m);
  }
}

function setup() {
  noCanvas();
  dream = new Dream(media);
  dream.load();
}

function draw() {
  dream.show();
}
