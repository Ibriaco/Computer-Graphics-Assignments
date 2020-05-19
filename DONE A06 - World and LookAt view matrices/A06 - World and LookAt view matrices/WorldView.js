function worldViewProjection(carx, cary, carz, cardir, camx, camy, camz) {
// Computes the world, view and projection matrices for the game.

// carx, cary and carz encodes the position of the car.
// Since the game is basically in 2D, camdir contains the rotation about the y-axis to orient the car

// The camera is placed at position camx, camy and camz. The view matrix should be computed using the
// LookAt camera matrix procedure, with the correct up-vector.

	var world = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
     
		var Ry = utils.MakeRotateYMatrix(cardir);
		var T =  utils.MakeTranslateMatrix(carx, cary, carz);   

		world = utils.multiplyMatrices(T, Ry);
	
	var view  = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

		var u = [0, 1, 0]

		var Vz = utils.normalizeVector3([camx-carx, camy-cary, camz-carz])
		var Vx = utils.normalizeVector3(utils.crossVector(utils.normalizeVector3(u), Vz))
		var Vy = utils.crossVector(Vz, Vx);

		var Mc = [Vx[0], Vy[0], Vz[0], camx, Vx[1], Vy[1], Vz[1], camy,  Vx[2], Vy[2], Vz[2], camz,  0.0,   0.0,   0.0,  1.0]

		view = utils.invertMatrix(Mc)

	return [world, view];
}