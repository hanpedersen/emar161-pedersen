//Audio courtesy of freesound.org and YouTube

let b = 1;
let c = 1;
scene = 0;
let count = 0;
let firstcollide = true;
let firstcollide1 = true;
let firstcollide2 = true;
let firstcollide3 = true;
let firstcollide4 = true;
let firstcollide5 = true;
let firstcollide6 = true;
let whichgem = 0;
let whichgem1 = 0;
let whichgem2 = 0;
let whichgem3 = 0;
let whichgem4 = 0;
let whichgem5 = 0;
let whichgem6 = 0;

var img;
var vel = 0;
var r, g, h, i, j, e, f, k, l, a, d;

//bat
let index = 0;
let positions = [
  [0, 0],
  [115, 150],
  [230, 120],
  [290, 240],
  [330, 60],
  [450, 125],
  [650, 0],
  [330, 60],
  [115, 150],
];
let progress = 0.0;

//diamonds
let diamonds = [];

//phrases
var phrases = ["That's a rare one!", "Look a common stone!", "What a pretty gem!", "You're a fantastic miner!", "You're going to be rich!", "Great work!"];

function preload() {
  let diamond1 = loadImage('pink1.png');
  let diamond2 = loadImage('orange1.png');
  let diamond3 = loadImage('purple1.png');
  let diamond4 = loadImage('green1.png');
  let diamond5 = loadImage('blue1.png');
  let diamond6 = loadImage('yellow1.png');
  diamonds = [diamond1, diamond2, diamond3, diamond4, diamond5, diamond6];

  drip = loadSound('cave.wav');
  speech = loadSound('speech.mp3');
  sparkle = loadSound('sparkle.wav');
}

function setup() {
  createCanvas(600, 400);
  flyingbat = loadImage('bat.png');
  axe = loadImage('pickaxe.png');
  stalactite = loadImage('stalactite.png');
  ghostie = loadImage('ghost.png');

  //axe
  img1 = new pickaxe();
  img2 = new mine();
  img3 = new mine();

  //circles
  circ1 = new circles();
  circ2 = new circles();
  circ3 = new circles();
  circ4 = new circles();
  circ5 = new circles();
  circ6 = new circles();
  circ7 = new circles();
  circ8 = new circles();

  button = createButton('Go Outside');
  button.position(10, 370);
  button.mousePressed(change);
}

function draw() {
   if (!speech.isPlaying()) {
      speech.play();
    } 
  let randomDiamonds = random(diamonds);
  button.hide();
  outside();
  cat();
  bubble();
  textAlign(CENTER);
  fill(224, 237, 38);
  stroke(0);
  strokeWeight(4);
  textSize(24);
  textStyle(BOLD);
  text('Welcome \nto the\n Creepy Caves!', 170, 145);

  if (scene == 1) {
    button.hide();
    outside();
    cat();
    bubble();
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("Today, you'll \nmine for gems!", 170, 160);
  }

  if (scene == 2) {
    button.hide();
    outside();
    cat();
    bubble();
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("When you find \nan area you want \nto mine...", 170, 155);
  }

  if (scene == 3) {
    button.hide();
    outside();
    cat();
    bubble();
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("...hover over \nthe area to reveal \nyour findings!", 170, 145);
  }

  if (scene == 4) {
    button.hide();
    outside();
    cat();
    bubble();
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("Good luck!", 170, 180);
  }

  if (scene == 5) {
    speech.stop();
    button.hide();
    cursor();
    outside();
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("Choose your cave!", 300, 380);
  }

  if (scene == 6) {
    speech.stop();
    button.show();
    cave1();
    bat();
    noCursor();
    noFill();
    interaction();
  }

  if (scene == 7) {
    speech.stop();
    button.show();
    cave2();
    noCursor();
    noStroke();
    noFill();
    interaction();
  }

  if (scene == 8) {
    speech.stop();
    button.show();
    cave1();
    ghost();
    noCursor();
    noFill();
    interaction();
  }
}

