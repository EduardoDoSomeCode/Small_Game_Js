window.onload=function (){
  let canvas = document.getElementById("board");
  let context=canvas.getContext("2d");
  
  let x= 100;
  let y= 50;
  
  let coinx=Math.random()*(300-50);
  let coiny=Math.random()*(300-20);
  
  let t =Date.now();
  let speed =300;
  let dir =0;
  let score = 0;
  
  let up = document.getElementById("up");
  let downn =document.getElementById("down");
  let left =document.getElementById("left");
  let right=document.getElementById("right");
  
  up.onmouseup=function() { dir = 0;}
  downn.onmouseup=function(){dir =0;}
  left.onmouseup = function(){dir=0;}
  right.onmouseup=function(){dir=0;}
  
  up.onmousedown=function(){dir =4;}
  downn.onmousedown=function(){dir =3;}
  left.onmousedown =function(){dir=2;}
  right.onmousedown=function(){dir=1;}


  function draw(){
    var timePassed=(Date.now ()-t)/1000;
    t=Date.now();

    context.clearRect(0,0,300,300);

    context.font="25px arial";
    context.fillStyle="black";
    context.fillText("Score:" + score,30,20);
    
    context.beginPath();
    context.rect(x,y,100,100);
    context.fillStyle="red";
    context.fill();

    context.beginPath();
    context.rect(coinx,coiny,50,50);
    context.fillStyle="#e3c228";
    context.fill();

    if(dir == 1){
      if(x+100<300){
        x+=(speed * timePassed);
      }
    }
    else if( dir == 2) {
      if(x>0){
        x-=(speed * timePassed);
      }
    }
    else if (dir == 3){
      if(y+100 < 300){
        y+=(speed * timePassed);
      }
    }
    else if (dir == 4){
      if(y>0){
        y-=(speed * timePassed)
      }
    }
    if(coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y<= coiny+50){
      score++;
      coiny=Math.random() * ( 300-50);
      coinx=Math.random() * ( 300-50);
    }

    window.requestAnimationFrame(draw);
  }
  draw();

}