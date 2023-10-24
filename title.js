var title = function (p) {
  p.ccam, p.font, p.banner, p.credit;
  p.preload = function () {
    p.font = p.loadFont("/assets/fonts/Spectral-Regular.ttf");
    p.ccam = p.loadImage("/assets/img/title/ccam.png");
    p.banner = p.loadImage("/assets/img/title/banner.png");
    p.credit = p.loadStrings("/assets/img/title/credits.txt");
  };

  p.setup = function () {
    window._p5Instance = p;

    p.noLoop();
    p.pixelDensity(1);
    p.createCanvas(w, h);
    color1 = new Riso(col1);
  };

  p.draw = function () {
    p.background(255);
    clearRiso();

    color1.image(p.banner, w / 2, 100, p.banner.width / 3, p.banner.height / 3);
    // draw zine number

    color1.textAlign(p.CENTER);
    color1.textFont(p.font);
    color1.text("dream catalogue # _ _ _ _", w / 2, h - 12, w / 2, h);

    // draw credits
    color1.textAlign(p.LEFT);

    let line = 100;
    for (let c of p.credit) {
      color1.text(c, 0, line, w / 2, h);
      line += 12;
    }

    //draw logo
    let he = h / 5;
    color1.image(p.ccam, 0, h - he, p.ccam.width / 6, p.ccam.height / 6);
    drawRiso();
    // exportRiso();
  };
};