function bubble() {
  fill(255);
  strokeWeight(3);
  stroke(0);
  triangle(333, 234, 218, 234, 272, 192);
  ellipse(170, 170, 250, 200);
}

function outside() {
  background(14, 154, 196);
  noStroke();
  fill(53, 168, 40);
  arc(300, 290, 1700, 500, PI, TWO_PI);
  fill(72, 79, 71);
  arc(300, 310, 1200, 500, PI, TWO_PI);
  fill(0);
  ellipse(125, 240, 100, 200);
  ellipse(300, 220, 100, 200);
  ellipse(475, 240, 100, 200);
  fill(53, 168, 40);
  arc(300, 400, 750, 300, PI, TWO_PI);
}

function cave1() {
  background(100);

  if (!drip.isPlaying()) {
      drip.play();
    }

  fill(95);
  noStroke();
  circle(width / 2, height / 2, 500);
  fill(90);
  noStroke();
  circle(width / 2, height / 2, 490);
  fill(85);
  noStroke();
  circle(width / 2, height / 2, 480);
  fill(80);
  noStroke();
  circle(width / 2, height / 2, 470);
  fill(75);
  noStroke();
  circle(width / 2, height / 2, 460);
  fill(70);
  noStroke();
  circle(width / 2, height / 2, 450);
  fill(65);
  noStroke();
  circle(width / 2, height / 2, 440);
  fill(60);
  noStroke();
  circle(width / 2, height / 2, 430);
}

function cave2() {
  background(100);

  if (!drip.isPlaying()) {
      drip.play();
    }

  push();
  scale(0.7);
  translate(50, 100);
  fill(95);
  noStroke();
  circle(width / 4, height / 2, 450);
  fill(90);
  noStroke();
  circle(width / 4, height / 2, 440);
  fill(85);
  noStroke();
  circle(width / 4, height / 2, 430);
  fill(80);
  noStroke();
  circle(width / 4, height / 2, 420);
  fill(75);
  noStroke();
  circle(width / 4, height / 2, 410);
  fill(70);
  noStroke();
  circle(width / 4, height / 2, 400);
  fill(65);
  noStroke();
  circle(width / 4, height / 2, 390);
  fill(60);
  noStroke();
  circle(width / 4, height / 2, 380);
  pop();

  push();
  scale(0.7);
  translate(200, 100);
  fill(95);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 450);
  fill(90);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 440);
  fill(85);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 430);
  fill(80);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 420);
  fill(75);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 410);
  fill(70);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 400);
  fill(65);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 390);
  fill(60);
  noStroke();
  circle(width / 4 + width / 2, height / 2, 380);
  pop();
}

function cat() {
  push();
  translate(230, 50);

  //Bunny aesthetic choices
  strokeWeight(3);
  stroke(0);
  fill(224, 237, 38);

  //Body
  push();
  ellipse(200, 320, 200, 230);
  pop();

  //Left Ear
  push();
  ellipse(160, 140, 50, 110);
  pop();

  //Right Ear
  push();
  ellipse(240, 140, 50, 110);
  pop();

  //Head
  push();
  fill(224, 237, 38);
  ellipse(200, 180, 150);
  pop();

  //Open Mouth
  fill(224, 237, 38);
  push();
  circle(200, 200 + b, 30);
  pop();
  fill(0);
  push();
  circle(200, 200 + b, 20);
  pop();

  //Cheeks
  push();
  fill(224, 237, 38);
  circle(215, 200, 30);
  circle(185, 200, 30);
  pop();

  //Whiskers
  push();
  line(180, 195, 160, 185);
  line(180, 200, 150, 200);
  line(180, 205, 160, 215);
  line(220, 195, 240, 185);
  line(220, 200, 250, 200);
  line(220, 205, 240, 215);
  pop(0);

  //Eyes
  fill(255);
  push();
  ellipse(225, 155, 30, 50);
  ellipse(175, 155, 30, 50);
  pop();

  //Nose
  fill(240, 29, 39);
  push();
  triangle(190, 183, 210, 183, 200, 205);
  pop();

  //Pupils
  fill(0);
  push();
  circle(225, 160, 15);
  circle(175, 160, 15);
  pop();

  //Arms
  push();
  fill(224, 237, 38);
  beginShape();
  vertex(80 + c, 260 - c);
  vertex(150, 290);
  vertex(145, 300);
  vertex(75 + c, 270 - c);
  endShape(CLOSE);
  beginShape();
  vertex(245, 300);
  vertex(305, 340);
  vertex(310, 330);
  vertex(250, 290);
  endShape(CLOSE);
  pop();

  b = b + 0.2;
  if (b > 10) {
    b = 0;
  }

  c = c + 0.2;
  if (c > 30) {
    c = 0;
  }

  pop();
}

