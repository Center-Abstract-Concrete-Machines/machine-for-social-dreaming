
let images = ["1.gif", "2.png"];
let media = [];
let texts = ["dream.txt"];



// class Dream {
//   MediaEvent[] medieEvents;
//   getMediaEvents(int timeStamp) : MediaEvent[] {

//   }
// }

// class MediaEvent {
//   double startTime;
//   double endTime;
//   MediaType type;
//   URL url;
// }

function preload() {
  let index = 0;
  for (let i of images) {
    media[index] = loadImage("/assets/" + i);
    index++;
  }
  
  for (let t of texts) {
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
  const mediaEvent = {
    startTime: 0,
    endTime: 1200,
    url: "1.gif",
    type: "image"
  };


}

function generateDream() {

}