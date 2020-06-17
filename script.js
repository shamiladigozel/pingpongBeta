let ball=document.getElementById('ball');
let playerBar=document.getElementById('playerBar');
let cpuBar=document.getElementById('cpuBar');
let gameZone=document.getElementById('gameZone');
let playerX=0;
let playerY=0;
let cpuX=400;
let cpuY=0;
const constballPositionY=400;
const constballPositionX=400;
let ballposX=0;
let ballposY=0;
let limitY1=670;
let limitY2=130;
let dx=2;
let dy=2;
let cpuSpeed=2;
let speed=25;
let cpuPoint=0;
let playerPoint=0;
let ballmovetime=setInterval(ballMovePhysics,speed);
let cpufighttime=setInterval(cpuFight,6);
gameZone.addEventListener('mousemove',function(event){
    if(event.offsetY < 670)
    {     playerX=event.offsetX;
          playerY=event.offsetY;
        
       if(playerX > 40 && playerX < 760)
       {
          playerBar.style.left=event.offsetX+'px';
       
         
       }
    } 
});

function ballMovePhysics(){
   
    //cpuFight();
    collisionOnPlayer();
    collisionOnCpu();
   if( ballposX < 5 ||  ballposX > 788)
   {
        dx *= -1;  
   }
   if( ballposY < limitY2 ||  ballposY > limitY1) 
   {
        dy *= -1;
   }
   ballposX += dx;
   ballposY+= dy;
   ball.style.left= ballposX  +  'px';
   ball.style.top=  ballposY  +  'px';
   
}

function setPositionBall(){
    ballposX=constballPositionX;
    ballposY =constballPositionY;
    

}

function collisionOnPlayer()
{
   if((playerX-40 > ballposX || playerX+40 < ballposX) && (ballposY >= limitY1))//bara toxunulmayan vezyet
   {
       limitY1=695;
      if(ballposY>695){
         clearInterval(ballmovetime);
         setTimeout(() => {
            setPositionBall();
            speed=25;
            limitY1=670;
            cpuPoint++;
            document.getElementById('cpuPointlbl').innerHTML=cpuPoint;
            ballmovetime=setInterval(ballMovePhysics,speed);
         }, 1000);
       
      }
           

    
   }
   else if((playerX-40 <= ballposX || playerX+40 >= ballposX) && (ballposY >= limitY1))
   {
      if(speed>4)
      {
      speed-=2;
      }
      limitY1=670;
      clearInterval(ballmovetime);
      ballmovetime=setInterval(ballMovePhysics,speed);
     
   }

}

function collisionOnCpu(){
   if((cpuX-40 > ballposX || cpuX+40 < ballposX) && (ballposY <= limitY2))//bara toxunulmayan vezyet
   {
       limitY2=105;
      if(ballposY < 105){
         clearInterval(ballmovetime);
         setTimeout(() => {
            setPositionBall();
            speed=25;
            limitY2=130;
            playerPoint++;
            document.getElementById('playerPointlbl').innerHTML=playerPoint;
            ballmovetime=setInterval(ballMovePhysics,speed);
         }, 1000);
         
      }
           

    
   }
   else if((cpuX-40 <= ballposX || cpuX+40 >= ballposX) && (ballposY <= limitY2))
   {
      if(speed>4){
      speed-=2;
      }
      limitY2=130;
      clearInterval(ballmovetime);
      ballmovetime=setInterval(ballMovePhysics,speed);
     
   }

}

this.onload=()=>{
  setPositionBall();
}
function cpuFight(){
    if(cpuX > ballposX && cpuX > 40){
      
       cpuX-=cpuSpeed;
       cpuBar.style.left=cpuX+'px';
      
    }
    else if(cpuX < ballposX && cpuX < 760 ){
    
      cpuX+=cpuSpeed;
      cpuBar.style.left=cpuX+'px';
 
    }








}