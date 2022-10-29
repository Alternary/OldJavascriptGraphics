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

var asdf1 = [];
var asdf2 = [];

var zoomamount = 1;

function randomfunction(asdf) {
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

function randomfunction3(asdf) {
	var p = Math.floor(Math.log(Math.min(kanvas.width,kanvas.height))/Math.log(2));
	var r = 1;//4 //1 //1/2
	var k = 1;//4 //1
	var d = p;
	var h = 1;//Math.random(); //1
	var l = 0;
	var randomvariable = Math.random();
	
	//console.log("h is "+h);
	/*if (asdf[0] == null) {
		console.log("asdf[0]==null");*/
		for (var i = 0; i <= kanvas.width*kanvas.height-1; i++) {
			//asdf[i] = 1;
			asdf[i] = 0;
		};
	//}
	//console.log("asdf[2] is "+asdf[2]);
	//console.log("asdf[last] is "+asdf[kanvas.width*kanvas.height-1]);
	for (var s = 0; s <= d; s++) {
		//console.log("s is "+s);
		for (var i = 0; i <= 2**s-1; i++) {
			//l = 1-l;
			for (var j = 0; j <= 2**s-1; j++) {
				var r1 = 1-(Math.random())**r;
				//l = 1-l;
				//var r1 = l;
				//h = 1-h*Math.random();
				for (var x = i*(2**(p+1-s)); x <= kanvas.width-1 && x <= (i+1)*(2**(p+1-s))-1; x++) {
					for (var y = j*(2**(p+1-s)); y <= kanvas.height-1 && y <= (j+1)*(2**(p+1-s))-1; y++) {
						//h = 1-h*Math.random();
						//asdf[x*kanvas.width+y] += (k*r1/(d+1));
						asdf[x*kanvas.width+y] += (h/(d+1)+(1-h)/(2**(p+1-s)))*k*r1;
					};
				};
			};
		};
	};
	
	//console.log("asdf[66666] is "+asdf[66666]);
	
	/*function f1(x,y,z) {
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
	}*/
	
	/*for (s in asdf) {
		asdf[s] = new kolorekt(Math.floor(s/kanvas.width),s-kanvas.width*Math.floor(s/kanvas.width),
		1,1,huehue6(asdf[s],asdf[s],asdf[s]));
		asdf[s].makeKANVAS();
	}*/
	//console.log("finished");
	//console.log(asdf[66666]);
	//console.log("p is "+p);
};

function randomfunction4(asdf) {
	var p = Math.floor(Math.log(Math.min(kanvas.width,kanvas.height))/Math.log(2));
	var r = 1;//4 //1 //1/2
	var n = 1;//4 //1
	var d = p;
	var h = 1;//Math.random(); //1
	var l = 0;
	//var randomvariable = Math.random();
	
	//console.log("h is "+h);
	/*if (asdf[0] == null) {
		console.log("asdf[0]==null");*/
		for (var i = 0; i <= kanvas.width-1; i++) {
			asdf[i] = [];
			for (var j = 0; j <= kanvas.height-1; j++) {
				asdf[i][j] = [];
				for (var k = 0; k <= kanvas.width-1; k++) {
					//asdf[k][j][i] = 1;
					asdf[i][j][k] = 0;
				};
			};
		};
		console.log(asdf[1][1][1]);
	//}
	//console.log("asdf[2] is "+asdf[2]);
	//console.log("asdf[last] is "+asdf[kanvas.width*kanvas.height-1]);
	for (var s = 0; s <= d; s++) {
		//console.log("s is "+s);
		for (var k = 0; k <= 2**s-1; k++) {
			//l = 1-l;
			for (var j = 0; j <= 2**s-1; j++) {
				for (var i = 0; i <= 2**s-1; i++) {
					var r1 = 1-(Math.random())**r;
					//l = 1-l;
					//var r1 = l;
					//h = 1-h*Math.random();
					for (var z = k*(2**(p+1-s)); z <= kanvas.width-1 && z <= (k+1)*(2**(p+1-s))-1; z++) {
						for (var y = j*(2**(p+1-s)); y <= kanvas.height-1 && y <= (j+1)*(2**(p+1-s))-1; y++) {
							for (var x = i*(2**(p+1-s)); x <= kanvas.width-1 && x <= (i+1)*(2**(p+1-s))-1; x++) {
								//h = 1-h*Math.random();
								//asdf[x*kanvas.width+y] += (k*r1/(d+1));
								//asdf[x][y][z] += (h/(d+1)+(1-h)/(2**(p+1-s)))*n*r1;
								asdf[z][x][y] += n*r1/(d+1);
							};
						};
					};
				};
			};
		};
	};
	
	/*for (s in asdf) {
	asdf[s] = new kolorekt(Math.floor(s/kanvas.width)-kanvas.width*Math.floor(s/(kanvas.width**2)),
	s-kanvas.width*Math.floor(s/kanvas.width),
	1,1,huehue6(asdf[s],asdf[s],asdf[s]));
	asdf[s].makeKANVAS();
	};*/
	for (z in asdf) {
		for (y in asdf[z]) {
			for (x in asdf[z][y]) {
				var temp = asdf[x][y][z];
				asdf[x][y][z] = new kolorekt(x,y,1,1,huehue6(temp,temp,temp));
			};
		};
	};
	console.log(asdf[12][13][14]);
	console.log(asdf);
};

function randomfunction5 (asdf) {
	var kuutioleveys = kanvas.width;
	var kuutiokorkeus = kanvas.height;
	var kuutioaika = Math.min(kuutioleveys, kuutiokorkeus); kuutioaika = 1;
	//var eksponentti = Math.floor(Math.log(Math.min(kuutioleveys, kuutiokorkeus, kuutioaika))/Math.log(2));
	var eksponentti = Math.floor(Math.log(Math.min(kuutioleveys, kuutiokorkeus))/Math.log(2));
	var p = eksponentti;
	var r = [];
	
	for (var i = 0; i <= kuutioaika-1; i++) {
		asdf[i] = [];
		for (var j = 0; j <= kuutiokorkeus-1; j++) {
			asdf[i][j] = [];
			for (var k = 0; k <= kuutioleveys-1; k++) {
				asdf[i][j][k] = [0,0,0];
				//console.log([i,j,k]);
			};
		};
	};
	//console.log(asdf);
	console.log(eksponentti);
	
	for (var s = 0; s <= p; s++) {
		
		for (var i = 0; i <= 2**s-1; i++) {
			for (var j = 0; j <= 2**s-1; j++) {
				for (var k = 0; k <= 2**s-1; k++) {
					r[0] = Math.random();
					r[1] = Math.random();
					r[2] = Math.random();
					//r = [1,1,1];
					for (var z = i*(2**(p+1-s)); z <= (i+1)*(2**(p+1-s))-1 && z <= kuutioaika-1; z++) {
						for (var y = j*(2**(p+1-s)); j <= (j+1)*(2**(p+1-s))-1 && y <= kuutiokorkeus-1; y++) {
							for (var x = k*(2**(p+1-s)); k <= (k+1)*(2**(p+1-s))-1 && x <= kuutioleveys-1; x++) {
								
								//console.log(""+asdf[z][y][x]+" is this "+z+" "+y+" "+x);
								//asdf[z][y][x] = [z,y,x];
								asdf[z][y][x][0] += r[0];
								asdf[z][y][x][1] += r[1];
								asdf[z][y][x][2] += r[2];
								//console.log(asdf[z][y][x]);
								
							};
						};
					};
					
				};
			};
		};
		
	};
	
	for (z in asdf) {
		for (y in asdf[z]) {
			for (x in asdf[z][y]) {
				var temp = asdf[z][y][x];
				asdf[z][y][x] = new kolorekt(x,y,1,1,huehue6(temp[0]/(eksponentti+1),temp[1]/(eksponentti+1),temp[2]/(eksponentti+1)));
			};
		};
	};
};

var fullarray = [];

function interplay() {
	var max1 = 1;
	randomfunction3(asdf1);
	fullarray[0] = asdf1;
	var max2 = 1;
	var j = 0;
	function difference(x,y) {
		var summa = 0;
		for (s in x) {
			summa += Math.abs(x[s]-y[s]);
		}
		return summa;
	}
	for (var i = 0; i <= max1-1; i++) {
		randomfunction3(asdf1);
		while (j <= max2-1 && difference(asdf1,fullarray[i]) >= kanvas.width*kanvas.height/2) {
			randomfunction3(asdf1);
			j++;
		}
		fullarray[i+1] = asdf1;
	}
	function kanvasmaker(x) {
		console.log("unfinished");
		for (s in x) {
			x[s] = new kolorekt(Math.floor(s/kanvas.width),s-kanvas.width*Math.floor(s/kanvas.width),
			1,1,huehue6(x[s],x[s],x[s]));
			x[s].makeKANVAS();
			//console.log("finished");
		}
	}
	/*for (s in fullarray) {
		var k = setTimeout(() => {kanvasmaker(fullarray[s]);},3000*s);
		//setTimeout(() => {console.log("heck");},3000*s);
	}*/
	/*var aaaa = 0;
	var timer1 = setInterval(() => {kanvasmaker(fullarray[aaaa]); aaaa++; console.log(fullarray[aaaa]);},3000*aaaa+3000);*/
	//kanvasmaker(fullarray[0]);
	//setTimeout(kanvasmaker(fullarray[1]), 4000);
}

var kolors = ["#714a1d",
"#386d1f",
"#be6059",
"#56bdab",
"#5b40d5",
"#a44bd8",
"#c4cb4c",
"#26307e",
"#f83f33"];

function randomfunction2(asdf) {
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

function makeBOX() {
	loading0();
	//randomfunction3(asdf1);
	//interplay();
	randomfunction5(asdf1);
	var z = 0;
	for (y in asdf1[z]) {
		for (x in asdf1[z][y]) {
			asdf1[z][x][y].makeKANVAS();
		};
	};
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
