
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width / 2,height - 50,width,10);

	dustbin1 = new Dustbin(550, height - 100, 10, 100);
	dustbin2 = new Dustbin(750, height - 100, 10, 100);

	dustbin3 = new Dustbin(650, height - 50, 200, 10);

	paper = new Paper();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 85,y : -85});
	}
}

