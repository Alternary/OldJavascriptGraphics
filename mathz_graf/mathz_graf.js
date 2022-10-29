var canvas1;

var textarea1;




window.onload = function() {
	canvas1 = document.getElementById('canvas0');
	canvascontext1 = canvas0.getContext('2d');
	
	textarea1 = document.getElementById('textarea0');
};

function kolorekt(i,j,w,h,c) {
	this.i = i;
	this.j = j;
	this.w = w;
	this.h = h;
	this.c = c;
	
	this.drawrekt = function() {
		canvascontext1.fillStyle = this.c;
		canvascontext1.fillRect(this.i,this.j,this.w,this.h);
	};
	
};

function limiter1(x,y) {
	return x-y*Math.floor(x/y);
};

function saw3(x,y) {
	if (x < 1) {
		return x-y*Math.floor(x/y);
	}
	else {
		return x+y*Math.floor(-x/y)+y;
	}
};

function huehue3(x) {
	if (x**2 == 1) {return "#000000";}
	else {
		function q(a) {
			function h(b) {
				return Math.abs(b);
			};
			return 255*(h(a+1)-h(a)-h(a-2)+h(a-3))/2;
		};
		var k = (1+x)/2;
		var i1 = q(6*k+1)+q(6*k-5);
		var i2 = q(6*k-1);
		var i3 = q(6*k-3);
		
		function p(a) {
			var i = "0"+(Math.floor(a)).toString(16);
			i = i.substr(-2,2);
			return i;
		};
		i1 = p(i1); i2 = p(i2); i3 = p(i3);
		
		return (`#${i1}${i2}${i3}`);
	}
};

function huehue(x) {
	//x is in (-infinity,infinity)
	
	x = (x-(16**6)*Math.floor(x/(16**6))).toFixed(0);
	x = "00000"+x.toString(16);
	x = x.substr(-6,6);
	
	return (`#${x}`);
	
	//output is a string in [0,16**6]
};

function hslfunction(x,y,z) {
	var a = 360*saw3(x,1);
	var b = 100*saw3(y,1);
	var c = 100*saw3(z,1);
	return `hsl(${a+""},${b+"%"},${c+"%"})`;
};
	
function graphfunction1(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var k = (55*i)/((i-j)**2+1);
	return huehue(k);
	
};

function graphfunction(i,j) {
	//return mandel5(i,j);
	return multibrot(i,j);
	//return burning(i,j);
	//return bifurcate(1/2,i,iterationamount+Math.floor(limiter1(j,canvas1.height)));
};

var maxmagnitude = (16**6);
//the initial offsets
//they show the cross at a certain spot on the screen
var xoffset = 69;
var yoffset = 0;
//the offsets that aren't scaled by the zoom but are instead units
//var xoffsetunit = 311;
//var yoffsetunit = 311;
var xoffsetunit = 0;
var yoffsetunit = 0;
//var iterationamount = 22;
var iterationamount = 22;
//var zoomamount = 1/69;
var zoomamount = 2.5;
var horizontalzoom = 1;
var verticalzoom = 1;
var initialreal = 0;
var initialimaginary = 0;
var ranger = 4;
var realpart = 1;
var imaginarypart = 0;

//scales input coordinates
function mapper(x,y) {
	
};

//remember to calculate the adjacent pixels for zooming and stuff
function mandel(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width);
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height);
	
	var z = [initialreal*m+i1,initialimaginary*m+j1]
	
	var x,y;
	
	for (var k = 0; k <= iterationamount-1 && (z[0]*z[0]/m) <= maxmagnitude && (z[1]*z[1]/m) <= maxmagnitude; k++) {
		x = z[0];
		y = z[1];
		z = [((x*x-y*y)/(m/2))+i1,(2*x*y/(m/2))+j1];
	};
	
	
	if ((x*x+y*y)/(m*m) <= 4) {
		
		z = (`#${"FFFFFF"}`);
		//z = huehue((x*x+y*y));
		
	}
	
	else {
		
		z = (`#${"000000"}`);
	
	};
	
	return z;
};

