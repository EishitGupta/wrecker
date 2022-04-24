const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,900);
    myengine = Engine.create();
    myworld = myengine.world;
    var groundOptions = {
        isStatic:true
    }
    box1 = new Box(900,880,50,50);

    ground = Bodies.rectangle(600,890,1200,10,groundOptions);
    World.add(myworld,ground)



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(myengine);
    rectMode(CENTER)
    fill("red");
    rect(ground.position.x,ground.position.y,1200,10)
    box1.display();
}