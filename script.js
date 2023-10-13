let numImgs;

// populate initial media here
let imageUrls = [];
let textUrls = [];
//add images
for (let i = 0; i < numImgs; i++) {
  let url = "/assets/img/" + i + ".jpeg";
  imageUrls.push(url);
}

let lower = Math.min(imageUrls.length, textUrls.length);

for (let i = 0; i < lower; i++) {
  var p1 = new p5(page);

  p1.imageUrl = textUrls[i];
  p1.textUrl = imageUrls[i];
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
