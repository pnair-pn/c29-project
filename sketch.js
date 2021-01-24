const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1, ground, polygon, ball, slingShot;
var block1,block2,block3,block4,block5,block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16;

function preload() {
    polygon = loadImage("polygon.png")
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,10);

    stand1 = new Ground(700,300,250,10);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball)

    slingShot = new SlingShot(this.ball,{x:100,y:200})

    //first level
    block1 = new Block(640,250,30,40);
    block2 = new Block(670,250,30,40);
    block3 = new Block(700,250,30,40);
    block4 = new Block(730,250,30,40);
    block5 = new Block(760,250,30,40);
    block10 = new Block(610,250,30,40);
    block11 = new Block(790,250,30,40);

    //second level
    block6 = new Block(670,210,30,40);
    block7 = new Block(700,210,30,40);
    block8 = new Block(730,210,30,40);
    block12 = new Block(640,210,30,40);
    block13 = new Block(760,210,30,40);

    //third level
    block9 = new Block(700,170,30,40);
    block14 = new Block(670,170,30,40);
    block15 = new Block(730,170,30,40);

    //fourth level
    block16 = new Block(700,140,30,40);
}

function draw(){
    background(0);
    Engine.update(engine);
     
    stand1.display();
    fill("blue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("red")
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    fill("purple")
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    imageMode(CENTER);
    image(polygon,ball.position.x,ball.position.y,40,40);
    slingShot.display();
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}