const Engine = Matter.Engine; //run engine
const World = Matter.World; // create physical world inside which objects will be present
const Bodies = Matter.Bodies;//create physical objects which inhabits physical world
var Box1 , Box2;
var Ground1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Box1 = new Box(240,100,50,100);
  Box2 = new Box(200,300,50,50);
  Ground1 = new Ground(200,390,400,20);

}

function draw() {
  background(0); 
  Engine.update(engine);
  Box1.display();
  Box2.display();
  Ground1.display();

}