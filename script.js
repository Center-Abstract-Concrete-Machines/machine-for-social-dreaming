let lower = Math.min(imageUrls.length, textUrls.length);

for (let i = 0; i < lower; i++) {
  var p1 = new p5(page);
  p1.imgUrlIndex = i;
  p1.txtUrlIndex = i;
}
