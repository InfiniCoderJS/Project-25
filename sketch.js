var paperBall
var ground, groundAsWallImg, groundAsWall2, groundAsWall3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall = new Paper(50,300,15,15)
	ground = new Ground(500,370,1000,15)
	groundAsWallImg = new GroundAsWallImg(725,170,150,15)
	groundAsWall2 = new GroundAsWall(742,310,15,70)
	groundAsWall3 = new GroundAsWall(858,310,15,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed()	
  
   paperBall.display()
   ground.display()
   groundAsWallImg.display()
  



	
   

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1,y:-2})
	}
}


