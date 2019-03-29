let rad;let par;let anch1;
let c;let count=0;
function start(){
	c=color(250,025);
	par=select('#p1');par.position(900,300);par.style('font-size','12pz');
	par.mousePressed(chgfont);
rad=createRadio();rad.class('parbdd');
anch1=select('#a1');anch1.postion(900,40);
rad.position(900,50);
rad.option('yellow',1);
rad.option('restart',2);
rad.option('chgradius',3);
rad.changed(addColor);
}
function addColor(){
	if(rad.value()){
		if(rad.value()=='1'){c=color(250,250,0);}
	    if(rad.value()=='2'){setup();}
		if(rad.value()=='3'){lenChg=40;c=color(0,250,250);}
}
}
function chgfont(){
	if(count%2==0){par.style('font-size','24px');}
	if(count%2==1){par.style('font-size','12px');}
	count++;
}
			