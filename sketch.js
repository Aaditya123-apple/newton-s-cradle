const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	var bob,bob2,bob3,bob4,bob5,ground,rope;
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob = new Bob(300,370,20);
	bob2 = new Bob(320,370,20);
	bob3 = new Bob(340,370,20);
    bob4 = new Bob(360,370,20);
    bob5 = new Bob(380,370,20)
	ground = new Ground(350,190,230,15)
	rope1 = new Rope(bob.body,ground.body,-80,0)
	rope2 = new Rope(bob2.body,ground.body,-40,0)
	rope3 = new Rope(bob3.body,ground.body,0,0)
	rope4 = new Rope(bob4.body,ground.body,40,0)
	rope5 = new Rope(bob5.body,ground.body,80,0)
	


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  ground.display();
  bob.display();
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

if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob.body,bob.body.position,{x:-10,y:-10})
}

}