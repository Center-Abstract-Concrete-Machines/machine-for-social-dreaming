var page = function (p) {
  p.img, p.txt, p.p5img, p.p5txt, p.font;
  p.images = [];
  p.texts = [];

  p.preload = function () {
    p.font = p.loadFont("/assets/fonts/Spectral-Regular.ttf");
    p.p5img = p.loadImage(p.imageUrl);
    p.p5txt = p.loadStrings(p.stringUrl);
  };

  p.setup = function () {
    window._p5Instance = p;

    p.img = new ImageMedia(p.p5img);
    p.txt = new LeftText(p.p5txt);

    p.noLoop();
    p.pixelDensity(1);
    p.createCanvas(w, h);
    color1 = new Riso(col1);
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
      this.dither = p.random(["atkinson", "bayer", "floydsteinberg"]);
      this.media = media;
      this.h = this.media.height;
      this.side = p.imgSide;
      this.alpha = 100;
      // this.alpha = random(50, 200);
      this.w = this.media.width;

      this.pos = p.createVector(p.random(p.w / 4), p.random(0, h - this.h));
      this.init();
    }
    init() {
      if (this.side == "right") {
        this.pos.x += w / 2;
      }
    }
    show() {
      let pix = ditherImage(this.media, this.dither, 10);
      color1.fill(this.alpha);
      color1.image(pix, this.pos.x, this.pos.y, this.w, this.h);
    }
  }

  class TextMedia {
    constructor(txt) {
      this.leading = p.random(5, 20);
      this.pos = p.createVector(0, p.random(20, 400));
      this.text = txt;
      this.h = h;
      this.side = p.txtSide;
      this.w = w / 2;
      //this.align = (p.random([p.LEFT, p.CENTER, p.RIGHT]), p.TOP);
      this.size = 20;
      //  this.getSize();
      this.init();
    }

    init() {
      if (this.side == "right") {
        this.pos.x += w / 2;
      }
    }
    getSize() {
      this.size = 50;
      // not done with get size !
      // while (b.h<)
      // let b = p.font.textBounds(this.text,0,0,this.h,this.w,this.size);
    }

    show() {
      // draw color2

      // draw color1
      color1.textAlign(p.LEFT, p.TOP);
      color1.textSize(this.size);
      color1.textFont(p.font);
      color1.textLeading(this.leading);
      color1.fill(255);
      color1.noStroke();
      color1.text(this.text, this.pos.x, this.pos.y, this.w, this.h);
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
