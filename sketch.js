//Global variables or public so no scope issues
let xPos = 11;
let yPos = 7;

// Code that only needs to be run one time
function setup() {
  // init.cpp
  createCanvas(480, 640); // 480p resolution, but vertical
  background(95);
  frameRate(60);
//  window.alert("Please disable your adblocker to enjoy this content."); // Troll move to earn that AdSense revenue
  // Making details of the can
  // Can lip
  fill(80);
  rect(0, 0, 480, 40);
  // Can label
  fill(0, 120, 215);
  rect(100, 120, 280, 400);
  // Can label text
  fill(0, 0, 0);
  textFont('Segoe UI');
  textSize(15);
  text('Microsoft Word: Animate? Press any key to continue!', 35, 25)
  textAlign(CENTER);
  textSize(32);
  text('Office 365 Paints', 240, 170);
  textSize(15);
  text('Satisaction NOT guaranteed!', 240, 200);
  text('Activation key required.', 240, 480);
  textSize(10);
  text('Key not included.', 240, 500);
  // Can logo
  noStroke();
  fill(243, 79, 28);
  rect(170, 250, 70, 70);
  fill(127, 188, 0);
  rect(245, 250, 70, 70);
  fill(1, 166, 240);
  rect(170, 325, 70, 70);
  fill(255, 186, 1);
  rect(245, 325, 70, 70);

/* 
*  Removed; it looks better without the handle.
*  Code here for future reference.
*  
*  // Can handle
*  strokeWeight(10);
*  stroke(200, 200, 200);
*  noFill();
*  beginShape();
*    curveVertex(80, 45);
*    curveVertex(80, 45);
*    curveVertex(55, 300);
*    curveVertex(10, 550);
*    curveVertex(-10, 600);
*    curveVertex(-10, 600);
*  endShape();
*  // Reset changed values to original
*  strokeWeight(1);
*  stroke('black');
*/
  
  // Letting user know of animation
  console.log("Would you like to see this icon animated? Hold any key to see movement.");
  console.log("If done right, it could look like blue paint spilling out of a paint can!");
}

// An "int main()" of sorts, it holds the main program,
// which just calls all the defined functions.
function draw() {
  drawDoc1();
  drawDoc2();
  drawDoc3();
  drawDoc4();
  drawShadow();
  drawLetterPlate();
  drawW();
  // Only animate if user opts in
  if (keyIsPressed === true) {
    animate();
  }
}

// Gives feedback in terminal when they stop animating their design
function keyReleased() {
  let key0 = 0;
  if (key0 === 0) {
    console.log("There, your original design!");
  } 
  else {
    key0 = 0;
  }
}

// Draws the white W on the Word icon
function drawW(){
  fill(255, 255, 255);
  beginShape();
    vertex(xPos - 5, yPos + 7);
    vertex(xPos - 3, yPos + 7);
    vertex(xPos - 1, yPos + 10.5);
    vertex(xPos, yPos + 7);
    vertex(xPos + 1, yPos + 7);
    vertex(xPos + 2, yPos + 10.5);
    vertex(xPos + 4, yPos + 7);
    vertex(xPos + 6, yPos + 7);
    vertex(xPos + 3, yPos + 14);
    vertex(xPos + 2, yPos + 14);
    vertex(xPos + 1, yPos + 11);
    vertex(xPos, yPos + 11);
    vertex(xPos - 1, yPos + 14);
    vertex(xPos - 2, yPos + 14);
  endShape(CLOSE);
}

// Draws the blue square behind the W
function drawLetterPlate(){
  fill(24, 90, 189);
  rect(xPos - 6, yPos + 4, 14, 14)
}

// Draws a shadow behind the blue square
function drawShadow(){
  fill(11, 35, 71);
  rect(xPos, yPos + 5, 9, 14)
  noStroke();
}

// Draws the 4th rectangle of the document shape
// in the Word logo
function drawDoc1(){
  fill(16, 63, 145);
  rect(xPos, yPos, 18, 22);
}

// Draws the 3rd rectangle of the document shape
// in the Word logo
function drawDoc2(){
  fill(24, 90, 189);
  rect(xPos, yPos, 18, 16);
}

// Draws the 2nd rectangle of the document shape
// in the Word logo
function drawDoc3(){
  fill(43, 124, 211);
  rect(xPos, yPos, 18, 11);
}

// Draws the 1st rectangle of the document shape
// in the Word logo
function drawDoc4(){
  fill(65, 165, 238);
  rect(xPos, yPos, 18, 6);
}

// Word icons are drawn in a vertical pattern until
// randomly creating a new column
function animate() {
  let time1 = round(random(101)); // Ensures numbers up to 100 are generated and are rounded to the nearest integer
    if(time1 % 33 == 0) { // Essentially a 3/100 chance
      xPos = random(480); // Picks a random position to start the next column
      yPos = 0; // Resets column to start at the top
        /**********************************
        * Although y=7 is the original, 0 *
        * makes it look a bit nicer when  *
        * a lot of columns are generated, *
        * especially when going for the   *
        * paint bucket effect.            *
        **********************************/
  }
    else {
      yPos += random(10); // Adds some randomness to the column generation
  }
}


/***************************************
* These following lines of code        *
* aren't part of the main function(s)  *
* so I can test how user inputs and    *
* outputs would work. Ignore the code. *
***************************************/

// console.log("std::cout << \"It's too messy to try to convert the relative values over.\";");
// console.log("std::cout << \"So, instead,\";");
// console.log("std::cout << \"Enjoy this popup :)\";");
// window.alert("C++ says hi!");
