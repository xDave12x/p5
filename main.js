function preload(){
img=loadImage('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg');
}
function setup(){
canvas=createCanvas(600,500);
canvas.position(110,250);
}
function draw(){
image(img,280,230,200,200);
fill(0,128,0);
  stroke(128,0,0);
  circle(250,200,70);
  circle(250,450,70);
  circle(480,200,70);
  circle(480,450,70);
}
function take_snapshot(){
save('student_name.png');
}
