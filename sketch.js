const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boy, snow, backgroundImg;

var maxSnow = 100;
var drops = [];

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    var boy = createSprite(800, 300, 20, 20);

    if(frameCount % 150 === 0){

      for(var i=0; i<maxSnow; i++){
          drops.push(new Snowfall(random(0,400), random(0,400)));
      }
    }
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  for(var i = 0; i<maxSnow; i++){
    drops[i].showDrop();
    drops[i].updateY()  
}

drawSprites();
}