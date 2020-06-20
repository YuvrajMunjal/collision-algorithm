var fixedRectangle,movingRectangle

function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(100, 200, 50, 50);
  fixedRectangle = createSprite(300, 100, 50, 50);

  movingRectangle.shapeColor = "cyan" 
  fixedRectangle.shapeColor = "cyan" 

  fixedRectangle.debug = true;
  movingRectangle.debug = true;
}

function draw() {
  background("black")  ;  

movingRectangle.x = mouseX
movingRectangle.y = mouseY

if(movingRectangle.x - fixedRectangle.x <= movingRectangle.width/2 + fixedRectangle.width/2
  &&fixedRectangle.x - movingRectangle.x <= movingRectangle.width/2 + fixedRectangle.width/2
  &&movingRectangle.y - fixedRectangle.y <= movingRectangle.height/2 + fixedRectangle.height/2
  &&fixedRectangle.y - movingRectangle.y <= movingRectangle.height/2 + fixedRectangle.height/2)

{
movingRectangle.shapeColor = "blue" 
fixedRectangle.shapeColor = "blue" 


}

else
{
  movingRectangle.shapeColor = "cyan" 
  fixedRectangle.shapeColor = "cyan" 
}
drawSprites();
}