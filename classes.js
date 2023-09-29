class Dream {
  constructor(media) {
    this.mediaEvents = media; // an array of all media events
    this.order();
  }
  order() {
    let array = this.mediaEvents;
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

    this.mediaEvents = array;
  }

  load() {
    for (let m of this.mediaEvents) {
      m.load();
    }
  }
  show() {
    for (let m of this.mediaEvents) {
      m.show();
    }
  }
}

class MediaEvent {
  constructor(type, url) {
    this.pos = createVector(0, 0);
    this.url = url;
    this.media;
    this.type = type;
    this.alpha = random(100) + "%";
    this.dir = createVector(random);
  }
  load() {
    switch (this.type) {
      case "image":
        // code that puts the image to the DOM
        this.media = createImg(this.url);
        this.media.style("opacity", this.alpha);
        break;
      case "text":
        this.media = createP(this.url);
        // code that puts the text to the DOM
        break;
    }
    let pos = this.media.position();
    this.pos.x = pos.x;
    this.pos.y = pos.y;
  }
  show() {
    this.pos.add(0.01, 0.01);
    this.media.position(this.pos.x, this.pos.y);
    // switch (this.type) {
    //   case "image":
    //     // code that puts the image to the DOM
    //     let b = createImg(this.url);
    //     b.style("opacity", this.alpha);
    //     break;
    //   case "text":
    //     createP(this.url);
    //     // code that puts the text to the DOM
    //     break;
    // }
  }
}
