function anim() {
	
	var q0 = Quaternion.fromAxisAngle([0,0,1],utils.degToRad(-15));
	var q1 = Quaternion.fromAxisAngle([1,0,0],utils.degToRad(-40));
	var q2 = Quaternion.fromAxisAngle([0,1,0],utils.degToRad(70));
	var q3 = Quaternion.fromAxisAngle([0,1,0],utils.degToRad(20));
	var q4 = Quaternion.fromAxisAngle([0,1,0],utils.degToRad(110));
	var q5 = Quaternion.fromAxisAngle([0,0,1],utils.degToRad(60));
	var q6 = Quaternion.fromAxisAngle([0,0,1],utils.degToRad(20));
	var q7 = Quaternion.fromAxisAngle([1,0,0],utils.degToRad(40));
	var q8 = Quaternion.fromAxisAngle([0,0,1],utils.degToRad(-60));
	var q9 = Quaternion.fromAxisAngle([1,0,0],utils.degToRad(-70));

	var q90y = Quaternion.fromAxisAngle([0,1,0],utils.degToRad(90));
	var q90z = Quaternion.fromAxisAngle([0,0,1],utils.degToRad(90));
	var q90zI = Quaternion.fromAxisAngle([0,0,1],utils.degToRad(-90));
	var q0z = Quaternion.fromAxisAngle([0,0,1],utils.degToRad(0));

	return [
		
	//mi muovo lungo l'asse x => x graduale
	//non tocco l'asse y => y costante
	//modifico l'asse z => sommo a z
 [2, [0,0.5,0],   q0,	
 	 [0,0.5,0],   q1,	
 	 [7.5,0,-0.5],   q2, 
	 [7.5,0,0],  	q3],
	

	//mi muovo lungo l'asse z => z graduale
	//non tocco l'asse y => y costante
	//modifico l'asse x => sommo a x
 [2, [7.5,0,-0.5],  	q2,	
	 [8,0,-0.5],  	q4,
 	 [8,0,-8],  q90y.mul(q5),
	 [8,0.5,-8],  q90y.mul(q6),],
	
	//mi muovo lungo l'asse y => y graduale
	//non tocco l'asse x => x costante
	//modifico l'asse z => sommo a z
 [2, [8,0.5,-8],  q90y.mul(q5),
	 [8,0.5,-8],  q90y.mul(q90z),
 	 [7.5,7.5,-8],  (q90y.mul(q6)).mul(q2),
	 [7.5,7.5,-8],  q90y.mul(q90z)],
	 
 [2, [7.5,7.5,-8],  (q90y.mul(q6)).mul(q2),
 	 [7.5,8,-8],  ((q90y.mul(q0z)).mul(q90y)).mul(q7),
 	 [0,8,-8],  ((q90y.mul(q0z)).mul(Quaternion.fromAxisAngle([0,1,0],utils.degToRad(170)))).mul(q1),
	 [0,8,-8],  (q90y.mul(q0z)).mul(q90y),],
	  
 [2, [0,8,-8],  ((q90y.mul(q0z)).mul(Quaternion.fromAxisAngle([0,1,0],utils.degToRad(170)))).mul(q1),
	 [0,8,-8],  ((q90y.mul(q0z)).mul(Quaternion.fromAxisAngle([0,1,0],utils.degToRad(200)))).mul(q9),
 	 [0,7.5,0],   (((q90y.mul(q0z)).mul(Quaternion.fromAxisAngle([0,1,0],utils.degToRad(180)))).mul(q0)).mul(q2).mul(q8),
	 [0,7.5,0],   (((q90y.mul(q0z)).mul(Quaternion.fromAxisAngle([0,1,0],utils.degToRad(180)))).mul(q0)).mul(q3),],
	  
 [2, [0,7.5,0],   (((q90y.mul(q0z)).mul(Quaternion.fromAxisAngle([0,1,0],utils.degToRad(180)))).mul(q0)).mul(q2).mul(q8),
	 [0,7.5,0],   (((q90y.mul(q0z)).mul(Quaternion.fromAxisAngle([0,1,0],utils.degToRad(180)))).mul(q0).mul(q90y)).mul(q90zI),
 	 [0,0.5,0],   q0,
	 [0,0.5,0],   q7]
	 
];
}