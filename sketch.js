let a = 1;
let b = 1;
let c = 1;
let d = 1;
scene = 0;

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

function setup() {
  createCanvas(600, 400);
  flyingbat = loadImage('bat.png');
  axe = loadImage('pickaxe.png');
}

function draw() {
  outside();
  cat();
  bubble();
  image(axe, mouseX, mouseY, 50, 54);
  print(mouseX, mouseY);
  textAlign(CENTER);
  fill(224, 237, 38);
  stroke(0);
  strokeWeight(4);
  textSize(24);
  textStyle(BOLD);
  text('Welcome \nto the\n Creepy Caves!', 170, 145);


  if (scene == 1) {
    outside();
    cat();
    bubble();
    print(mouseX, mouseY);
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("Today, you'll \nmine for gems!", 170, 160);
  }

  if (scene == 2) {
    outside();
    cat();
    bubble();
    print(mouseX, mouseY);
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("When you find \nan area you want \nto mine...", 170, 155);
  }

  if (scene == 3) {
    outside();
    cat();
    bubble();
    print(mouseX, mouseY);
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("...click on \nthe area to reveal \nyour findings!", 170, 145);
  }

  if (scene == 4) {
    outside();
    cat();
    bubble();
    print(mouseX, mouseY);
    textAlign(CENTER);
    fill(224, 237, 38);
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textStyle(BOLD);
    text("Goodluck!", 170, 180);
  }

  if (scene == 5) {
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
    cave1();
    bat();
  }

  if (scene == 7) {
    cave2();
  }

  if (scene == 8) {
    cave1();
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
  fill(95);
  noStroke();
  circle(width / 4, height / 2, 500);
  fill(90);
  noStroke();
  circle(width / 4, height / 2, 490);
  fill(85);
  noStroke();
  circle(width / 4, height / 2, 480);
  fill(80);
  noStroke();
  circle(width / 4, height / 2, 470);
  fill(75);
  noStroke();
  circle(width / 4, height / 2, 460);
  fill(70);
  noStroke();
  circle(width / 4, height / 2, 450);
  fill(65);
  noStroke();
  circle(width / 4, height / 2, 440);
  fill(60);
  noStroke();
  circle(width / 4, height / 2, 430);
}

function cave2() {
  background(100);
  
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
  ellipse(160, 170, 50, 110);
  pop();

  //Right Ear
  push();
  ellipse(240, 170, 50, 110);
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
  circle(225, 160, a);
  circle(175, 160, a);
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
  vertex(250, 300);
  vertex(320 - c, 270 - c);
  vertex(315 - c, 260 - c);
  vertex(245, 290);
  endShape(CLOSE);
  pop();

  //   a = a + 0.2;
  //   if (a > 30) {
  //     a = 0;
  //   }

  //   b = b + 0.1;
  //   if (b > 15) {
  //     b = 0;
  //   }

  //   d = d + 0.6666;
  //   if (d > 100) {
  //     d = 0;
  // }
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
}
}