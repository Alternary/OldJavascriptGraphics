var buttonVIDEO;
var buttonVIDEO2;

var stRANGE1;

var rangebutton;

var boddy;
var informator1;

var kanvas;
var kanvasKONTEXT;

var kanvas2;
var kanvasKONTEXT2;

var rangeMAX;
var strange2;

var inter1, inter2;

var timer1 = 69;
var timer2 = timer1;

var strangeVALUE = 0;

window.onload = function() {
	buttonVIDEO = document.getElementById('videoBUTTON');
	buttonVIDEO2 = document.getElementById('videoBUTTON2');

	stRANGE1 = document.getElementById('stRANGE');
	strangeVALUE = Number(stRANGE1.value);
	
	stRANGE3 = document.getElementById('stRANGE2');
	
	rangebutton1 = document.getElementById('rangebutton');
	
	boddy = document.getElementById('boddy1');
	informator1 = document.getElementById('informator');

	kanvas = document.getElementById('videoKANVAS');
	kanvasKONTEXT = kanvas.getContext('2d');
	
	kanvas2 = document.getElementById('videoKANVAS2');
	kanvasKONTEXT2 = kanvas2.getContext('2d');
		planar(); planar2();
	rangeMAX = stRANGE1.max;
	
	stranger();
	
	random1 = Math.random();
	random2 = Math.random();
};

function kolorekt(Xpose,Ypose,width,height,kolor) {
	this.Xpose = Xpose;
	this.Ypose = Ypose;
	this.width = width;
	this.height = height;
	this.kolor = kolor;
	
	this.makeKANVAS = function() {
		kanvasKONTEXT.fillStyle = this.kolor;
		kanvasKONTEXT.fillRect(this.Xpose,this.Ypose,this.width,this.height);
	};
	
	this.makeKANVAS2 = function() {
		kanvasKONTEXT2.fillStyle = this.kolor;
		kanvasKONTEXT2.fillRect(this.Xpose,this.Ypose,this.width,this.height);
	};
};

//how many frames skip
var step1 = 2222;

function stranger() {
	if (strangeVALUE <= rangeMAX-step1) {
		strangeVALUE += step1;
	};
};

var interKOUNTER = 0;

function starter0() {
	inter2 = setInterval(buttonBUTTON2, timer2);
	inter1 = setInterval(buttonBUTTON, timer1);
	interKOUNTER = 1;
};

function stopper0() {
	clearInterval(inter1);
	clearInterval(inter2);
	interKOUNTER = 0;
};

{
var plane = [];

function planar() {
	for (var i = 0; i <= kanvas.width-1; i++) {
		plane[i] = [];
		for (var j = 0; j <= kanvas.height-1; j++) {
			(plane[i])[j] = j;
		};
	};
};

var plane2 = [];

function planar2() {
	for (planex in plane) {
		for (planey in planex) {
			plane2.push([1,planey]);
		};
	};
};
};

//need two saws one without 1/2 addition
function limiter(x,y) {
	return (x-y*Math.floor(1/2+x/y));
};



function saw1(x,y) {
	return (x-y*Math.floor(x/y));
};

function saw2(x,y) {
	return x-y*Math.floor(x/y+1/2);
}

function saw3(x,y) {
	if (x < 1) {
		return x-y*Math.floor(x/y);
	}
	else {
		return x+y*Math.floor(-x/y)+y;
	}
};

function fact(x) {
	var s = 1;
	for (var i = 1; i <= x-1; i++) {
		s = i*s;
	};
	return s
};

//first start index, second end index, third function of index and input, fourth input.
function summ(x,y,z,w) {
	var s = 0;
	for (var i = x; i <= y; i++) {
		s += z(i,w);
	};
	return s;
};

function summ2(x,y,z,w,v) {
	var s = 0;
	for (var i = x; i <= y; i++) {
		s += z(i,w,v);
	};
	return s;
};

function HUEHUE(x,y,t) {
	var i;
	
	{
		function q(z1,z2) {
			return 666*666*(1-(limiter((2**z1)*(z2+1),2)-1)**2)/(2**z1);
		};
		
		i = summ(1,5,q,(x*x/(x**2+y**2+2))/666);
	};

	
		//right after drawing, calculate values//create array
	
	
	i = "00000"+(Math.floor(i)).toString(16);
	i = i.substr(-6,6);
	return (`#${i}`);
};

