// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
function transformation_1(){

	var A1 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];

	A1 = utils.MakeParallel(50, 16/9, 1, 101)
	var rotationOnX = utils.MakeRotateXMatrix(35.26)
	var rotationOnY = utils.MakeRotateYMatrix(45)
	A1 = utils.multiplyMatrices(A1, rotationOnX)
	A1 = utils.multiplyMatrices(A1, rotationOnY)

	return A1
}

// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
function transformation_2(){
	
	var A2 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];
	
	A2 = utils.MakeParallel(50, 16/9, 1, 101)
	var rotationOnX = utils.MakeRotateXMatrix(20)
	var rotationOnY = utils.MakeRotateYMatrix(45)
	A2 = utils.multiplyMatrices(A2, rotationOnX)
	A2 = utils.multiplyMatrices(A2, rotationOnY)

	return A2

}

// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
function transformation_3(){
	
	var A3 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];

	A3 = utils.MakeParallel(50, 16/9, 1, 101)
	var rotationOnX = utils.MakeRotateXMatrix(-30)
	var rotationOnY = utils.MakeRotateYMatrix(30)
	A3 = utils.multiplyMatrices(A3, rotationOnX)
	A3 = utils.multiplyMatrices(A3, rotationOnY)

	return A3
}

// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
function transformation_4(){
	
	var O1 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];
	
	var O2 =  [1,	0.0,		-Math.cos(utils.degToRad(45)),		0.0,
		0.0,		1,		-Math.sin(utils.degToRad(45)),		0.0,
		0.0,		0.0,		1,		0.0,
		0.0,		0.0,		0.0,		1.0];

	O1 = utils.MakeParallel(50, 16/9, 1, 101)
	O1 = utils.multiplyMatrices(O1, O2)

	return O1;
}

// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
function transformation_5(){
	
	var O2 =  [0.05,	0.0,		0.0,		0.0,
		0.0,		0.05,		0.0,		0.0,
		0.0,		0.0,		0.05,		0.0,
		0.0,		0.0,		0.0,		1.0];
	
	
	var O1 =  [1,	0.0,		-Math.cos(utils.degToRad(60))*0.5,		0.0,
		0.0,		1,		-Math.sin(utils.degToRad(60))*0.5,		0.0,
		0.0,		0.0,		1,		0.0,
		0.0,		0.0,		0.0,		1.0];

	O2 = utils.MakeParallel(50, 16/9, 1, 101)
	O2 = utils.multiplyMatrices(O2, O1)

	return O2;
}


function axonometry() {
	
	return [transformation_1(), transformation_2(), transformation_3(), transformation_4(), transformation_5()];
}