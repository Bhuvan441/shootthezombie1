var backgroundimg
var player
var playerimg
var playeraiming

function preload(){
backgroundimg = loadImage('assets/background.jpg');
playerimg = loadImage('assets/gun_down.png');
playeraiming = loadImage('assets/shooting.png');
}
function setup(){
  createCanvas(windowWidth,windowHeight);
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.scale = 2.8;
bg.addImage("bgimg",backgroundimg);

player = createSprite(displayWidth-1400,displayHeight-350,20,20);
player.scale = 1;
player.addImage("playerimage",playerimg);
}


function draw() {
if(keyDown("UP_ARROW")||touches.length > 0){
player.y = player.y - 30;
}

if(keyDown("DOWN_ARROW")|| touches.length > 0){
player.y = player.y +30;
}

if(keyWentDown("space")){
  player.addImage(playeraiming);
}

else if(keyWentUp("space")){
  player.addImage(playerimg);
}


  drawSprites();
}