function blackwhite(x) {
	if (x**2 == 1) {return "#00FF00";}
	else {
		var i = 255*(1+x)/2;
		i = "0"+(Math.floor(i)).toString(16);
		i = i.substr(-2);
		return (`#${i}${i}${i}`);
	}
};

function huehue2(x) {
	if (x**2 == 1) {return "#000000";}
	else {
		function q(a) {
			return 255*((Math.abs(a+1)+Math.abs(a-1))/2-Math.abs(a));
		};
		var k = (1+x)/2;
		var i1 = q(3*k)+q(3*k-3);
		var i2 = q(3*k-1);
		var i3 = q(3*k-2);
		
		function p(a) {
			var i = "0"+(Math.floor(a)).toString(16);
			i = i.substr(-2);
			return i;
		};
		i1 = p(i1); i2 = p(i2); i3 = p(i3);
	
		return (`#${i1}${i2}${i3}`);
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

//plots real magnitude as hue and imaginary magnitude as brightness
function huehue4([x,y]) {
	if (x**2 == 1) {return "#000000";}
	if (y**2 == 1) {return "#000000";}
	else {
		function q(a) {
			function h(b) {
				return Math.abs(b);
			};
			return 255*(h(a+1)-h(a)-h(a-2)+h(a-3))/2;
		};
		var k = (1+x)/2;
		var i1 = y*q(6*k+1)+q(6*k-5);
		var i2 = y*q(6*k-1);
		var i3 = y*q(6*k-3);
		
		function p(a) {
			var i = "0"+(Math.floor(a)).toString(16);
			i = i.substr(-2,2);
			return i;
		};
		i1 = p(i1); i2 = p(i2); i3 = p(i3);
		
		return (`#${i1}${i2}${i3}`);
	}
};

function huehue5(x,y,z) {
	var a = 360*saw3(x,1);
	var b = 100*saw3(y,1);
	var c = 100*saw3(z,1);
	
	return `hsl(${a+""},${b+"%"},${c+"%"}`;

};

function huehue6(x,y,z) {
	a = 255*saw3(x,1);
	b = 255*saw3(y,1);
	c = 255*saw3(z,1);
	
	return (`rgb(${a},${b},${c})`);
};

asdf = [];

var zoomamount = 1;

function asdfasdf(x,y,t) {
	var k = 1/(Math.max(kanvas.width,kanvas.height));
	k = zoomamount*k;
	function q(a,b,c) {
		var z;
		var w;
		//z = Math.sin(a**2+b**2)*88*Math.sqrt(a**2+b**2+1)+c;
		//z = Math.sin((a**2+b**2)*88*Math.sqrt(a**2+b**2+1))+c;
		//z = 88*Math.sin((a**2+b**2)*88*Math.sqrt(a**2+b**2+1));
		//z = (Math.abs(a)+Math.abs(b));
		//z = a;
		//z = a+b;
		//z = 2*a*a-1;
		//z = 2*(a**2)-1;
		//z = 1/(a**2+b**2+1);
		//z = a**2+a+b**2+b;
		//z = Math.sin(2*(Math.PI)*a);
		//z = Math.sin(555*(a**2+b**2));
		//z = Math.sin(Math.cos(2*a)-Math.cos(2*b))*88*Math.sqrt(a**2+b**2+1);
		//z = a;
		var phi = (1+Math.sqrt(5))/2;
		//z = (phi**a-Math.cos(a*Math.PI)/(phi**a))/Math.sqrt(5);
		z = ((phi**a)*Math.cos(b*Math.log(phi))-Math.exp(-b*Math.PI)*Math.cos(a*Math.PI+b*Math.log(1/phi))/(phi**a))/Math.sqrt(5);
		w = ((phi**a)*Math.sin(b*Math.log(phi))-Math.exp(-b*Math.PI)*Math.sin(a*Math.PI+b*Math.log(1/phi))/(phi**a))/Math.sqrt(5);
		
		return limiter(z,2);
	};
	var s = new kolorekt(x,y,1,1,huehue3(q(k*(x-kanvas.width/2),k*(y-kanvas.height/2),t)));
	asdf.push(s);
};

var random1;
var random2;

//plots both real magnitude and imaginary magnitude given a complex input
function asdfasdf2(x,y,t) {
	var k = 2/(Math.max(kanvas.width,kanvas.height));
	k = zoomamount*k;
	function q(a,b,c) {
		var z;
		var w;
		var phi = (1+Math.sqrt(5))/2;
		
		//the complex fibonacci numbers
		//z = ((phi**a)*Math.cos(b*Math.log(phi))-Math.exp(-b*Math.PI)*Math.cos(a*Math.PI+b*Math.log(1/phi))/(phi**a))/Math.sqrt(5);
		//w = ((phi**a)*Math.sin(b*Math.log(phi))-Math.exp(-b*Math.PI)*Math.sin(a*Math.PI+b*Math.log(1/phi))/(phi**a))/Math.sqrt(5);
		
		//complex with real input
		//z = (phi**a-Math.cos(a*Math.PI)/(phi**a))/Math.sqrt(5);
		//w = (-Math.sin(a*Math.PI)/(phi**a))/Math.sqrt(5);
		
		//flower
		//z = a/(b**2+0.01);
		//w = b/(a**2+0.01);
		
		//z = (b**2)/(a**2+1);
		//w = (a**2)/(b**2+1);
		
		//rotated flower
		//z = (a+b)/((a-b)**2+1);
		//w = (a-b)/((a+b)**2+1);
		
		//z = 5*(a+b)/(a**2+b**2+9);
		//w = 5*(a-b)/(a**2+b**2+9);
		
		//random bitmap
		//z = 2*Math.random()-1;
		//w = 1/(Math.random()**2+1);
		
		//z = Math.sin(Math.PI*a);
		//w = 1-1/22;
		
		//z = Math.sin(a**2+b**2)*88*Math.sqrt(a**2+b**2+1);
		//w = Math.sin((a**2+b**2)*88*Math.sqrt(a**2+b**2+1));
		//w = 1-1/11;
		
		
		var p = 22;
		function f1(x1,x2) {
			return Math.cos(p*x2/x1)/p;
		};
		function f2(x1,x2) {
			return Math.sin(p*x2/x1)/p;
		};
		z = 22*summ(1,p,f1,2*(a+b));
		w = 22*summ(1,p,f2,2*(a-b));
		
		
		
		
		//weierstrass
		/*{
		var n = 8;
		nn = 8;
		inputa1 = random1;
		inputa2 = 2*Math.floor(1+(1+(1+3*Math.PI/2)/a)/2)+1+2*nn;
		inputb1 = random2;
		inputb2 = 2*Math.floor(1+(1+(1+3*Math.PI/2)/b)/2)+1+2*nn;
		
		function wei(i1,i2) {
			return function(nnn,xxx) {
				return (i1**nnn)*Math.cos((i2**nnn)*Math.PI*xxx)};
		};
		z = summ(0,n,wei(inputa1,inputa2),a);
		w = summ(0,n,wei(inputb1,inputb2),b);
		//w = 1-1/29;
		};*/
		
		return [limiter(z,2),w-Math.floor(w)];
	};
	var s = new kolorekt(x,y,1,1,huehue4(q(k*(x-kanvas.width/2),k*(y-kanvas.height/2),t)));
	asdf.push(s);
};

function asdfasdf3(x,y) {
	var m = Math.max(kanvas.width,kanvas.height);
	
	var a = zoomamount*((2*x-kanvas.width)/m);
	var b = zoomamount*((2*y-kanvas.height)/m);
	
	var z = 0;
	var w = 0;
	var v = 0;
	
	var phi = (1+Math.sqrt(5))/2;
	
	//the complex fibonacci numbers
	//z = ((phi**a)*Math.cos(b*Math.log(phi))-Math.exp(-b*Math.PI)*Math.cos(a*Math.PI+b*Math.log(1/phi))/(phi**a))/Math.sqrt(5);
	//w = ((phi**a)*Math.sin(b*Math.log(phi))-Math.exp(-b*Math.PI)*Math.sin(a*Math.PI+b*Math.log(1/phi))/(phi**a))/Math.sqrt(5);
	//v = z*w;
	
	//complex with real input
	//z = (phi**a-Math.cos(a*Math.PI)/(phi**a))/Math.sqrt(5);
	//w = (-Math.sin(a*Math.PI)/(phi**a))/Math.sqrt(5);
	
	//flower
	//z = a/(b**2+0.01);
	//w = b/(a**2+0.01);
	//v = 0;
	
	//z = (b**2)/(a**2+1);
	//w = (a**2)/(b**2+1);
	
	//rotated flower
	//z = (a+b)/((a-b)**2+1);
	//w = (a-b)/((a+b)**2+1);
	
	//z = 5*(a+b)/(a**2+b**2+9);
	//w = 5*(a-b)/(a**2+b**2+9);
	
	//random bitmap
	z = Math.random();
	w = Math.random();
	v = Math.random();
	
	//z = 2*Math.random()-1;
	//w = 1/(Math.random()**2+1);
	//v = z*w;
	
	//z = Math.sin(Math.PI*a);
	//w = 1-1/22;
	
	//z = Math.sin(a**2+b**2)*88*Math.sqrt(a**2+b**2+1);
	//w = Math.sin((a**2+b**2)*88*Math.sqrt(a**2+b**2+1));
	//w = 1-1/11;
	
	/*var p = 22;
	function f1(x1,x2) {
		return Math.cos(p*x2/x1)/p;
	};
	function f2(x1,x2) {
		return Math.sin(p*x2/x1)/p;
	};
	z = (1+summ(1,p,f1,69*a))/2;
	w = (1+summ(1,p,f2,69*b))/2;
	v = z*w;
	z = v/(1+1/8);
	w = v/(1+1/7);*/
	
	/*function f(s1,s2) {
		var p = 22;
		var s = 1;
		for (var i = 0; i <= p-1; i++) {
			s = (s1**2-s2**2+s1*s2+s1)/(i*s**2+1);
		};
		return s;
	};
	z = f(a,b);
	w = 0;
	v = 0;*/
	
	//z = ((1-a**2-b**2)*((a**2)*(b**2)-a**2-b**2)+1)*22;
	//w = 1;
	//v = 1;
	
	//z = Math.sqrt(Math.abs(1-(a**2+b**2)*(1-Math.sqrt(4/(a**2+b**2)))**2));
	//w = z;
	//v = w;
	
	/*var p = 18;
	function f(s1,s2,s3) {
		return ((-1)**s1)*(s2**(4*s1)+s3**(4*s1)+1)/fact(2*s1);
	};
	z = summ2(1,p,f,4*a,4*b);
	w = z;
	v = w;*/
	
	//z = Math.sin(2*Math.PI*a)/4+1/4;
	//z = 1/2;
	//w = 1;
	//v = 0;
	
	//weierstrass
	/*{
	var n = 8;
	nn = 8;
	inputa1 = random1;
	inputa2 = 2*Math.floor(1+(1+(1+3*Math.PI/2)/a)/2)+1+2*nn;
	inputb1 = random2;
	inputb2 = 2*Math.floor(1+(1+(1+3*Math.PI/2)/b)/2)+1+2*nn;
	
	function wei(i1,i2) {
		return function(nnn,xxx) {
			return (i1**nnn)*Math.cos((i2**nnn)*Math.PI*xxx)};
	};
	z = summ(0,n,wei(inputa1,inputa2),a);
	w = summ(0,n,wei(inputb1,inputb2),b);
	//w = 1-1/29;
	v = z*w;
	};*/
	
	/*function f1(n) {
		r = Math.random();
		//r = 1;
		var p = 3;//22;
		var k = n;
		for (var i = 0; i <= p-1; i++) {
			k = k**2-r*k+k*(i**2);
		};
		return k;
	};
	function f2(n) {
		r = Math.random();
		//r = 1;
		var p = 3;//22;
		var k = n;
		for (var i = 0; i <= p-1; i++) {
			k = k*i+r*k-(k**2);
		};
		return k;
	};
	z = f1(a);
	w = f2(b);
	v = 1;*/
	
	{
		function cosh(x1) {return Math.cosh(x1);}
		function sinh(x1) {return Math.sinh(x1);}
		function cos(x1) {return Math.cos(x1);}
		function sin(x1) {return Math.sin(x1);}
		function matematiikka(x1,y1) {
			return [cosh(x1)*cos(y1)+1,sinh(x1)*sin(y1)];
		}
		function modulus([x1,y1]) {
			return x1^2+y1^2;
		}
		var maksimi = 22;
		var c1 = 5*a;
		var c2 = 5*b;
		var i = 0;
		while (i < maksimi && modulus(matematiikka(c1,c2)) > 1/maksimi) {
			i++;
			var ctemp = c1;
			c1 += (sinh(c1)*cos(c2)-cosh(c1)*sinh(c1)*(cos(c2)^2)+cosh(c1)*sinh(c1)*(sin(c2)^2))/((sinh(c1)*cos(c2))^2+(cosh(c1)*sin(c2))^2);
			c2 += ((cosh(ctemp)^2)*cos(c2)*sin(c2)-cosh(ctemp)*sin(c2)-(sinh(ctemp)^2)*cos(c2)*sin(c2))/((sinh(ctemp)*cos(c2))^2+(cosh(ctemp)*sin(c2))^2);
		}
		z = 3*(i/22)^2-2*(i/22)^3;
		w = 0;
		v = 0;
	}
	
	/*function f(n1,n2,n3) {
		return (n2+n3)/22+Math.random()/(n1+1);
	};
	z = summ2(1,22,f,a,b);
	w = 0;
	v = 0;*/
	
	//var s = new kolorekt(x,y,1,1,huehue5(z,w,v));
	var s = new kolorekt(x,y,1,1,huehue6(z,w,v));
	asdf.push(s);
};

function randomfunction() {
	var p = Math.floor(Math.log(Math.min(kanvas.width,kanvas.height))/Math.log(2));
	var r = 1;//4 //1 //1/2
	var k = 1;//4 //1
	var d = p;
	var h = 1;//Math.random(); //1
	var l = 0;
	var randomvariable = Math.random();
	
	console.log("h is "+h);
	for (var i = 0; i <= kanvas.width*kanvas.height-1; i++) {
		//asdf[i] = [1,1,1];
		asdf[i] = [0,0,0];
	};
	console.log("asdf[2] is "+asdf[2]);
	console.log("asdf[last] is "+asdf[kanvas.width*kanvas.height-1]);
	for (var s = 0; s <= d; s++) {
		console.log("s is "+s);
		for (var i = 0; i <= 2**s-1; i++) {
			//l = 1-l;
			for (var j = 0; j <= 2**s-1; j++) {
				var r1 = 1-(Math.random())**r;
				var r2 = 1-(Math.random())**r;
				var r3 = 1-(Math.random())**r;
				//l = 1-l;
				//var r1 = l;
				//var r2 = l;
				//var r3 = l;
				//h = 1-h*Math.random();
				for (var x = i*(2**(p+1-s)); x <= kanvas.width-1 && x <= (i+1)*(2**(p+1-s))-1; x++) {
					for (var y = j*(2**(p+1-s)); y <= kanvas.height-1 && y <= (j+1)*(2**(p+1-s))-1; y++) {
						//h = 1-h*Math.random();
						//asdf[x*kanvas.width+y][0] += (k*r1/(d+1));
						//asdf[x*kanvas.width+y][1] += (k*r2/(d+1));
						//asdf[x*kanvas.width+y][2] += (k*r3/(d+1));
						asdf[x*kanvas.width+y][0] += (h/(d+1)+(1-h)/(2**(p+1-s)))*k*r1;
						asdf[x*kanvas.width+y][1] += (h/(d+1)+(1-h)/(2**(p+1-s)))*k*r2;
						asdf[x*kanvas.width+y][2] += (h/(d+1)+(1-h)/(2**(p+1-s)))*k*r3;
					};
				};
			};
		};
	};
	
	console.log("asdf[66666] is "+asdf[66666]);
	
	function f1(x,y,z) {
		var s = y+(1+Math.sign(2*x-1)*(Math.abs(2*x-1))**z)/2;
		return s-Math.floor(s);
	};
	
	function f2(x,y) {
		return x**y;
	};
	
	function f3(x,y) {
		var s = x;
		for (var i = 0; i <= y-1; i++) {
			s = (1-Math.cos(Math.PI*s))/2;
		};
		return s;
	};
	
	function f4(x,y,z) {
		var s = y+((1-Math.abs(2*x-1))**z)*(1-2*Math.floor(2*x))/2+Math.floor(x);
		return s-Math.floor(s);
	};
	
	console.log("f1(1,1,5) is "+f1(1,1/4,5));
	for (s in asdf) {
		//asdf[s][0] = f2(f1(asdf[s][0],randomvariable,2),1);
		//asdf[s][1] = f2(f1(asdf[s][1],0,1),1/2);
		//asdf[s][2] = f4(f2(f1(asdf[s][2],0,1),1),4);
		
		asdf[s][0] = f2(f1(asdf[s][0],randomvariable,2),1);
		asdf[s][1] = f2(f1(asdf[s][1],0,1/4),1);
		//asdf[s][2] = f4(f2(f1(asdf[s][2],0,1),1),0,2);
		
		//nebula
		asdf[s][2] = f3(f2(asdf[s][2],2),3);
	};
	
	for (s in asdf) {
		asdf[s] = new kolorekt(Math.floor(s/kanvas.width),s-kanvas.width*Math.floor(s/kanvas.width),
		1,1,huehue5(asdf[s][0],asdf[s][1],asdf[s][2]));
		asdf[s].makeKANVAS();
	};
	console.log("finished");
	console.log(asdf[66666]);
	console.log("p is "+p);
};

function randomfunction2() {
	for (var i = 0; i <= kanvas.width*kanvas.height-1; i++) {
		asdf[i] = [0,0,0];
	};
	console.log(asdf[2]);
	console.log(asdf[kanvas.width*kanvas.height-1]);
	var p = Math.floor(Math.log(Math.min(kanvas.width,kanvas.height))/Math.log(2));
	for (var s = 0; s <= p-1; s++) {
		for (var i = 0; i <= 2**s-1; i++) {
			for (var j = 0; j <= 2**s-1; j++) {
				var r1 = Math.random();
				var r2 = Math.random();
				var r3 = Math.random();
				for (var x = 2**i-1; x <= kanvas.width-1 && x <= 2**(i+1)-2; x++) {
					for (var y = 2**j-1; y <= kanvas.height-1 && y <= 2**(j+1)-2; y++) {
						asdf[x*kanvas.width+y][0] += r1/(p+1);
						asdf[x*kanvas.width+y][1] += r2/(p+1);
						asdf[x*kanvas.width+y][2] += r3/(p+1);
					};
				};
			};
		};
	};
	for (s in asdf) {
		asdf[s] = new kolorekt(Math.floor(s/kanvas.width),s-kanvas.width*Math.floor(s/kanvas.width),1,1,
		huehue6(asdf[s][0],asdf[s][1],asdf[s][2]));
		asdf[s].makeKANVAS();
	};
	console.log("finished");
	console.log(asdf[66666]);
};

function loading0() {
	stranger();
	var kanvack2 = new kolorekt(0,0,kanvas2.width,kanvas2.height,"black");
	var loading = new kolorekt(0,0,(kanvas2.width)*(strangeVALUE)/(rangeMAX),44,"white");
	kanvack2.makeKANVAS2();
	loading.makeKANVAS2();
};

function drawkanvas1() {
	console.log(huehue2(1));
	for (var i = 0; i < kanvas.width-1; i++) {
		for (var j = 0; j < kanvas.height-1; j++) {
			//asdfasdf2(i,j,0);
			asdfasdf3(i,j);
		};
	};
	for (a in asdf) {
		asdf[a].makeKANVAS();
	};
};

function drawaxes() {
	var horizontalaxis = new kolorekt(0,Math.floor(kanvas.height/2),kanvas.width,1,"#FF0000");
	var verticalaxis = new kolorekt(Math.floor(kanvas.width/2),0,1,kanvas.height,"#FF0000");
	function q() {
		var a = 2/Math.max(kanvas.width,kanvas.height);
		for (var i = 0; i < kanvas.width-1; i++) {
			var k = i-kanvas.width/2;
			var s = new kolorekt(i,Math.floor(kanvas.height/2),1,1,huehue2(a*k));
			s.makeKANVAS();
		};
		for (var i = 0; i < kanvas.height-1; i++) {
			var k = i-kanvas.height/2;
			var s = new kolorekt(Math.floor(kanvas.width/2),i,1,1,huehue2(a*k));
			s.makeKANVAS();
		};
	};
	q();
	
	//horizontalaxis.makeKANVAS();
	//verticalaxis.makeKANVAS();
};

function makeBOX() {
	loading0();
	//drawaxes();
	drawkanvas1();
	//randomfunction();
};

function buttonBUTTON() {
	makeBOX();
};

	function easier(a) {
	var s = "";
	for (x in a) {
		var k = eval(a[x]);
		s += a[x]+":"+"&#8193"+"&#8193"+" "+k+"<br><br>";
	};
	return s;
};

function buttonBUTTON2() {
	stranger();
	informator.innerHTML = easier([
	"kanvas.width",
	"stRANGE1.value",
	"strangeVALUE",
	"limiter(strangeVALUE/rangeMAX,256)",
	"HUEHUE(strangeVALUE/rangeMAX,strangeVALUE/rangeMAX,1)",
	"(420).toString(16)",
	"plane2",
	]);
};

function button3() {
	if (interKOUNTER == 0) {
		starter0();
	}
	else {
		stopper0();
	}
};

function button4() {
	stopper0();
};

function rangebutton0() {
	stopper0();
	inter2 = null;
	inter1 = null;
	strangeVALUE = Number(stRANGE1.value);
	buttonBUTTON2();
	buttonBUTTON();
};