function mandel2(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width);
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height);
	
	var z = [initialreal*m+i1,initialimaginary*m+j1]
	
	var x,y;
	
	for (var iii = iterationamount; 0 < iii; i--) {
		for (var k = 0; k <= iii-1 && (z[0]*z[0]/m) <= maxmagnitude && (z[1]*z[1]/m) <= maxmagnitude; k++) {
			x = z[0];
			y = z[1];
			z = [((x*x-y*y)/(m/2))+i1,(2*x*y/(m/2))+j1];
		};
		if (((x*x+y*y)/m*m) <= 4 && typeof(z) !== typeof("")) {
			z = iii/iterationamount;
			z = "0"+(Math.floor(255*z)).toString(16);
			z = z.substr(-2,2);
			z = (`#${z}${z}${z}`);
		}
	};
	
	if (typeof(z) !== typeof("")) {
		z = "#000000";
	};
	
	/*
	if ((x*x+y*y)/(m*m) <= 4) {
		
		z = (`#${"FFFFFF"}`);
		//z = huehue((x*x+y*y));
		
	}
	
	else {
		
		z = (`#${"000000"}`);
	
	};
	*/
	return z;
};

function mandel3(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width);
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height);
	
	var z = [initialreal*m+i1,initialimaginary*m+j1]
	
	var x,y;
	

	for (var k = 0; k <= iterationamount-1; k++) {
		x = z[0];
		y = z[1];
		z = [((x*x-y*y)/(m/2))+i1,(2*x*y/(m/2))+j1];
		if ((z[0]*z[0]/m) > maxmagnitude || (z[1]*z[1]/m) > maxmagnitude || ((x*x+y*y)/m*m) > 4) {
		/*if (((x*x+y*y)/m*m) <= 4) {
			z = k/iterationamount;
			z = "0"+(Math.floor(255*z)).toString(16);
			z = z.substr(-2,2);
			z = (`#FF${z}${z}`);
			z = "#FF0000";
		}*/
		z = k/iterationamount;
		z = "0"+(Math.floor(255*z)).toString(16);
		z = z.substr(-2,2);
		z = (`#FF${z}${z}`);
		//z = "#000000";
		break;
		}
	};
	
	if (typeof(z) != typeof("")) {
		z = "#00FF00";
	}
	
	return z;
};

function mandel4(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width);
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height);
	
	var z = [initialreal*m+i1,initialimaginary*m+j1]
	
	var x,y;
	
	//special var
	var mandel4var;
	
	for (var k = 0; k <= iterationamount-1 && (z[0]*z[0]/m) <= maxmagnitude && (z[1]*z[1]/m) <= maxmagnitude; k++) {
		x = z[0];
		y = z[1];
		z = [((x*x-y*y)/(m/2))+i1,(2*x*y/(m/2))+j1];
		mandel4var = k;
		if ((x*x+y*y)/(m*m) > 4) {
			z = huehue(mandel4var*255*255/iterationamount);
			break;
		};
	};
	
	
	if ((x*x+y*y)/(m*m) <= 4) {
		
		z = (`#${"FFFFFF"}`);
		//z = huehue((x*x+y*y));
		//z = huehue(mandel4var*255*255/iterationamount);
		
	}
	
	else {
		
		//z = (`#${"000000"}`);
	
	};
	
	if (typeof(z) != typeof("")) {
		z = "#FF0000";
	}
	
	return z;
};

function mandel5(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width);
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height);
	
	var z = [initialreal*m+i1,initialimaginary*m+j1]
	
	var x,y;
	
	//special var
	var mandel4var;
	
	for (var k = 0; k <= iterationamount-1 && (z[0]*z[0]/m) <= maxmagnitude && (z[1]*z[1]/m) <= maxmagnitude; k++) {
		x = z[0];
		y = z[1];
		z = [((x**2-y**2)/(m/2))+i1,(2*x*y/(m/2))+j1];
		mandel4var = k;
		if ((x*x+y*y)/(m*m) > 4) {
			z = huehue(mandel4var*255*255/iterationamount);
			break;
		};
	};
	
	
	if ((x*x+y*y)/(m*m) <= 4) {
		
		z = (`#${"FFFFFF"}`);
		//z = huehue((x*x+y*y));
		//z = huehue(mandel4var*255*255/iterationamount);
		
	}
	
	else {
		
		//z = (`#${"000000"}`);
	
	};
	
	if (typeof(z) != typeof("")) {
		z = "#FF0000";
	}
	
	return z;
};

