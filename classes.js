// class Dream {
//   MediaEvent[] mediaEvents;
//   getMediaEvents(int timeStamp) : MediaEvent[] {

//   }
// }

class Dream {
  constructor(start, media) {
    this.duration = random(33 * 60 * 1);
    this.startTime = start;
    this.numEvents = media.length; // hardcoded right now
    this.eventLength = this.duration / this.numEvents; // a base unit for pacing dreams
    this.mediaEvents = media;
    this.overlap = 0.5; // generic percentage of overlap during event transitions
    this.makeSchedule();
  }
  makeSchedule() {
    let td = this.startTime;
    for (let m of this.mediaEvents) {
      m.startTime = td;
      m.endTime = td + this.eventLength;
      td += this.eventLength;
      m.duration = this.eventLength;
      m.transTime = random(this.eventLength / 2);
      console.log(m.startTime, m.endTime);
    }
  }
  show() {
    for (let m of this.mediaEvents) {
      if (m.startTime < frameCount && m.endTime > frameCount) {
        m.show();
      }
    }
  }
}

class MediaEvent {
  constructor(type, url) {
    this.startTime;
    this.endTime;
    this.duration;
    this.type = type;
    this.transTime;
    this.url = url;
    this.alpha = 255;
  }
  fade() {
    switch (this.type) {
      case "image":
        this.url.tint;
      case "text":
    }
  }
  show() {
    switch (this.type) {
      case "image":
        image(this.url, 0, 0, width, height);
      case "text":
        fill(255);
        text(this.url, 0, height / 2);
    }
  }
  animate() {}
}
