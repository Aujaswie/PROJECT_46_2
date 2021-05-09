function selectLevel(){
 
    switch(level){
      case 1: god.addImage(athenaImg);
              giant.addImage(athenaMonImg);
              power1.addImage(athena_p1);
              power2.addImage(athena_p2);
              power3.addImage(athena_p3);
              break;
      case 2: god.addImage(posiedonImg);
              giant.addImage(posiedonMonImg);
              break;
      case 3: god.addImage(zeusImg);
              giant.addImage(zeusMonImg);
              break;
  
    }
  }
  
  function control(){
    if(keyDown("left")){
    god.x-=10
    //giant.x=random(100,750);
    }
    if(keyDown("right")){
      god.x+=10
     //giant.x=random(100,750);
    }
    if(keyDown("up")){
      god.y-=10
      //giant.y=random(100,350);
    }
    if(keyDown("down")){
      god.y+=10
      //giant.y=random(100,350);
    }
  
  }
  
  function countDown(){
  
      if (frameCount%30==0&& timeout > 0){
          timeout--;
      }
      if(timeout==0){
      
        
        attack = !attack;
        timeout=5;
      }
  
  }
  function fightMode(){
    if(attack==true){
      sandGlass.changeImage("timeOn", sandGlassGreen)
      giantFire();
      godAttack();
    }
     
    else{
      sandGlass.changeImage("timeOver",sandGlassRed)
    }

    if(arrow!== undefined){
        if(arrow.isTouching(giant)){
          if(giantScore >0) {
            giantScore-= 10 ;
          }
          arrow.destroy();
          arrow = undefined;
        }
      }

      if(firePower!== undefined){
        if(firePower.isTouching(god)){
          if(godScore >0) {
            godScore-= 10 ;
          }
          firePower.destroy();
          firePower = undefined;
        }
      }
      else if( firePower.x<0){
        firePower.destroy();
        firePower = undefined;
      }
    
  }
  
  function giantFire (){

    if(firePower===undefined){
        console.log("firePower");
      firePower = createSprite (giant.x, giant.y, 50, 50);
      firePower.addImage (arrowImg);
      firePower.scale=0.1
      
      firePower.velocityX = -2;
      }
    
  }
function godAttack (){
    if(mousePressedOver (power1)){
        god.debug=true;
    }
      if(mousePressedOver (power2)){
       
      if(arrow===undefined){
        console.log("arrow");
      arrow = createSprite (god.x, god.y, 50, 50);
      arrow.addImage (arrowImg);
      arrow.scale=0.1
      
      arrow.velocityX = 2;
  
      }
    }

    if(mousePressedOver (power3)){
      god.visible =false;
    }

    

}


  
  function gameOver (){
    if(godScore===0){
      fill("black");
      textSize(20);
      textFont("Herculanum");
      text("you lost",width/2+50,height/2);
      text ("game over",width/2+50,height/2+30)
      text("click on restart to play again",width/2+50,height/2+60 )
    }
    if(giantScore===0){
      fill("black");
      textSize(20);
      textFont("Herculanum");
      text("you won",width/2+50,height/2);
      text ("game over",width/2+50,height/2+30)
      text("click on restart to play again",width/2+50,height/2+60 )
    }
  }