function multibrot(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width)-xoffsetunit;
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height)-yoffsetunit;
	
	i1 = i1/m;
	j1 = j1/m;
	
	var z = [initialreal+i1,initialimaginary+j1]
	
	var x,y;
	
	//special var
	var multibrotvar;
	
	for (var k = 0; k <= iterationamount-1 && (z[0]*z[0]/m) <= maxmagnitude && (z[1]*z[1]/m) <= maxmagnitude; k++) {
		x = z[0];
		y = z[1];
		z = [((x**2+y**2)**(realpart/2))*Math.exp(-imaginarypart*Math.atan2(y,x))*
		Math.cos(realpart*Math.atan2(y,x)+imaginarypart*Math.log(Math.sqrt(x**2+y**2)))+i1,
		((x**2+y**2)**(realpart/2))*Math.exp(-imaginarypart*Math.atan2(y,x))*
		Math.sin(realpart*Math.atan2(y,x)+imaginarypart*Math.log(Math.sqrt(x**2+y**2)))+j1];
		/*z = [((x**2+y**2)**(realpart/2))*Math.cos(realpart*Math.atan2(y,x))+i1,
		((x**2+y**2)**(realpart/2))*Math.sin(realpart*Math.atan2(y,x))+j1];*/
		multibrotvar = k;
		if (x**2+y**2 > ranger) {
			//z = huehue(multibrotvar*255*255/iterationamount);
			z = hslfunction(multibrotvar/iterationamount,multibrotvar/iterationamount,multibrotvar/iterationamount);
			break;
		};
	};
	
	
	if (x**2+y**2 <= ranger) {
		
		z = (`#${"FFFFFF"}`);
		//z = huehue((x*x+y*y));
		//z = huehue(mandel4var*255*255/iterationamount);
		
	}
	
	else {
		
		//z = (`#${"000000"}`);
	
	};
	
	if (typeof(z) != typeof("")) {
		z = "#FF0000";
	}
	
	return z;
};

function burning(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width)-xoffsetunit;
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height)-yoffsetunit;
	
	var z = [initialreal*m+i1,initialimaginary*m+j1]
	
	var x,y;
	
	//special var
	var burningvar;
	
	for (var k = 0; k <= iterationamount-1 && (z[0]*z[0]/m) <= maxmagnitude && (z[1]*z[1]/m) <= maxmagnitude; k++) {
		x = z[0];
		y = z[1];
		z = [((x**2-y**2)/(m/2))+i1,((2*Math.abs(x*y))/(m/2))+j1];
		burningvar = k;
		if ((x*x+y*y)/(m*m) > ranger) {
			z = huehue(burningvar*255*255/iterationamount);
			break;
		};
	};
	
	
	if ((x*x+y*y)/(m*m) <= ranger) {
		
		z = (`#${"FFFFFF"}`);
		//z = huehue((x*x+y*y));
		//z = huehue(mandel4var*255*255/iterationamount);
		
	}
	
	else {
		
		//z = (`#${"000000"}`);
	
	};
	
	if (typeof(z) != typeof("")) {
		z = "#FF0000";
	}
	
	return z;
};

