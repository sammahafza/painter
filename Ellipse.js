class Ellipse
{
	constructor(xc, yc, a, b)
	{
		this.xc = xc;
		this.yc = yc;
		this.a = a;
		this.b = b;
	}
	
	display() {
		
		let dx, dy, d1, d2, x, y = 0;
		x = 0;
		y = this.b;
		
		d1 = (this.b * this.b) - (this.a * this.a * this.b) + (0.25 * this.a * this.a);
		dx = 2 * this.b * this.b * x;
		dy = 2 * this.a * this.a * y;
		
		while (dx < dy)
		{
			this.plotPixel(this.xc, this.yc, x, y);
			
			if(d1 < 0)
			{
				x++;
				dx = dx + 2 * (this.b * this.b);
				d1 = d1 + dx + (this.b * this.b);
			}
			else
			{
				x++; 
				y--; 
				dx = dx + (2 * this.b * this.b); 
				dy = dy - (2 * this.a * this.a); 
				d1 = d1 + dx - dy + (this.b * this.b); 
			}
		}
		
		// Region 2
		d2 = ((this.b * this.b) * ((x + 0.5) * (x + 0.5))) +  ((this.a * this.a) * ((y - 1) * (y - 1))) - (this.a * this.a * this.b * this.b);
		
		while(y >= 0)
		{
			this.plotPixel(this.xc, this.yc, x, y);
			if(d2 > 0)
			{
				y--;
				dy = dy - (2 * this.a * this.a); 
				d2 = d2 + (this.a * this.a) - dy;
			}
			else
			{
				y--; 
				x++; 
				dx = dx + (2 * this.b * this.b); 
				dy = dy - (2 * this.a * this.a); 
				d2 = d2 + dx - dy + (this.a * this.a);
			}
		}
		
	}
	
	
	plotPixel(xc, yc, x, y) {
		point(xc+x, yc+y);
		point(xc+x, yc-y);
		point(xc-x, yc+y);
		point(xc-x, yc-y);
	}
}