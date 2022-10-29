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
	for (var i = 0; i <=  kanvas.width-1; i++) {
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
	return (x-y*Math.floor(x/y));
};

function summ(x,y,z,w) {
	var s = 0;
	for (var i = x; i <=y-1; i++) {
		s += z(i,w);
	};
	return s;
};

function HUEHUE(x,y,t) {
	var i;
	
	//original sinx
	/*{
		function q(w) {
			return 1+Math.sin(w);
		};
		i = 420*q(x+q(2*y+q(3*x+q(4*y))));
	};//*/	
	
	
	/*{
		function q(z1,z2) {
			return 666*666*(1-(limiter(z1*z1*(z2+1),2)-1)^2)/(z1*z1);
		};			
		
//		i = summ(1,5,q,(x/(x^2+y^2+2))/666);
		
//		i = summ(1,5,q,(x*x/(x^2+y^2+2))/666);
		
		i = summ(1,3,q,t+(x*x/(x^2+y^2+2))/666);
	};//*/
	
	{
		function q(z1,z2) {
			return 666*666*(1-(limiter((2**z1)*(z2+1),2)-1)^2)/(2**z1);
		};
		
		i = summ(1,5,q,(x*x/(x^2+y^2+2))/666);
	};//*/

	
		//right after drawing, calculate values//create array
	
	
	i = "00000"+(i.toFixed(0)).toString(16);
	i = i.substr(-6,6);
	return (`#${i}`);
};

function pixelfunction(x,y,t) {
	kanvasKONTEXT.fillStyle = HUEHUE(x,y,t);
	kanvasKONTEXT.fillRect(x,y,1,1);
};

function loading0() {
	stranger();
	var kanvack2 = new kolorekt(0,0,kanvas2.width,kanvas2.height,"black");
	var loading = new kolorekt(0,0,(kanvas2.width)*(strangeVALUE)/(rangeMAX),44,"white");
	kanvack2.makeKANVAS2();
	loading.makeKANVAS2();
};

function drawkanvas1() {
	for (var i = 0; i <= kanvas.width-1; i++) {
		for (var j = 0; j <= kanvas.height-1; j++) {
			pixelfunction(i,j,strangeVALUE);
		};
	};
};

function makeBOX() {
	loading0();
	drawkanvas1();
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
