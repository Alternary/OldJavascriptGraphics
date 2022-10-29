var buttonVIDEO;

var boddy;

var kanvas;
var kanvasKONTEXT;

window.onload = function() {
	buttonVIDEO = document.getElementById('videoBUTTON');
	
	boddy = document.getElementById('boddy1');

	kanvas = document.getElementById('videoKANVAS');
	kanvasKONTEXT = kanvas.getContext('2d');
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
};

var plane = [];

function planar() {
	for (var i = 0; i <= kanvas.width-1; i++) {
		plane[i] = [];
		for (var j = 0; j <= kanvas.height-1; j++) {
			(plane[i])[j] = j;
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

//0 is 0 and 1 is 1
function saw3(x,y) {
	if (x < 1) {
		return x-y*Math.floor(x/y);
	}
	else {
		return x+y*Math.floor(-x/y)+y;
	}
};

function no0(x) {
	if (x == 0) {
		return 1;
	}
	else {
		return x;
	}
}

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

function blackwhite(x) {
	if (x**2 == 1) {return "#00FF00";}
	else {
		var i = 255*(1+x)/2;
		i = "0"+(Math.floor(i)).toString(16);
		i = i.substr(-2);
		return (`#${i}${i}${i}`);
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
	var a = 360*saw1(x,1);
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

var zoomamount = 4;//8;
var xoffset = 0;
var yoffset = 0;
//where the point (0,0) is mapped
var xero = 0;
var yero = 0;

function asdfasdf3(x,y) {
	var m = Math.max(kanvas.width,kanvas.height);
	
	//a and b range from -zoomamount to zoomamount inclusive.
	var a = zoomamount*((2*x-kanvas.width)/m-xoffset)-xero;
	//var b = zoomamount*((2*y-kanvas.height)/m-yoffset)-yero;
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
	
	/*//random bitmap
	z = Math.random();
	w = Math.random();
	v = Math.random();*/
	
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
	
	
	/*{
		function cosh(x1) {return Math.cosh(x1);}
		function sinh(x1) {return Math.sinh(x1);}
		function cos(x1) {return Math.cos(x1);}
		function sin(x1) {return Math.sin(x1);}
		function matematiikka(x1,y1) {
			return [cosh(x1)*cos(y1)+1,sinh(x1)*sin(y1)];
		}
		function modulus([x1,y1]) {
			return x1*2+y1*2;
		}
		var maksimi = 22;
		var c1 = 5*a;
		var c2 = 5*b;
		var i = 0;
		while (i < maksimi && modulus(matematiikka(c1,c2)) > 1/maksimi) {
			i++;
			var ctemp = c1;
			c1 = (sinh(c1)*cos(c2)-cosh(c1)*sinh(c1)*(cos(c2)*2)+cosh(c1)*sinh(c1)*(sin(c2)**2))/((sinh(c1)*cos(c2))*2+(cosh(c1)*sin(c2))*2);
			c2 = ((cosh(ctemp)**2)*cos(c2)*sin(c2)-cosh(ctemp)*sin(c2)-(sinh(ctemp)**2)*cos(c2)*sin(c2))/((sinh(ctemp)*cos(c2))*2+(cosh(ctemp)*sin(c2))*2);
		}
		z = saw3(3*((i/22)**2)-2*((i/22)**3),1);
		w = z;
		v = 1/2;
	}*/
	
	{
		function power([x1,y1],[z1,w1]) {
			var scalar = ((x1**2+y1**2)**(z1/2))*Math.exp(-w1*Math.atan2(y1,x1));
			var operand = z1*Math.atan2(y1,x1)+w1*Math.log(Math.sqrt(x1**2+y1**2));
			return [scalar*Math.cos(operand),scalar*Math.sin(operand)];
		}
		
		function po([x1,y1],[z1,w1]) {
			var scalar = ((x1**2+y1**2)**(z1/2))*Math.exp(-w1*Math.atan2(y1,x1));
			var operand = z1*Math.atan2(y1,x1)+w1*Math.log(Math.sqrt(x1**2+y1**2));
			return [scalar*Math.cos(operand),scalar*Math.sin(operand)];
		}
		
		function expo([x1,y1]) {
			return multiplication([Math.exp(x1),0],[Math.cos(y1),Math.sin(y1)]);
		}
		
		function multiplication(x1,y1) {
			return [x1[0]*y1[0]-x1[1]*y1[1],x1[1]*y1[0]+x1[0]*y1[1]];
		}
		
		function mu(x1,y1) {
			return [x1[0]*y1[0]-x1[1]*y1[1],x1[1]*y1[0]+x1[0]*y1[1]];
		}
		
		function fraction(x1,y1) {
			return multiplication([x1[0]*y1[0]+x1[1]*y1[1],x1[1]*y1[0]-x1[0]*y1[1]],[1/no0(y1[0]**2+y1[1]**2),0]);
		}
		
		function summa(x1,y1) {
			return [x1[0]+y1[0],x1[1]+y1[1]];
		}
		
		function su(x1,y1) {
			return [x1[0]+y1[0],x1[1]+y1[1]];
		}
		
		function csum(p1,p2,p3,[p4,p5]) {
			var s = [0,0];
			for (var i = p1; i < p2; i++) {
				s = summa(p3([p4,p5],i),s);
			}
			return s;
		}
		
		function negative([x1,y1]) {
			return [-x1,-y1];
		}
		
		function clog([x1,y1]) {
			return [Math.log(modulus([x1,y1])),argument([x1,y1])];
		}
		
		function logistic([x1,y1]) {
			return fraction([2,0],summa([1,0],power([2,0],negative([x1,0]))));
		}
		
		function bell([x1,y1]) {
			//return fraction([x1,y1],[(1+modulus([x1,y1])**2),(1+modulus([x1,y1])**2)]);'
			return multiplication([Math.cos(argument([x1,y1])),Math.sin(argument([x1,y1]))],[Math.exp(-(modulus([x1,y1])**2)),0]);
			//return expo(power([x1,y1],[-2,0]));
		}
		
		function units([x1,y1]) {
			return [Math.cos(argument([x1,y1])),Math.sin(argument([x1,y1]))];
		}
		
		function units2([x1,y1]) {
			return mu(units([x1,y1]),[1/2,0]);
		}
		
		function s(x1,y1) {
			if (y1 == 0) {
				return Math.cos(x1);
			}
			if (y1 == 1) {
				return Math.sin(x1);
			}
			if (y1 == 2) {
				return Math.cosh(x1);
			}
			else {
				return Math.sinh(x1);
			}
		}
		
		function ccos([x1,y1]) {
			return [Math.cos(x1)*Math.cosh(y1),-Math.sin(x1)*Math.sinh(y1)];
		}
		
		function csin([x1,y1]) {
			return [Math.sin(x1)*Math.cosh(y1),Math.cos(x1)*Math.sinh(y1)];
		}
		
		function ccosh([x1,y1]) {
			return [Math.cosh(x1)*Math.cos(y1),Math.sinh(x1)*Math.sin(y1)];
		}
		
		function csinh([x1,y1]) {
			return [Math.sinh(x1)*Math.cos(y1),Math.cosh(x1)*Math.sin(y1)];
		}
		
		function matematiikka(c1) {
			//return summa(power(c1,[3,0]),[-1,0]);
			//return summa(csin(c1),[-1,0]);
			//return summa(negative(ccos(c1)),[-1,0]);
			//return summa(ccosh(c1),[-1.08,0]);
			//return negative(ccos(c1));
			//return summa(power(c1,[5,0]),[-c1[0],0]);
			return [10000,0];
		}
		
		function derivaatta(c1) {
			//return multiplication(power(c1,[2,0]),[3,0]);
			//return ccos(c1);
			//return (csin(c1));
			//return csinh(c1);
			//return csin(c1);
			return summa(multiplication(power(c1,[4,0]),[5,0]),[-1,0]);
		}
		
		function newton([x1,y1]) {
			return summa([x1,y1],negative(fraction(matematiikka([x1,y1]),derivaatta([x1,y1]))));
		}
		
		function modulus([x1,y1]) {
			return Math.sqrt(x1**2+y1**2);
		}
		
		function argument([x1,y1]) {
			return Math.atan2(y1,x1);
		}
		
		var maksimi = 0;//22;//2;
		var c = [a,b];
		var i = 0;
		while (i < maksimi && modulus(matematiikka(c)) > 1/(maksimi**2)) {
			i++;
			//c = newton(c);
			//c = ([4*modulus(csin(c)),2]);
			c = summa(power(c,[-3,0]),c);
			//c = ccos([1/no0(modulus(ccos(c))),1]);
		}
		
		function cfloor([x1,y1]) {
			return mu(units([x1,y1]),[Math.floor(x1)+Math.floor(y1),0]);
		}
		
		function csaw([x1,y1]) {
			return mu(units([x1,y1]),[(x1+y1-Math.floor(x1)-Math.floor(y1))/2,0]);
		}
		
		function square([x1,y1]) {
			//return summa(cfloor([xx1,yy1]),mu(cfloor(fraction([xx1,yy1],[2,0])),[-2,0]));
			return mu(units([x1,y1]),[(Math.floor(x1)-Math.floor(y1)-2*Math.floor(x1/2)+2*Math.floor(y1/2))**2,0]);
		}
		
		function sq2([x1,y1]) {
			return mu(units([x1,y1]),[(Math.floor(x1)-Math.floor(-y1)-2*Math.floor(x1/2)+2*Math.floor(-y1/2))**2,0]);
		}
		
		function saw([x1,y1]) {
			return su(mu(csaw([x1,y1]),square([x1,y1])),mu(csaw(negative([x1,y1])),sq2([x1,y1])));
		}
		
		function f([x1,y1],z1) {
			//return fraction([1,0],power([z1,0],[11*x1,11*y1])); //riemann zeta function simple
			//return fraction(saw(mu([2**z1,0],[x1,y1])),[2**z1,0]); //blancmange
			//return cfloor([x1]);
			//return mu(ccos(mu([(9**z1)*Math.PI,0],[x1/11,y1/11])),[0.9**z1,0]); //weierstrass
			return fraction(csin(mu(expo([z1,0]),[x1,y1])),[3**z1,0])
		}
		
		//c = csum(1,3,f,c);
		//c = mu(csaw(c),square(c));
		//c = mu(csaw(c),sq2(c));
		//c = negative(c);
		//c = saw(c);
		//c = mu(cfloor(c),[1/zoomamount,0]);
		//c = fraction(s1(c),[1/zoomamount,0]);
		//c = cfloor(c);
		//c = csaw(po(c,[-1,0]));
		//c = mu(csaw(mu(csaw(c),square(c))),[1/2,0]);
		//c = bell(po(cfloor(c),[-1,0]));
		//c = (mu(bell(c),csaw(c)));
		//c = (summa(mu((csaw(mu(csaw(mu(c,[1/9,9])),[-1/8,-8]))),[1/8,0]),[1/2,1/5]));
		//c = bell(po(mu(bell(c),square(c)),[1/2,1/3]));	
		//c = csaw([modulus(mu(cfloor(c),csaw(mu(c,[2,-1]))))/11,0]);
		//c = csaw(po(po(c,[-2,-1]),[2/3,1]));
		//c = units2(c);
		//c = expo([-1,argument(c)+modulus(c)/2]); //vortex
		//z = saw3(3*((i/maksimi)**2)-2*((i/maksimi)**3),1);
		//c = power(c,[1/3,0]);
		//c = ccos(csin(c));
		//c = ccos(ccos(c));
		z = argument(c)/(2*Math.PI);
		//z = modulus(c);
		w = 1;
		v = modulus(c);//1/2
	}
	
	/*{
		//quadratic map
		var a1 = Math.floor(x-kanvas.width/2);
		var b1 = Math.floor(y-kanvas.height/2);
		
		function s1(x1,y1) {
			return (Math.sign(x1**2-4*y1)+1)/2;
		}
		
		function s2(x1,y1) {
			return (1-Math.sign(x1**2-4*y1))/2;
		}
		
		z = (-a1+s1(a1,b1)*Math.sqrt(Math.abs(a1**2-4*b1)))/2;
		w = 1;
		v = s2(a1,b1)*Math.sqrt(Math.abs(a1**2-4*b1))/2;
	}*/
	
	/*function f(n1,n2,n3) {
		return (n2+n3)/22+Math.random()/(n1+1);
	};
	z = summ2(1,22,f,a,b);
	w = 0;
	v = 0;*/
	
	var s = new kolorekt(x,kanvas.height-y-1,1,1,huehue5(z,w,v+10));
	//var s = new kolorekt(x,y,1,1,huehue6(z,w,v));
	s.makeKANVAS();
	//asdf.push(s);
};

function drawkanvas1() {
	console.log(huehue5(1,1,1));
	console.log(Math.atan2(-1,0));
	for (var i = 0; i < kanvas.width-1; i++) {
		for (var j = 0; j < kanvas.height-1; j++) {
			asdfasdf3(i,j);
		};
	};
	/*for (a in asdf) {
		asdf[a].makeKANVAS();
	};*/
};

function drawaxes() {
	var horizontalaxis = new kolorekt(0,Math.floor(kanvas.height/2),kanvas.width,1,"#FF0000");
	var verticalaxis = new kolorekt(Math.floor(kanvas.width/2),0,1,kanvas.height,"#FF0000");
	function q() {
		var a = 2/Math.max(kanvas.width,kanvas.height);
		for (var i = 0; i < kanvas.width-1; i++) {
			var k = i-kanvas.width/2;
			var s = new kolorekt(i,Math.floor(kanvas.height/2),1,1,huehue5(a*k,0,1/2));
			s.makeKANVAS();
		};
		for (var i = 0; i < kanvas.height-1; i++) {
			var k = i-kanvas.height/2;
			var s = new kolorekt(Math.floor(kanvas.width/2),i,1,1,huehue5(a*k,0,1/2));
			s.makeKANVAS();
		};
	};
	q();
	
	//horizontalaxis.makeKANVAS();
	//verticalaxis.makeKANVAS();
};

function makeBOX() {
	drawkanvas1();
	drawaxes();
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