
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,ground1;
var ball;
var radius = 40

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

  ground1= new Ground(600,700,1200,25)
  box1= new Box(750,100,70,70)
  box2= new Box(750,100,70,70)
  box3= new Box(750,100,70,70)
  box4= new Box(750,100,70,70)
  box5= new Box(750,100,70,70)
  box6= new Box(750,100,70,70)
  box7= new Box(750,100,70,70)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,radius,radius);

  ground1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  
  
}
function keyPressed(){
  if (keyCode === RIGHT_ARROW){
  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
}