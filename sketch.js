
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rop2,rope3,rope4,rope5;
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options = {
		isStatic: true
	}

	roof = Bodies.rectangle(400,350,250,20,options);
	World.add(world,roof);
	bob1 = new Bob(300,600,25);
	bob2 = new Bob(350,600,25);
	bob3 = new Bob(400,600,25);
	bob4 = new Bob(450,600,25);
	bob5 = new Bob(500,600,25);
	rope1 = new Rope(bob1.body,roof,-100,0)
	rope2 = new Rope(bob2.body,roof,-50,0)
	rope3 = new Rope(bob3.body,roof,0,0)
	rope4 = new Rope(bob4.body,roof,50,0)
	rope5 = new Rope(bob5.body,roof,100,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  fill("Black")
  rect(roof.position.x,roof.position.y,350,20);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-25,y:-30})
	}
}

