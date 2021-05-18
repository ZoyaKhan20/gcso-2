var car,wall,car2,wall2,car3,wall3;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(200,100,40,40);
  wall = createSprite(1100,100,40,80);
  car2 = createSprite(250,200,40,40);
  wall2 = createSprite(1100,200,40,80);
  car3 = createSprite(300,300,40,40);
  wall3 = createSprite(1100,300,40,80);
  car.velocityX = 5;
  car2.velocityX = 4;
  car3.velocityX = 3;
 speed=random(25,31);
 weight=random(400,1500);
}

function draw() {
  background("black");  
 
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed *speed/22509;
    if(deformation>180){
      car.shapeColor=color("yellow");
      wall.shapeColor=color("white");
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color("green");
      wall.shapeColor=color("white");
    }
   if(deformation<100)
   {
    car.shapeColor=color("red");
      wall.shapeColor=color("white");
   }
  }
  if(wall2.x-car2.x<(car2.width+wall2.width)/2)
  {
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed *speed/22509;
    if(deformation>84){
      car2.shapeColor=color("yellow");
      wall2.shapeColor=color("white");
    }
    if(deformation<84 && deformation>100)
    {
      car2.shapeColor=color("blue");
      wall2.shapeColor=color("white");
    }
   if(deformation<100)
   {
    car2.shapeColor=color("green");
      wall2.shapeColor=color("white");
   }
  }
  if(wall3.x-car3.x<(car3.width+wall3.width)/2)
  {
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed *speed/22509;
    if(deformation>134){
      car3.shapeColor=color("yellow");
      wall3.shapeColor=color("white");
    }
    if(deformation<134 && deformation>100)
    {
      car3.shapeColor=color("pink");
      wall3.shapeColor=color("white");
    }
   if(deformation<100)
   {
    car3.shapeColor=color("yellow");
      wall3.shapeColor=color("white");
   }
  }
  drawSprites();
}