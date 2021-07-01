//var btn_red;
//var btn_green;
var box
//var r = 0;
//var g = 0;
//var b = 0;

function setup() {
  createCanvas(400, 400);
  background(51);
  //box = createSprite(200,200,30,30);
 // btn_red=createButton ("Red");
  //btn_red.position(100,50);
  //btn_red.mousePressed(red_bg);
  

  //btn_green=createCanvas("Green");
 // btn_green.position(250,50);
  //btn_green.mousePressed(green_bg)

}















function draw() {
  if (keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  if (keyIsDown(LEFT_ARROW)){
    background("blue")
  }
  if (keyIsDown(UP_ARROW)){
    background("green")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("orange")
  }

  //drawSprites();

}

