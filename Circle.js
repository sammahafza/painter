class Circle
{
	constructor(xc, yc, r)
	{
		this.xc = xc;
		this.yc = yc;
		this.r = r;
	}
	
	display() {
		
		for(let i = 0; i <= Math.PI*2; i=i+1/this.r)
		{
			let x = this.xc + this.r*cos(i);
			let y = this.yc + this.r*sin(i);

			point(x, y);
		}
		
	}
}