function view(cx, cy, cz, alpha, beta, rho) {
	// Create a view matrix for a camera in position cx, cy and cz, looking in the direction specified by
	// alpha, beta and rho, as outlined in the course slides.
	// Mv = [Mc]^-1 = Rz(-rho)*Rx(-beta)*Ry(-alpha)*T(-cx, -cy, -cz)
	
	var out =  [1.0,	0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,	    0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	var rotation_x = utils.MakeRotateXMatrix(-beta)
	var rotation_y = utils.MakeRotateYMatrix(-alpha)
	var rotation_z = utils.MakeRotateZMatrix(-rho)
	out = utils.multiplyMatrices(rotation_z,rotation_x);
	out = utils.multiplyMatrices(out, rotation_y);
	out = utils.multiplyMatrices(out, utils.MakeTranslateMatrix(-cx,-cy,-cz))
			   

	return out;
}

