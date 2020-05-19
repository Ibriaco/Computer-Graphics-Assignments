function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are only three lines command, but to obtain the car you will need 8 of them
	line(0.3, 0.3,0.3, 0.1); //top right side
	line(-0.2, 0.3, -0.2, 0.1); //top left side
	line(0.3,0.3,-0.2, 0.3); //top side
	line(0.5,-0.3,-0.5,-0.3); //bottom side
	line(-0.2,0.1,-0.5, 0); //diagonal left side 
	line(0.3, 0.1, 0.5, 0); //diagonal right side
	line(-0.5, -0.3, -0.5, 0); //left side
	line(0.5, -0.3, 0.5, 0); //right side
} 


function draw2() {
	
	previous_x = 0.8; // considering the radius of the circle
	previous_y = 0;

	// this function is to draw a circle
	for(i = 0; i < 128; i++) {
		radius = (64 / 127.0 * 1.6) / 2;
		next_x = 0.8 * Math.cos((((i*360)/127))*Math.PI/180);
		next_y = 0.8 * Math.sin((((i*360)/127))*Math.PI/180);

		line(previous_x, previous_y, next_x, next_y); // external circle

		line(previous_x / 8, previous_y/8 + radius, next_x/8, next_y/8 + radius); // upper small circle
		line(previous_x / 8, previous_y / 8 - radius, next_x/8, next_y/8 - radius); // lower small circle
		
		if(i < 128/4) {
			line(previous_x / 2, previous_y / 2 + radius, next_x / 2, next_y / 2 + radius); // upper Yin-Yang 1
			line(previous_x / 2, -previous_y / 2 + radius, next_x / 2, -next_y / 2 + radius); // upper Yin-Yang 2
			line(-previous_x / 2, previous_y / 2 - radius, -next_x / 2, next_y / 2 - radius); // lower Yin-Yang 1
			line(-previous_x / 2, -previous_y / 2 - radius, -next_x / 2, -next_y / 2 - radius); // lower Yin-Yang 2
		}

		// update coordinates for drawing next line
		previous_x = next_x;
		previous_y = next_y;
	} 
}

/* 	
		-- ALTERNATIVE SOLUTION --

		for(i=0; i < 128; i++) {
			y = (i - 64)  / 127.0 * 1.6;
			next_y = (i+1 - 64)  / 127.0 * 1.6;
			next_x = Math.sqrt(Math.pow(-64/127.0 *1.6,2) - Math.pow(nextY,2));
			line(x, y, next_x, nextY);
			line(-x, -y, -next_x, -nextY);
			line(x/2, y/2 + (64/127.0 *1.6)/2, next_x/2, next_y/2 + (64/127.0 *1.6)/2);
			line(-x/2, y/2 - (64/127.0 *1.6)/2, -next_x/2, next_y/2 - (64/127.0 *1.6)/2);
			line(x/8, y/8 + (64/127.0 *1.6)/2, next_x/8, next_y/8 + (64/127.0 *1.6)/2);
			line(-x/8, -y/8 + (64/127.0 *1.6)/2, -next_x/8, -next_y/8 + (64/127.0 *1.6)/2);
			line(x/8, y/8 - (64/127.0 *1.6)/2, next_x/8, next_y/8 - (64/127.0 *1.6)/2);
			line(-x/8, -y/8 - (64/127.0 *1.6)/2, -next_x/8, -next_y/8 - (64/127.0 *1.6)/2);
		}
*/