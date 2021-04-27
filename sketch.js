let len = 200;
let picks = [];
let minX, maxX, minY, maxY, bgcl, lncl;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcl = CSS_COLOR_NAMES[int(random(0, CSS_COLOR_NAMES.length))];
  lncl = CSS_COLOR_NAMES[int(random(0, CSS_COLOR_NAMES.length))];
  if (width < height) {
    minX = -width / 2;
    maxX = width / 2;
  } 
  else {
    minY = -height / 2;
    maxY = height / 2;
  }
  picks.push(new Toothpick(0, 0, 1, lncl));
  frameRate(1);
}

function draw() {
  background(bgcl);
  translate(width / 2, height / 2);
  let factor;
  if (width < height) {
    factor = float(width) / (maxX - minX);
  } 
  else {
    factor = float(height) / (maxY - minY);
  }

  scale(factor);
  let next = [];

  for (let pick of picks) {
    pick.show();
    if (width < height) {
      minX = min(pick.ax, minX);
      maxX = max(pick.ax, maxX);
    } 
    else {
      minY = min(pick.ay, minY);
      maxY = max(pick.ay, maxY);
    }
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
  if (frameCount > 100) {
    noLoop();
  }
}
