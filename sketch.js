let len = 150;
let picks = [];
// let minX;
// let maxX;
let minY;
let maxY;
let bgcl;
let lncl;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcl = CSS_COLOR_NAMES[int(random(0,CSS_COLOR_NAMES.length))];
  lncl = CSS_COLOR_NAMES[int(random(0,CSS_COLOR_NAMES.length))];
  // minX = -width / 2;
  // maxX = width / 2;
  minY = -height / 2;
  maxY = height / 2;
  picks.push(new Toothpick(0, 0, 1, lncl));
 
  // noLoop();
  // frameRate(1);
}

function draw() {
  background(bgcl);
  translate(width / 2, height / 2);
  // let factor = float(width)/(maxX - minX);
  let factor = float(width)/(maxY - minY);
  scale(factor);
  let next = [];

  for(let pick of picks) {
    pick.show();
    // minX = min(pick.ax, minX);
    // maxX = max(pick.ax, maxX);
    minY = min(pick.ay, minY);
    maxY = max(pick.ay, maxY);
    // cl = CSS_COLOR_NAMES[int(random(0,147))];
  }

  for (let pick of picks) {
    if (pick.newPick) {
      nextA = pick.createA(picks);
      nextB = pick.createB(picks);
      if (nextA != null) {
        next.push(nextA);
      }
      if (nextB != null) {
        next.push(nextB);
      }
      pick.newPick = false;
    }
  }
  
  picks = picks.concat(next);
  if(frameCount > 60) {
    noLoop();
    // picks = [];
  }
}

// function mousePressed() {
//   redraw();
// }
