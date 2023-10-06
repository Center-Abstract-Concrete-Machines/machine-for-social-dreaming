var page = function (p) {
  p.img, p.txt;
  p.p5img, p.p5txt;

  p.font;
  p.images = [];
  p.texts = [];
  p.preload = function () {
    p.font = p.loadFont("/assets/fonts/Spectral-Regular.ttf");

    let url = "/assets/" + imageUrls[p.imgUrlIndex];
    p.p5img = p.loadImage(url);
    p.p5txt = p.loadStrings("/assets/" + textUrls[p.txtUrlIndex]);
  };

  p.setup = function () {
    window._p5Instance = p;

    p.img = new ImageMedia(p.p5img);

    p.txt = new LeftText(p.p5txt);

    p.noLoop();
    p.pixelDensity(1);
    p.createCanvas(w, h);
    color1 = new Riso(col1);
    color2 = new Riso(col2);
  };

  p.draw = function () {
    p.background(255);
    clearRiso();

    p.img.show();
    p.txt.show();

    drawRiso();
    // exportRiso();
  };

  class ImageMedia {
    constructor(media) {
      this.pos = p.createVector(0, 0);
      this.media = media;
      this.h = this.media.height;
      this.alpha = 255;
      // this.alpha = random(50, 200);
      this.w = this.media.width;
    }

    show() {
      //    let pix = extractRGBChannel(this.media, "blue");

      let pix = ditherImage(this.media, "floydsteinberg", 10);
      color1.fill(this.alpha);
      color1.image(pix, 0, 0, this.w, this.h);
    }
  }

  class TextMedia {
    constructor(txt) {
      this.leading = 30;
      this.pos = p.createVector(0, this.leading);
      this.text = txt;
      this.h = h;
      this.w = w / 2;
      this.align =
        (p.random([p.LEFT, p.CENTER, p.RIGHT]), p.random([p.TOP, p.BOTTOM]));
      this.size;
      this.getSize();
    }
    getSize() {
      
      this.size = 50;
      let b; 
      while (b.h<)
      let b = p.font.textBounds(this.text,0,0,this.h,this.w,this.size);
      
    }

    show() {
      // draw color2
      color2.textAlign(p.LEFT, p.BOTTOM);
      color2.textSize(this.size);
      color2.textFont(p.font);
      color2.textLeading(this.leading);
      color2.fill(255);
      color2.text(this.text, this.pos.x, this.pos.y, this.w, this.h);
      // draw color1
      color1.textAlign(p.LEFT, p.BOTTOM);
      color1.textSize(this.size);
      color1.textFont(p.font);
      color1.textLeading(this.leading);
      color1.stroke(255);
      color1.noFill();
      color1.text(this.text, this.pos.x, this.pos.y, this.w, this.h);

      color1.cutout(color2);
    }
  }
  class LeftText extends TextMedia {
    constructor(txt) {
      super(txt);
      this.w = w / 2;
      this.align =
        (p.random([p.LEFT, p.CENTER, p.RIGHT]), p.random([p.TOP, p.BOTTOM]));
    }
  }
};
