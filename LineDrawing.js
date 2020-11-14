function drawLow(x1, y1, x2, y2) {

    let dx = x2 - x1;
    let dy = y2 - y1;
	let yi = 1; // y increment
	
	if (dy < 0) { // m is negative
        yi = -1;
        dy = -dy;
    }

    let p = 2*dy - dx; // p0 calculation
    let j = y1;
    
        for (let i = x1; i <= x2; i++) {
			
			point(i, j);
			
            
            if(p > 0)
            {
				j = j + yi;
                p = p + 2*dy - 2*dx;
            }
            else
            {
                p = p + 2*dy;
            }
            
            
        }
}


function drawHigh(x1, y1, x2, y2) {

    let dx = x2 - x1;
    let dy = y2 - y1;
	let xi = 1; // y increment
	
	if (dx < 0) { // m is negative
        xi = -1;
        dx = -dx;
    }

    let p = 2*dy - dx; // p0 calculation
    let i = x1;
    
        for (let j = y1; j <= y2; j++) {
            
			point(i, j);
			

            if(p > 0)
            {
                p = p + 2*dx - 2*dy;
                i = i + xi;
            }
            else
            {
                p = p + 2*dx;
            }
            
            
        }
}


function drawLine(x1, y1, x2, y2)
{
	if (x1 == x2)
	{
		if (y1 > y2)
		{
			for (let j = y2; j <= y1; j++)
			{
				point(x1, j);
			}
		}
		else
		{
			for (let j = y1; j <= y2; j++)
			{
				point(x1, j);
			}
		}
		
	}
	else
	{
		if (Math.abs(y2 - y1) < Math.abs(x2 - x1))
		{
			if (x1 > x2)
				drawLow(x2, y2, x1, y1);
			else
				drawLow(x1, y1, x2, y2);
		}
		else
		{
			if (y1 > y2)
				drawHigh(x2, y2, x1, y1);
			else
				drawHigh(x1, y1, x2, y2);
		}
	}
    
    
}