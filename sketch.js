const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1400,20);

   

    body1    = new Box(455,360,240,100);//885
    body2    = new Box(765,360,240,100);//335
    body3    = new Box(613.5,260,550,100);//550-480=70

    coloumn1 = new Box(330,300,20,200);
    coloumn2 = new Box(895,300,20,200);

    head2 = new Box(465,160,20,20);
    head3 = new Box(742,160,20,20);

    head4 = new Box(325,185,20,20);
    head5 = new Box(890,180,20,20); 
    head6 = new Box(610,120,70,30);
}

function draw() {
  background(0);  
  
  Engine.update(engine);

  
  ground.display();
  coloumn1.display();
  coloumn2.display();
  
  fill(255,255,255);

  triangle(325,140,310,160,340,160);//310+145 = 455
  triangle(610,110,575,150,645,150);
  triangle(890,140,875,160,905,160);//575+157= 73 2

  triangle(465,140,453,160,477,160);
  triangle(742,140,730,160,754,160);

  head2.display();
  head3.display();

  head4.display();
  head5.display();
  head6.display();

  body1.display();
  body2.display();
  body3.display();

 
}