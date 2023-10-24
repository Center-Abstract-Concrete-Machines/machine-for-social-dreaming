let numImgs = 41;
let numTxts = 19;

// populate initial media here
let imageUrls = [];
let textUrls = [];
//add images
for (let i = 1; i < numImgs + 1; i++) {
  let url = "/assets/img/" + i + ".jpg";
  imageUrls.push(url);
}

shuffle(imageUrls);

//add texts
for (let i = 1; i < numPages + 1; i++) {
  let url = "/assets/txt/" + i + ".txt";

  textUrls.push(url);
}
//shuffle the texts
shuffle(textUrls);
// take lower number of media URL arrays
let lower = Math.min(imageUrls.length, textUrls.length);
//make title page
var p2 = new p5(title);
//populate pages
for (let i = 0; i < lower; i++) {
  var p1 = new p5(page);
  p1.imgSide;
  p1.txtSide;
  let r = Math.random();
  if (r > 0.5) {
    p1.imgSide = "left";
    p1.txtSide = "right";
  } else {
    p1.imgSide = "right";
    p1.txtSide = "left";
  }
  p1.imageUrl = imageUrls[i];
  p1.stringUrl = textUrls[i];
}

// shuffle an array

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
