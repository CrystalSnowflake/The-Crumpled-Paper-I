const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;

var paper;
var x = 630;
var y = 570;

function preload(){}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//paper ball and ground
  ground = new Ground();
	ball = new Paper(200, 400);
  
 
  bin1 = new Bin(x, y, 20, 100); //left bin
  bin2 = new Bin(x + 20, y + 80, 100, 20);
  bin3 = new Bin(x+100, y, 20, 100);
}

function draw() {
  background(rgb(255, 255, 255));
  Engine.update(engine)
  
  //displaying objects
  ball.display();
  ground.display();
  bin1.show();
  bin2.show();
  bin3.show();

  drawSprites();
 
}



