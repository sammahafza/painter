let l = new Line(0,0,0,0);
let r = new Rect(0,0,0,0);
let c = new Circle(0,0,0);
let e = new Ellipse(0,0,0,0);
let marker;

let marks = [];

const filler = new Fill();

let cCopy = [];
let mode = 0;

let slider;
let current_color = 'black';

a_init = 0;
b_init = 0;

function setup() {
    createCanvas(1200, 900);
    noLoop();
	
	marker = new Marker(mouseX, mouseY, 1, 0);
	// buttons
	btnClear = createButton('Clear');
	
	btnLine = createButton('Line');
	btnRct = createButton('Rectangle');
	btnCircle = createButton("Circle");
	btnEllipse = createButton("Ellipse");
	btnFreeHand = createButton('FreeHand');
	
	btnFill = createButton("Fill Bucket");
	
	creator = createDiv('Created by: Samer Mahafza');
	creator.position(900, 25);
	creator.style('font-size', '16px');
	
	
	// colors buttons
	divColors = createDiv("");
	divColors.position(width+15, 20);
	divColors.addClass('colors_cont');
	
	btnBlack = createImg('colors/black.png', '');
	btnBlack.parent(divColors);
	btnBlack.addClass('colors_btn');
	
	btnGrey = createImg('colors/grey.png', '');
	btnGrey.parent(divColors);
	btnGrey.addClass('colors_btn');;
	
	btnBlue = createImg('colors/blue.png', '');
	btnBlue.parent(divColors);
	btnBlue.addClass('colors_btn');
	
	btnGreen = createImg('colors/green.png', '');
	btnGreen.parent(divColors);
	btnGreen.addClass('colors_btn');
	
	btnOrange = createImg('colors/orange.png', '');
	btnOrange.parent(divColors);
	btnOrange.addClass('colors_btn');
	
	btnWhite = createImg('colors/white.png', '');
	btnWhite.parent(divColors);
	btnWhite.addClass('colors_btn');
	
	btnPink = createImg('colors/pink.png', '');
	btnPink.parent(divColors);
	btnPink.addClass('colors_btn');
	
	btnPurble = createImg('colors/purble.png', '');
	btnPurble.parent(divColors);
	btnPurble.addClass('colors_btn');
	
	btnRed = createImg('colors/red.png', '');
	btnRed.parent(divColors);
	btnRed.addClass('colors_btn');
	
	btnYellow = createImg('colors/yellow.png', '');
	btnYellow.parent(divColors);
	btnYellow.addClass('colors_btn');
	
	selectColor('black');
	selectButton(0);
	
	
	// color btns event handlers
	btnBlack.mousePressed(() => {selectColor('black'); current_color = 'black';});
	btnGrey.mousePressed(() => {selectColor('gray'); current_color = 'gray';});
	btnBlue.mousePressed(() => {selectColor('blue'); current_color = 'blue';});
	btnGreen.mousePressed(() => {selectColor('green'); current_color = 'green';});
	btnOrange.mousePressed(() => {selectColor('orange'); current_color = 'orange';});
	btnPink.mousePressed(() => {selectColor('fuchsia'); current_color = 'fuchsia'});
	btnPurble.mousePressed(() => {selectColor('purple'); current_color = 'purple'});
	btnRed.mousePressed(() => {selectColor('red'); current_color = 'red'});
	btnWhite.mousePressed(() => {selectColor('white'); current_color = 'white'});
	btnYellow.mousePressed(() => {selectColor('yellow'); current_color = 'yellow'});
	
	btnClear.position(20, 20);
	btnLine.position(218, 20);
	btnRct.position(275, 20);
	btnCircle.position(375, 20);
	btnEllipse.position(439, 20);
	btnFreeHand.position(510, 20);
	
	btnFill.position(700, 20);
	
	
	const slider_string = createDiv('Stroke Size:');
	slider_string.position(40, 60);
	slider_string.style('font-size', '16px');
	slider = createSlider(1, 10, 1);
	slider.position(130, 65);
	slider.style('width', '80px');
	
	// btns event handlers
	btnClear.mousePressed(changeBG);
	btnLine.mousePressed(() => {
		selectButton(0);
		mode = 0;
	});
	btnRct.mousePressed(() => {
		selectButton(1);
		mode = 1;
	});
	
	btnCircle.mousePressed(() => {
		selectButton(2);
		mode = 2;
	});
	
	btnEllipse.mousePressed(() => {
		selectButton(3);
		mode = 3;
	});
	
	btnFill.mousePressed(() => {
		selectButton(4);
		mode = 4;
	});
	btnFreeHand.mousePressed(() => {
		selectButton(5);
		mode = 5;
	});
}

