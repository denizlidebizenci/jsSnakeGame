var canvContext;
var canv;
window.onload=function(){
    canv = document.getElementById("gc");
    canvContext = canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/8);
   
}

var xv=yv=0;
var px=py=10;
var gs=tc=20;
var ax=ay=15;
var trail=[];
var tail = 5;

function game(){
    px+=xv;
    py+=yv;
    if(px<0){ // yılan sol kenara gelirse
       px=tc-1;
    }
    if(px>tc-1){ // yılan sağ kenara gelirse
        px=0;
    }
    if(py<0){ // yılan üst kenara gelirse
       py=tc-1;
    }
    if(py>tc-1){ // yılan alt kenara gelirse
        py=0;
    }
    canvContext.fillStyle="black";
    canvContext.fillRect(0,0,canv.width,canv.height);

    canvContext.fillStyle="white";
    for(var i=0;i<trail.length;i++){
        canvContext.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py){
          tail=5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail){
        trail.shift();
    }

    canvContext.fillStyle="red";
    canvContext.fillRect(ax*gs,ay*gs,gs-2,gs-2);

    if(ax==px && ay == py){
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
}


function keyPush(e){
    if(e.keyCode==37){ //sol
       xv=-1;
       yv=0;
    }
    if(e.keyCode==38){ //yukarı
        xv=0;
       yv=-1;
    }
    if(e.keyCode==39){ //sağ
        xv=1;
       yv=0;
    }
    if(e.keyCode==40){ //aşağı
        xv=0;
       yv=1;
    }
}