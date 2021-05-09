var welcomeScr, playButton;
var gameState=0;
var backgroundImg;
var welcomeImg,gameImg;
var playButtonImg;
var timer=5;
var timeout=5;
var god;
var hadesImg,zeusImg,posiedonImg;
var level=1;
var power1,power2,power3;
var athena_p1,athena_p2,athena_p3;
var attack=1;
var godScore=100;
var giantScore=100;
var arrow, arrowImg;
var sandGlassRed , sandGlassGreen;
var sandGlass;
var shiel_Image;
var firePower;



function preload(){
  welcomeImg =loadImage ("Images_GOW/WelcomeBg.jpg");
  gameImg =loadImage ("Images_GOW/gameBg.jpg");
  playButtonImg =loadImage ("Images_GOW/playButton.png");
  titleImg =loadImage ("Images_GOW/title.png");
  zeusImg =loadImage ("Images_GOW/zeus.png");
  posiedonImg =loadImage("Images_GOW/posiedon.png");
  athenaImg =loadImage("Images_GOW/athena.png");
  athenaMonImg =loadImage("Images_GOW/athenaMon.png");
  posiedonMonImg =loadImage("Images_GOW/monster_posiedon.png");
  zeusMonImg =loadImage("Images_GOW/monster_zeus.png");
  athena_p1 =loadImage("Images_GOW/shield.png");
  athena_p2 =loadImage("Images_GOW/arrow.webp");
  athena_p3 =loadImage("Images_GOW/invisible_p3.png");
  arrowImg =loadImage ("Images_GOW/arrow.webp");
  sandGlassRed =loadImage ("Images_GOW/sandglassRed.png");
  sandGlassGreen =loadImage ("Images_GOW/sandglassGreen.png");
  shieldImg=loadImage("Images_GOW/shield.png");

}

function setup() {
  createCanvas(800,400);

  playButton = createSprite(400, 300, 50, 50);
  playButton.addImage(playButtonImg);
  playButton.scale=0.1

  title = createSprite(390, 50, 50, 50);
  title.addImage(titleImg);
  title.scale=0.2
  
  edges=createEdgeSprites();

  god = createSprite(150, 250, 50, 50);
  //god.addImage(hadesImg);
  god.scale=0.5
  god.visible=false;
 


  giant = createSprite(450, 300, 50, 50);
  giant.scale=0.3
  giant.visible=false;
  giant.setCollider ("rectangle",0,0,500,500);
  

  power1 = createSprite(300, 100, 50, 50);
  power1.scale=0.01
  power1.visible=false;

  power2 = createSprite(400, 100, 50, 50);
  power2.scale=0.1
  power2.visible=false;

  power3 = createSprite(500, 100, 50, 50);
  power3.scale=0.1
  power3.visible=false;




  // createSprite instruction corrected
  sandGlass = createSprite (50,80,20,20);
  sandGlass.scale= 0.2
  sandGlass.addImage("timeOver",sandGlassRed);
  sandGlass.addImage("timeOn", sandGlassGreen);
  sandGlass.visible=false;


}

function draw() {
  countDown();
  //power();
  if(gameState ==0){
    backgroundImg=welcomeImg;
    if(mousePressedOver(playButton)){
      gameState=1;
    }
  }
  else{ 
    backgroundImg= gameImg;
  }
  background(backgroundImg);  

  if(gameState==1){
    playButton.visible=false;
    title.visible=false;
    selectLevel();


    if(timer==0){
      god.visible=true;
      giant.visible=true;
      power1.visible=true;
      power2.visible=true;
      power3.visible=true;
    
      sandGlass.visible =true;

    fill("black")
    textSize(20);
    textFont("Herculanum");
    text(giantScore,width-100, 40);
    text(godScore,30,40);
    
    }

    if(giantScore===0 ){
      gameState=2;
    }
    if(godScore===0 ){
      gameState=2;
    }
   
  }

  if(gameState===2){
    gameOver ();
  }


  god.collide(edges);
  control();
  fightMode();

  drawSprites();
display();

}

function display(){
  if (gameState==0){
    fill("darkred");
    //stroke("black")
    textSize(20);
    textFont("Herculanum");
    text("RULES",width/2-40,140);
    textSize(15);
    text("1.	The player has to defeat the giant using only its power to reach next level.",width/2-270,160);
    text("2.	Player can chose power out of three options . ",width/2-270,180);
    text("3.	Player has to defeat giant in particular lifeline. ",width/2-270,200);
    text("4.	If payer lifeline of player is zero game gets over.  ",width/2-270,220);
    text("5.	If giant lifeline is zero game moves to next level and the god changes. ",width/2-270,240);
  
  }
  if (gameState==1){
    if (frameCount%30==0&& timer > 0){
        timer--;
       
    }
    if(timer>0){
      fill("black");
      textSize(20);
      textFont("Herculanum");
      text("first round is  godess Athena against giant Enceladus",width/2-250,height/4)
    }
  }
}
