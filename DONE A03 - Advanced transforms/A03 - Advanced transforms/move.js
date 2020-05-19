// Rotate 45 degrees around an arbitrary axis passing through (1,0,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 30 degrees around the z-axis, and then -60 degrees around the y-axis.
function transformation_1() {

	var R1 = [1.0,		0.0,		0.0,		0.0,
			  0.0,		1.0,		0.0,		0.0,
			  0.0,		0.0,		1.0,		0.0,
			  0.0,		0.0,		0.0,		1.0];

	R1 = utils.multiplyMatrices(R1, utils.MakeTranslateMatrix(1, 0, -1));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateYMatrix(-60));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateZMatrix(30));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateXMatrix(45));
	R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeRotateZMatrix(30)));
	R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeRotateYMatrix(-60)));
	R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeTranslateMatrix(1, 0, -1)));

	return R1;


}


// Half the size of an object, using as fixed point (5,0,-2)
function transformation_2() {

	var S1 = [1.0,		0.0,		0.0,		0.0,
			0.0,		1.0,		0.0,		0.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	S1 = utils.multiplyMatrices(S1, utils.MakeTranslateMatrix(5,0,-2));
	S1 = utils.multiplyMatrices(S1, utils.MakeScaleMatrix(0.5));
	S1 = utils.multiplyMatrices(S1, utils.invertMatrix(utils.MakeTranslateMatrix(5,0,-2)));

	return S1;

}


// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
function transformation_3() {

	var S2 =  [1.0,		0.0,		0.0,		0.0,
		0.0,		1.0,		0.0,		0.0,
		0.0,		0.0,		1.0,		0.0,
		0.0,		0.0,		0.0,		1.0];
	
	S2 = utils.multiplyMatrices(S2, utils.MakeTranslateMatrix(1, 1, 1));
	S2 = utils.multiplyMatrices(S2, utils.MakeRotateXMatrix(15));
	S2 = utils.multiplyMatrices(S2, utils.MakeScaleNuMatrix(1.0, -1.0, 1.0));
	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(utils.MakeRotateXMatrix(15)));
	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(utils.MakeTranslateMatrix(1, 1, 1)));

	return S2;
}


// Apply the inverse of the following sequence of transforms: Translation of (0, 0, 5) then rotation of 30 degree around the Y axis, and finally a uniform scaling of a factor of 3.
function transformation_4() {

	var I1 =  [1.0,		0.0,		0.0,		0.0,
		0.0,		1.0,		0.0,		0.0,
		0.0,		0.0,		1.0,		0.0,
		0.0,		0.0,		0.0,		1.0];

	I1 = utils.multiplyMatrices(I1, utils.MakeTranslateMatrix(0, 0, -5));
    I1 = utils.multiplyMatrices(I1, utils.MakeRotateYMatrix(-30));
	I1 = utils.multiplyMatrices(I1, utils.MakeScaleMatrix(1/3));
	
	return I1;
}


function move() {
	
	return [transformation_1(), transformation_2(), transformation_3(), transformation_4()];
}

