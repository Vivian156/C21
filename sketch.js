var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 4;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -3;

  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "green";
 
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "green";
  
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "green";
  
   object4 = createSprite(400,100,50,50);
   object4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  // if(isTouching(movingRect,object1)){
  //   movingRect.shapeColor = "blue";
  //   object1.shapeColor = "blue";
    
    
  // }
  // else {
  //   movingRect.shapeColor = "green";
  //   object1.shapeColor = "green";
  // } 
 bounceOff (movingRect,fixedRect);
  drawSprites();
}

// function isTouching(gameobj1,gameobj2) {
//   if (gameobj1.x - gameobj2.x < gameobj2.width/2 + gameobj1.width/2
//     && gameobj2.x - gameobj1.x < gameobj2.width/2 + gameobj1.width/2
//     && gameobj1.y - gameobj2.y < gameobj2.height/2 + gameobj1.height/2
//     && gameobj2.y - gameobj1.y < gameobj2.height/2 + gameobj1.height/2) {
//   return true;
// }
// else {
//   return false;
// }

// }
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}