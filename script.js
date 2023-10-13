let numImgs = 41;
let numTxts = 12;

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
for (let i = 1; i < numTxts + 1; i++) {
  let url = "/assets/txt/" + i + ".txt";

  textUrls.push(url);
}

shuffle(textUrls);

let lower = Math.min(imageUrls.length, textUrls.length);

for (let i = 0; i < lower; i++) {
  var p1 = new p5(page);
  p1.imageUrl = imageUrls[i];
  console.log(p1.imageUrl);
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