function changeBG() {
	background(255);
	resetAll();
}


function resetAll() {
	l = new Line(0,0,0,0);
	r = new Rect(0,0,0,0);
	c = new Circle(0,0,0);
	e = new Ellipse(0,0,0,0);
	marks = [];
	
	
}

function draw() {

    stroke(color(current_color));
	
	strokeWeight(slider.value());
    
    pixels = cCopy;
    updatePixels();
	
	drawObject("Line", l);
	drawObject("Rect", r);
	drawObject("Circle", c);
	drawObject("Ellipse", e);
	
	if (mode == 5)
	{
		
		if (mouseIsPressed == false) {
			marks.push(mouseX, mouseY);
		}
	
		marker.markings();
		marker.displayMarkings();
	}
}
function mousePressed() {
	
	if (mouseY > 100 && mouseX < width - 20)
	{
		if (mode == 0) {
			l.x1 = mouseX;
			l.y1 = mouseY;
		}
		else if (mode == 1) {
			r.xtl = mouseX;
			r.ytl = mouseY;
		}
		else if (mode == 2) {
			c.xc = mouseX;
			c.yc = mouseY;
		}
		else if (mode == 3) {
			a_init = mouseX;
			b_init = mouseY;
		}
	}
	
	
    
}

function mouseClicked() {
	if (mouseY > 100 && mouseX < width - 20)
	{
		if (mode == 4)
		{
			loadPixels();
			filler.paint(mouseX, mouseY, get(mouseX, mouseY), returnColor(current_color));
			updatePixels();
			
			
		}
	}
	
}


function mouseReleased() {
	
	loadPixels();
	cCopy = pixels;
	
	clear();
	redraw();
	
	resetAll();

    

}

function mouseDragged() {
	
	if (mouseY > 100 && mouseX < width - 20) {
	   if (mode == 0) {	
			l.x2 = mouseX;
			l.y2 = mouseY;
		}
		else if (mode == 1) {
			r.xbr = mouseX;
			r.ybr = mouseY;	
		}
		else if (mode == 2) {
			let radius = sqrt(pow(c.xc - mouseX, 2) + pow(c.yc - mouseY, 2))
			c.r = radius;
		}
		else if (mode == 3) {
			e.a = abs(mouseX - a_init);
			e.b = abs(mouseY - b_init);
			e.xc = a_init;
			e.yc = b_init;
		}
	}
		
	clear();
	redraw();
	
}


function drawObject(s, obj)
{
    if (s=="Line")
    {
        obj.display();
    }
	
	if (s=="Rect")
    {
        obj.display();
    }
	
	if(s=="Circle")
	{
		obj.display();
	}
	
	if(s=="Ellipse")
	{
		obj.display();
	}
}

function selectColor(target_color) {
	target_btn = returnColorName(target_color);
	curr_btn = returnColorName(current_color);
	
	target_btn.addClass('color_selected');
	if (target_btn != curr_btn) curr_btn.removeClass('color_selected');
}

function selectButton(target_mode) {
	target_btn = returnBtnName(target_mode);
	curr_btn = returnBtnName(mode);
	
	target_btn.addClass('btn-warning');
	if (target_btn != curr_btn) curr_btn.removeClass('btn-warning');
}

function returnBtnName(mode) {
	if(mode==0) return btnLine;
	if(mode==1) return btnRct;
	if(mode==2) return btnCircle;
	if(mode==3) return btnEllipse;
	if(mode==4) return btnFill;
	if(mode==5) return btnFreeHand;
}

function returnColorName(color) {
	if(color=='black') return btnBlack;
	if(color=='gray') return btnGrey;
	if(color=='blue') return btnBlue;
	if(color=='green') return btnGreen;
	if(color=='orange') return btnOrange;
	if(color=='fuchsia') return btnPink;
	if(color=='purple') return btnPurble;
	if(color=='red') return btnRed;
	if(color=='white') return btnWhite;
	if(color=='yellow') return btnYellow;
}

function returnColor(name) {
	return color(name)._array.map(x => x * 255);
}
