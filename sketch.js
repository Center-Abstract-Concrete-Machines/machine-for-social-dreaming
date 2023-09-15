
let images = ["1.gif", "2.png"];
let media = [];
let texts = ["dream.txt"];

function preload() {
  let index = 0;
  for (let i of images) {
    media[index] = loadImage("/assets/" + i);
    index++;
  }
  
  for (let t of texts{
    media[index] = loadStrings("/assets/dream.txt");
    index++;
  }

  console.log(media);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  generateDream();
}

function draw() {
  
}

function generateDream() {

}