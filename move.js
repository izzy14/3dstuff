class move{
	
constructor (xs,ys,zs,xspst,yspst,zspst){
	this.x=xspst;this.y=yspst;this.z=zspst;
	this.xsp=xspst;this.ysp=yspst;this.zsp=zspst;
}

speed(){
this.x=this.x+this.xsp;
this.y=this.y+this.ysp;
this.z=this.z+this.zsp;
}

chbdd(){
if (this.x<-width/2||this.x>width/2){this.xsp=-1*this.xsp;}
if (this.y<-height/2||this.y>height/2){this.ysp=-1*this.ysp;}
if (this.z<-100/2||this.z>100/2){this.zsp=-1*this.zsp;}	
}

display(){
translate(this.x,this.y,this.z);
fill(250,0,0);
box(40,40,40);

}

}

