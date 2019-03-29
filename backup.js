let ang=0;
let b1;

function setup() {
angleMode(DEGREES);
can=createCanvas(600,500,WEBGL);
can.position(25,25);
can.class("bdd");
b1=new move(200,200,50,1,0,0);
//frameRate(10);
}

function draw() {

background(200,300,0);
//b1.speed();b1.chbdd();b1.display();
push();
sqs(15);
pop();
ang=ang+1; 
}


function sqs(num){
	for(let j=0;j<num;j=j+1){

push();
rotateY(ang+(360/num)*j);
translate(150,0,0);
fill(20*j,25*j,20*j);
box(40,40,40);
pop();
}

}