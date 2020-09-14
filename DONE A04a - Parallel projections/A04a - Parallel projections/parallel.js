function parallel() {
	
	// Build a parallel projection matrix, for a 16/9 viewport (a), with halfwidth w=40, near plane n=1, and far plane f=101.
	var out = [1/40,		0.0,		0.0,		0.0,
			   0.0,		16/360,		0.0,		0.0,
			   0.0,		0.0,		-2/100,		-102/100,
			   0.0,		0.0,		0.0,		1];

	return out;
}


/*
From the theory we need that given a viewport, with a specific halfwidth, a near plan and a far plane:

parallel matrix = [1/w,		0.0,		0.0,		    0.0,
		   		   0.0,		a/w,		0.0,		    0.0,
		   		   0.0,		0.0,		-2/f-n,		- f+n/f-n,
		   		   0.0,		0.0,		0.0,		    1]
*/

