
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
//var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 400);
  
 
  monkey = createSprite(50,200,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,250,990,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
  
  var rand =  Math.round(random(1,100))
  console.log(rand)
}
function draw() {

  background(255);
  //text("Score: "+ score, 500,50);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time ="+ survivalTime,100,50)
  
  if (ground.x < 400){
      ground.x = ground.width/2;
     }
  
  if (keyDown("space")&&monkey.y >=209) {
    monkey.velocityY = -10;
    }
   monkey.velocityY = monkey.velocityY + 0.8
  //console.log(monkey.y);
   spawnBananas();
  spawnObstacle ();
  
  monkey.collide(ground);
  
 
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount%60===0){
  banana = createSprite(600,90,60,10);
  banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 130;
    banana.y = Math.round(random(10,100));
    //console.log(monkey.depth);
    //console.log(banana.depth);
    banana.depth = monkey.depth;
    monkey.depth =monkey.depth+1
}
}


function spawnObstacle (){ 
 if(frameCount % 80 === 0){
   obstacle = createSprite (600,205,10,40)
   obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
   obstacle.scale = 0.2;
   obstacle.lifetime = 200;
 }
}


