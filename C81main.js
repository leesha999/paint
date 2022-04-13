canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

color="red";

ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=1;
var x = ctx.lineWidth;
ctx.arc(300, 300, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x= e.clientX - canvas.offsetLeft;
    mouse_y= e.clientY - canvas.offsetTop;
    console.log("X = "+mouse_x + "Y = "+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}
var curretWidth = "";

function addWidth(){
    x = x+1
    curretWidth = x
    ctx.lineWidth = curretWidth 
    document.getElementById("width").value = width + 1      
}

function subWidth(){
    x = x-1
    curretWidth = x
    ctx.lineWidth = curretWidth 
    document.getElementById("width").value = width - 1      
}


