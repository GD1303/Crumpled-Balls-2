const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper; 
var ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1600, 680);
	engine = Engine.create();
  world = engine.world;
	Engine.run(engine);
  
  ground = new Ground(width/2, 670, width, 20);

  paper = new Paper(100, 450, 40);

  dustbin1 = new Dustbin(740, 570, 20, 200);
  dustbin2 = new Dustbin(560, 570, 20, 200);
  dustbin3 = new Dustbin1(650, 660, 200, 20);
}

function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();

  dustbin3.display();

  paper.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -70});
  }
}



