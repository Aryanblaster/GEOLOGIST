const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var iron;
var rubber;
var stone1,stone2,stone3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,580,1200,20);

     iron = new Iron(10,100);
    
     stone1 = new Stone(600,500,50,50)
     stone2 = new Stone(500,500,40,50)
     stone3 = new Stone(700,500,70,50)
    
     rubber1 = new Rubber(50,50,10);
     rubber2 = new Rubber(400,50,7);
     rubber3 = new Rubber(250,50,10);
     rubber4 = new Rubber(190,50,15);
     rubber5 = new Rubber(500,50,50);

     

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    ground.display();
    iron.display();
    stone1.display();
    stone2.display();
    stone3.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();



    
 
}