function collatz(i,j) {
	//i is in (-infinity,infinity)
	//j is in (-infinity,infinity)
	
	var p = Math.PI;
	
	function e(x) {
		return Math.exp(x);
	};
	
	function s(x) {
		return Math.sin(x);
	};
	
	function c(x) {
		return Math.cos(x);
	};
	
	var m = Math.max(canvas1.height,canvas1.width);	
	
	var i1 = horizontalzoom*zoomamount*(2*(i-xoffset)-canvas1.width);
	var j1 = verticalzoom*zoomamount*(2*(j-yoffset)-canvas1.height);
	
	var z = [initialreal*m+i1,initialimaginary*m+j1]
	
	var x,y;
	
	//special var
	var collatzvar;
	
	for (var k = 0; k <= iterationamount-1 && (z[0]*z[0]/m) <= maxmagnitude && (z[1]*z[1]/m) <= maxmagnitude; k++) {
		x = z[0];
		y = z[1];
		/*z = [(x+1/2)*(2-e(p*y)*c(p*x)-e(-p*y)*c(p*x))/4-y*(e(p*y)*s(p*x)-e(p*y)*s(p*x))/4+x/2,
		(x+1/2)*(e(p*y)*s(p*x)-e(p*y)*s(p*x))/4+y*(2-e(p*y)*c(p*x)-e(-p*y)*c(p*x))/4+y/2];*/
		z = [(5*x/2+1)*(2-e(p*y)*c(p*x)-e(-p*y)*c(p*x))/4-(5*y/2)*(e(p*y)*s(p*x)-e(p*y)*s(p*x))/4+x/2,
		(5*x/2+1)*(e(p*y)*s(p*x)-e(p*y)*s(p*x))/4+(5*y/2)*(2-e(p*y)*c(p*x)-e(-p*y)*c(p*x))/4+y/2];
		collatzvar = k;
		if ((x*x+y*y)/(m*m) > ranger) {
			z = huehue(collatzvar*255*255/iterationamount);
			//z = huehue(99999999);
			break;
		};
	};
	
	
	if ((x*x+y*y)/(m*m) <= ranger) {
		
		z = (`#${"FFFFFF"}`);
		//z = huehue((x*x+y*y));
		//z = huehue(mandel4var*255*255/iterationamount);
		
	}
	
	else {
		
		//z = (`#${"000000"}`);
	
	};
	
	if (typeof(z) != typeof("")) {
		z = "#FF0000";
	}
	
	return z;
};

function bifurcate(x,r,t) {
	//x is in [0,1]
	//r is in [0,4]
	//t is in [0,infinity)
	
	var k = 1/22;
	
	r = 4-k*r/Math.max(canvas1.height,canvas1.width);
	
	x = limiter1(x,1);
	r = limiter1(r,4);
	
	for (var i = 0; i <= t-1; i++) {
		
		x = x*r*(1-x);
		
	};
	
	return huehue(255*255*x);
};

function bifurcate2(x,y) {
	var z = [];
	z[0] = r*(a-a**2+b**2);
	z[1] = r*(b-2*a*b);
};


//delete canvas1




//"how to store variables"

var canvasarray;

function graphpreparer() {
	
	function textpreparer() {
		var textarea2 = String(textarea1.value);
		
		if (Number(textarea2) >= 0+1) {
			iterationamount = (Number(textarea2)).toFixed(0);
		};
		
		console.log((`this is textarea2 ${textarea2}`));
	};
	
	textpreparer();
	
	canvasarray = [];
	
	for (var i = 0; i <= canvas1.height-1; i++) {
		for (var j = 0; j <= canvas1.width-1; j++) {
			var s = new kolorekt(j,i,1,1,graphfunction(j,i));
			canvasarray.push(s);
		};
	};
	
};

function drawaxes() {
	
	var horizontalaxis = new kolorekt((Math.floor(canvas1.width/2)+xoffset),0,1,(canvas1.height),"white");
	var verticalaxis = new kolorekt(0,(Math.floor(canvas1.height/2)+yoffset),(canvas1.width),1,"white");

	horizontalaxis.drawrekt();
	verticalaxis.drawrekt();
	
};





function button0function() {
	
	console.log("graphfunction(0,0) = " + graphfunction(0,0));
	console.log("graphfunction(333,333) = " + graphfunction(333,333));
	console.log("huehue(999) = " + huehue(999));
	console.log(typeof(""));
	
	
	graphpreparer(); console.log(canvasarray[44]);
	for (i in canvasarray) {
//		console.log(canvasarray[i]);
		(canvasarray[i]).drawrekt();
	};
	
	
	
	drawaxes();
	
};