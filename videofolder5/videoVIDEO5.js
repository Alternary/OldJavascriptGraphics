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

function limiter(x,y) {
	return (x-y*Math.floor(1/2+x/y));
};

//first start index, second end index, third function of index and input, fourth input.
function summ(x,y,z,w) {
	var s = 0;
	for (var i = x; i <= y; i++) {
		s += z(i,w);
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
		
		//weierstrass
		{
		var n = 13;
		nn = 3;
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
		};
		
		return [limiter(z,2),w-Math.floor(w)];
	};
	var s = new kolorekt(x,y,1,1,huehue4(q(k*(x-kanvas.width/2),k*(y-kanvas.height/2),t)));
	asdf.push(s);
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
	for (var i = 0; i < kanvas.width; i++) {
		for (var j = 0; j < kanvas.height; j++) {
			asdfasdf2(i,j,0);
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
