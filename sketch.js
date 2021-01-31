var fixedRect, movingRect;
var square1, square2, square3,square4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  square1=createSprite(100,100,50,50)
  square1.shapeColor = "blue"
  square2=createSprite(200,100,50,50)
  square2.shapeColor = "blue"
  square3=createSprite(300,100,50,50)
  square3.shapeColor = "blue"
  square4=createSprite(400,100,50,50)
  square4.shapeColor = "blue"

}

function draw() {
  background(0,0,0);  
  square3.x = World.mouseX;
  square3.y = World.mouseY;
if (isTouching(square3,square1)){
//   square3.shapeColor = "red";
// square1.shapeColor = "red";
text("Game Over",300,300)
}
else {
square3.shapeColor = "green";
square1.shapeColor = "green";


}
  
  drawSprites();
}