function bat() {
  let next_index = (index + 1) % positions.length;
  let b = lerp(positions[index][0], positions[next_index][0], progress);
  let c = lerp(positions[index][1], positions[next_index][1], progress);

  image(flyingbat, b, c, 75, 51);

  progress += 0.015;
  if (progress >= 1) {
    index++;
    progress = 0;
    if (index >= positions.length)
      index = 0;
  }
}

function ghost() {
  let next_index = (index + 1) % positions.length;
  let b = lerp(positions[index][0], positions[next_index][0], progress);
  let c = lerp(positions[index][1], positions[next_index][1], progress);

  image(ghostie, b, c, 50, 55);

  progress += 0.015;
  if (progress >= 1) {
    index++;
    progress = 0;
    if (index >= positions.length)
      index = 0;
  }
}

function interaction() {
  let randomDiamonds = random(diamonds);
  print(mouseX, mouseY);
  circ8.display(530, 75);
  circ7.display(495, 25);
  circ6.display(410, 70);
  circ5.display(355, 25);
  circ4.display(245, 75);
  circ3.display(200, 35);
  circ2.display(110, 95);
  circ1.display(mouseX, mouseY);

  img2.display(-50, -20);
  img3.display(250, -20);
  img1.display(mouseX, mouseY);

  var j = dist(circ2.x, circ2.y, circ1.x, circ1.y);
  var i = dist(circ3.x, circ3.y, circ1.x, circ1.y);
  var h = dist(circ4.x, circ4.y, circ1.x, circ1.y);
  var k = dist(circ5.x, circ5.y, circ1.x, circ1.y);
  var l = dist(circ6.x, circ6.y, circ1.x, circ1.y);
  var a = dist(circ7.x, circ7.y, circ1.x, circ1.y);
  var d = dist(circ8.x, circ8.y, circ1.x, circ1.y);

  if (j < circ1.r + circ2.r) {
    if (firstcollide) {
      whichgem = floor(random(6));
      firstcollide = false;
    }
    sparkle.play();
    image(diamonds[whichgem], width / 2, height / 2);
    textSize(24);
    stroke(0);
    strokeWeight(4);
    textStyle(BOLD);
    fill(224, 237, 38);
    text(" " + phrases[whichgem], 150, 295);
  } else {
    firstcollide = true;
  }

  if (i < circ1.r + circ3.r) {
    if (firstcollide1) {
      whichgem1 = floor(random(6));
      firstcollide1 = false;
    }
    sparkle.play();
    image(diamonds[whichgem1], width / 2, height / 2);
    textSize(24);
    stroke(0);
    strokeWeight(4);
    textStyle(BOLD);
    fill(224, 237, 38);
    text(" " + phrases[whichgem1], 150, 295);
  } else {
    firstcollide1 = true;
  }

  if (h < circ1.r + circ4.r) {
    if (firstcollide2) {
      whichgem2 = floor(random(6));
      firstcollide2 = false;
    }
    sparkle.play();
    image(diamonds[whichgem2], width / 2, height / 2);
    textSize(24);
    stroke(0);
    strokeWeight(4);
    textStyle(BOLD);
    fill(224, 237, 38);
    text(" " + phrases[whichgem2], 150, 295);
  } else {
    firstcollide2 = true;
  }

  if (k < circ1.r + circ5.r) {
    if (firstcollide3) {
      whichgem3 = floor(random(6));
      firstcollide3 = false;
    }
    sparkle.play();
    image(diamonds[whichgem3], width / 2, height / 2);
    textSize(24);
    stroke(0);
    strokeWeight(4);
    textStyle(BOLD);
    fill(224, 237, 38);
    text(" " + phrases[whichgem3], 150, 295);
  } else {
    firstcollide3 = true;
  }

  if (l < circ1.r + circ6.r) {
    if (firstcollide4) {
      whichgem4 = floor(random(6));
      firstcollide4 = false;
    }
    sparkle.play();
    image(diamonds[whichgem4], width / 2, height / 2);
    textSize(24);
    stroke(0);
    strokeWeight(4);
    textStyle(BOLD);
    fill(224, 237, 38);
    text(" " + phrases[whichgem4], 150, 295);
  } else {
    firstcollide4 = true;
  }

  if (a < circ1.r + circ7.r) {
    if (firstcollide5) {
      whichgem5 = floor(random(6));
      firstcollide5 = false;
    }
    sparkle.play();
    image(diamonds[whichgem5], width / 2, height / 2);
    textSize(24);
    stroke(0);
    strokeWeight(4);
    textStyle(BOLD);
    fill(224, 237, 38);
    text(" " + phrases[whichgem5], 150, 295);
  } else {
    firstcollide5 = true;
  }

  if (d < circ1.r + circ8.r) {
    if (firstcollide6) {
      whichgem6 = floor(random(6));
      firstcollide6 = false;
    }
    sparkle.play();
    image(diamonds[whichgem6], width / 2, height / 2);
    textSize(24);
    stroke(0);
    strokeWeight(4);
    textStyle(BOLD);
    fill(224, 237, 38);
    text(" " + phrases[whichgem6], 150, 295);
  } else {
    firstcollide6 = true;
  }
}

