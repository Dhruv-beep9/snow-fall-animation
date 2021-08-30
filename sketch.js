var snow1;
var snow;
var bgImg;

function preload(){
  bgImg=loadImage("snow2.jpg");
  snow=loadImage("snow5.webp");
}







function setup() {
  createCanvas(1300,500);
 //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  createsnow();
  drawSprites();

}
function createsnow(){
  if(frameCount%10===0){
    snow1=createSprite(random(0,1500),0,50,50);
    snow1.velocityX=-12;
    snow1.velocityY=4;
    snow1.addImage(snow);
    snow1.scale=0.1;
  }
}

