class Fill
{
	constructor()
	{
		
	}
	
	paint(x, y, ic, c) {
		// let current_color = get(x, y);
		let current_color = [];
		current_color = this.getPixelColor(x, y);
		
		let pass = 0;
		
		for(let i = 0; i < current_color.length; i++)
		{
			if(current_color[i] === ic[i])
			{
				pass++;
			}
		}
		
		if(pass == 4)
		{
			
			this.setPixelColor(x, y, c);
			
			
			this.paint(x, y - 1, ic, c);
			this.paint(x - 1, y, ic, c);
			this.paint(x, y + 1, ic, c);
			this.paint(x + 1, y, ic, c);
			
			
		}
	}
	
	setPixelColor(x, y, c, pixArray)
	{
		
		
		let idx = 4 * (x + y * width);
		pixels[idx]     = c[0];
		pixels[idx + 1] = c[1];
		pixels[idx + 2] = c[2];
		pixels[idx + 3] = c[3];
		
		
		
	}
	
	getPixelColor(x, y)
	{
		let current_color = [];
		let idx = 4 * (x + y * width);
		current_color[0] = pixels[idx];
		current_color[1] = pixels[idx + 1];
		current_color[2] = pixels[idx + 2];
		current_color[3] = pixels[idx + 3];
		
		return current_color;
	}
}