function pickaxe() {

  this.r = 50;
  this.col = 255;

  this.display = function(x, y) {
    this.x = x;
    this.y = y;

    image(axe, mouseX, mouseY, 50, 54);
  }
}

function mine() {

  this.r = 25;
  this.col = 255;

  this.display = function(x, y) {
    this.x = x;
    this.y = y;

    image(stalactite, this.x, this.y, 400, 235);
  }
}

function circles() {

  noFill();
  noStroke();
  this.r = 10;

  this.display = function(x, y) {
    this.x = x;
    this.y = y;

    ellipse(this.x + 10, this.y + 10, this.r * 2);
  }
}

function change() {
  scene = 5;
}

function mousePressed() {
  // scene++;
  if (scene == 0) {
    scene = 1;
  } else if (scene == 1) {
    scene = 2;
  } else if (scene == 2) {
    scene = 3;
  } else if (scene == 3) {
    scene = 4;
  } else if (scene == 4) {
    scene = 5;
  } else if (scene == 5 && mouseX > 78 && mouseX < 170 && mouseY > 138 && mouseY < 277) {
    scene = 6;
  } else if (scene == 5 && mouseX > 250 && mouseX < 348 && mouseY > 121 && mouseY < 248) {
    scene = 7;
  } else if (scene == 5 && mouseX > 426 && mouseX < 522 && mouseY > 141 && mouseY < 268) {
    scene = 8;
  } else if (scene == 8 && mouseX > 90 && mouseX < 470 && mouseY > 0 && mouseY < 400) {
    scene = 7;
  } else if (scene == 6 && mouseX > 90 && mouseX < 470 && mouseY > 0 && mouseY < 400) {
    scene = 7;
  } else if (scene == 7 && mouseX > 0 && mouseX < 250 && mouseY > 75 && mouseY < 310) {
    scene = 6;
  } else if (scene == 7 && mouseX > 340 && mouseX < 560 && mouseY > 75 && mouseY < 310) {
    scene = 8;
  }
}