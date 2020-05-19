function perspective(w, h, fov) {
	// Build a perspective projection matrix, for a viewport whose size is determined by parameters w (width) and h (height), and whose fov-y is passed in parameter fov. Near plane is n=0.1, and far plane f=100.
	var a = w/h
	var angle = fov/2
	var out = [1/(a*Math.tan(angle*Math.PI/180)),		0.0,		0.0,		0.0,
			   0.0,		1/Math.tan(angle*Math.PI/180),		0.0,		0.0,
			   0.0,		0.0,		(100+0.1)/(0.1-100),		(2*100*0.1)/(0.1-100),
			   0.0,		0.0,		-1,		0.0];

	return out;
}

