const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,ball2,ball3,ball4,ball5,rope;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	rope1=new rope(ball,roof,-80,0);
	rope2=new rope(ball2,roof,-80,0);
	rope3=new rope(ball3,roof,-80,0);
	rope4=new rope(ball4,roof,-80,0);
	rope5=new rope(ball5,roof,-80,0);
    
	Engine.run(engine);
	ball = Bodies.circle(400,300,20,ball_option);
	World.add(world,ball);
	ball2 = Bodies.circle(400,340,20,ball_option);
	world.add(world,ball2);
	ball3 = Bodies.circle(400,380,20,ball_option);
	world.add(world,ball3);
	ball4 = Bodies.circle(400,420,20,ball_option);
	world.add(world,ball4);
	ball5 = Bodies.circle(400,460,20,ball_option);
	world.add(world,ball5);
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  display()
	var pointA=this.rope.badyA.position;
	var pointB=this.rope.badyB.position;
	  strokeWeight(2);
  
  //create ellipse shape for multiple bobs here
   ellipse(ball);
   ellipse(ball1);
   ellipse(ball2);
   ellipse(ball3);
   ellipse(ball4);
   ellipse(ball5);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
