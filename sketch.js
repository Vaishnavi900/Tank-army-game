var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(400,400);

  speed = random(223,321);
  weight = random(30,15);
  thickness = randome(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness);
    if(damage > 10);
    {
      bullet.shapeColor = color(255,0,0);
    }
  
  if(damage < 10 )
  {
   wall.shapeColor = color(230,230,0);
  }
  if(damage < 10)
  {
    wall.shapeColor = color(0,255.0);
  }
  }
  drawSprites();
}
function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;

}