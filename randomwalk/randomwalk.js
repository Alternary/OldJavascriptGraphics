var kanvas;
var kanvasKONTEXT;

var kw;
var kh;

window.onload = function() {
	kanvas = document.getElementById('canvasid');
	kanvasKONTEXT = kanvas.getContext('2d');
	kw = kanvas.width;
	kh = kanvas.height;
	randomwalk();
}



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

function huehue5(x,y,z) {
	var a = 360*saw3(x,1);
	var b = 100*saw3(y,1);
	var c = 100*saw3(z,1);
	
	return `hsl(${a+""},${b+"%"},${c+"%"}`;

};

function saw3(x,y) {
	if (x < 1) {
		return x-y*Math.floor(x/y);
	}
	else {
		return x+y*Math.floor(-x/y)+y;
	}
};


var iterationamount = 1111;

var array = [];



function randomwalk() {
	for (var i = 0; i <= kw-1; i++) {
		array[i] = [];
		for (var j = 0; j <= kh-1; j++) {
			(array[i])[j] = 0;
		}
	}
	
	
	var k = [Math.floor(kw/2),Math.floor(kh/2)];
	for (var i = 0; i <= iterationamount-1; i++) {
		var r = Math.random();
		//var s = Math.floor(Math.min(kh,kw)*r*Math.random());
		var s = 9;
		if (r < 1/2) {
			if (r < 1/4) {
				k = [k[0],k[1]+s];
			}
			else {k = [k[0]+s,k[1]];}
		}
		else {
			if (r < 3/4) {
				k = [k[0],k[1]-s];
			}
			else {k = [k[0]-s,k[1]];}
		}
		k = [saw3(k[0],kw),saw3(k[1],kh)];
		(array[(k[0])])[(k[1])] += 1/iterationamount;
	}
	
	for (var i in array) {
		for (var j in array[i]) {
			var y = ((array[i])[j])**(1/9);
			var x = new kolorekt(i,j,1,1,huehue5(y,y,y));
			x.makeKANVAS();
		}
	}
}