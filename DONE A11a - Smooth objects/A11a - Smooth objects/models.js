function buildGeometry() {
	var i;
	
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0],[ 1.0,-1.0,-1.0],[-1.0,-1.0,-1.0],
				 [0.0,1.0,0.0],[ 1.0,-1.0, 1.0],[ 1.0,-1.0,-1.0], 
				 [0.0,1.0,0.0],[-1.0,-1.0, 1.0],[ 1.0,-1.0, 1.0], 
				 [0.0,1.0,0.0],[-1.0,-1.0,-1.0],[-1.0,-1.0, 1.0], 
				 [-1.0,-1.0,-1.0],[1.0,-1.0,-1.0], [1.0,-1.0,1.0], [-1.0,-1.0,1.0],
				];
	var norm1 = [[0.0, 0.4472,-0.8944], [0.0, 0.4472,-0.8944], [0.0, 0.4472,-0.8944],
				 [ 0.8944, 0.4472,0.0], [ 0.8944, 0.4472,0.0], [ 0.8944, 0.4472,0.0],
				 [ 0.0, 0.4472,0.8944], [ 0.0, 0.4472,0.8944], [ 0.0, 0.4472,0.8944],
				 [-0.8944, 0.4472,0.0], [-0.8944, 0.4472,0.0], [-0.8944, 0.4472,0.0],
				 [ 0.0,-1.0,0.0],[ 0.0,-1.0,0.0],[ 0.0,-1.0,0.0],[ 0.0,-1.0,0.0]
				 ];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, norm1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	// 24 vertices for a cube (36 - the shared one) 
	var vert2 = [[-1.0,-1.0,1.0], [1.0,-1.0,1.0], [1.0,1.0,1.0], [-1.0,1.0,1.0],
				 [-1.0,-1.0,-1.0],[1.0,-1.0,-1.0],[1.0,1.0,-1.0],[-1.0,1.0,-1.0]];
	var norm2 = [[0.0, 0.0,1.0], [0.0, 0.0,1.0], [0.0,0.0,1.0], [0.0,0.0,1.0],
				 [0.0, 0.0,-1.0],[0.0, 0.0,-1.0],[0.0,0.0,-1.0],[0.0,0.0,-1.0]];
	var ind2 = [0, 1, 2,  0, 2, 3,  4, 6, 5,  4, 7, 6];
	
	for(i = 0; i < 8; i++) {
		vert2[i+ 8] = [vert2[i][0],-vert2[i][2], vert2[i][1]];
		vert2[i+16] = [vert2[i][2], vert2[i][1],-vert2[i][0]];
		norm2[i+ 8] = [norm2[i][0],-norm2[i][2], norm2[i][1]];
		norm2[i+16] = [norm2[i][2], norm2[i][1],-norm2[i][0]];
		
	}
	for(i = 0; i < 12; i ++) {
		ind2[i+12] = ind2[i] + 8;
		ind2[i+24] = ind2[i] +16;
	}
	
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, norm2, ind2, color2);
	
	// Draws a Cylinder --- Already done, just for inspiration
	///// Creates vertices
	var vert3 = [[0.0, 1.0, 0.0]];
	var norm3 = [[0.0, 1.0, 0.0]];
	for(i = 0; i < 36; i++) {
		vert3[i+1] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI)];
		norm3[i+1] = [0.0, 1.0, 0.0];
		vert3[i+37] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI)];
		norm3[i+37] = [Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI)];
		vert3[i+73] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI)];
		norm3[i+73] = [Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI)];
		vert3[i+109] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI)];
		norm3[i+109] = [0.0, -1.0, 0.0];
	}
	vert3[145] = [0.0, -1.0, 0.0];
	norm3[145] = [0.0, -1.0, 0.0];
	////// Creates indices
	var ind3 = [];
	//////// Upper part
	j = 0;
	for(i = 0; i < 36; i++) {
		ind3[j++] = 0;
		ind3[j++] = i + 1;
		ind3[j++] = (i + 1) % 36 + 1;
	}
	//////// Lower part
	for(i = 0; i < 36; i++) {
		ind3[j++] = 145;
		ind3[j++] = (i + 1) % 36 + 109;
		ind3[j++] = i + 109;
	}
	//////// Mid part
	for(i = 0; i < 36; i++) {
		ind3[j++] = i + 73;
		ind3[j++] = (i + 1) % 36 + 37;
		ind3[j++] = i + 37;

		ind3[j++] = (i + 1) % 36 + 37;
		ind3[j++] = i + 73;
		ind3[j++] = (i + 1) % 36 + 73;
	}
	var color3 = [1.0, 0.0, 1.0];
	addMesh(vert3, norm3, ind3, color3);

	
	// Draws a Cone -- To do for the assignment.
	///// Creates vertices
	var vert4 = [[0.0, 1.0, 0.0]];
	var norm4 = [[0.0, 1.0, 0.0]];

	for(i = 0; i < 36; i++) {
		vert4[i+1] = [Math.sin(i*10.0/180.0*Math.PI), -1.0, Math.cos(i*10.0/180.0*Math.PI)];
		norm4[i+1] = [Math.sin(i*10.0/180.0*Math.PI), -0.8, Math.cos(i*10.0/180.0*Math.PI)];
	}
	vert4[37] = [0.0, -1.0, 0.0]
	norm4[37] = [0.0, -1.0, 0.0];
	////// Creates indices
	var ind4 = [];
	//////// Upper part
	j = 0;
	for(i = 0; i < 36; i++) {
		ind4[j++] = 0;
		ind4[j++] = i + 1;
		ind4[j++] = (i + 1) % 36 + 1;
	}
	//////// Lower part
	for(i = 0; i < 36; i++) {
		ind4[j++] = 37;
		ind4[j++] = (i + 1) % 36 + 1;
		ind4[j++] = i + 1;
	}
	
	var color4 = [1.0, 0.0, 0.0];

	addMesh(vert4, norm4, ind4, color4);


	// Draws a Sphere --- Already done, just for inspiration
	var vert5 = [[0.0, 1.0,0.0]];
	var norm5 = [[0.0, 1.0,0.0]];
	///// Creates vertices
	k = 1;
	for(j = 1; j < 18; j++) {
		for(i = 0; i < 36; i++) {
			x = Math.sin(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			y = Math.cos(j*10.0/180.0*Math.PI);
			z = Math.cos(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			norm5[k] = [x, y, z];
			vert5[k++] = [x, y, z];
		}
	}
	lastVert = k;
	norm5[k] = [0.0,-1.0,0.0];
	vert5[k++] = [0.0,-1.0,0.0];
	
	////// Creates indices
	var ind5 = [];
	k = 0;
	///////// Lateral part
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 17; j++) {
			ind5[k++] = i + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}	
	//////// Upper Cap
	for(i = 0; i < 36; i++) {
		ind5[k++] = 0;
		ind5[k++] = i + 1;
		ind5[k++] = (i + 1) % 36 + 1;
	}
	//////// Lower Cap
	for(i = 0; i < 36; i++) {
		ind5[k++] = lastVert;
		ind5[k++] = (i + 1) % 36 + 541;
		ind5[k++] = i + 541;
	}
	var color5 = [0.8, 0.8, 1.0];
	addMesh(vert5, norm5, ind5, color5);


	
	// Draws a Torus -- To do for the assignment
	var vert6 = [];
	var norm6 = [];

	///// Creates vertices
	
	//w is the vertices array index
	w = 0;
	
	//q is the normal array index
	q = 0;

	//d is the major radius, the rotation radius
	d = 1;

	//r is the radius of every circle
	r = 0.5;

	//theta is the major rotation angle, and phi is the circle construction angle
	var theta;
	var phi;

	

	for(i = 0; i < 36; i++) {
		theta = i * 10.0 / 180.0 * Math.PI;		//calculate theta using the number of segments (36 is cool)

		for(j = 0; j < 36; j++) {
			phi = j * 10.0 / 180.0 * Math.PI;	//same as above

			//calculate every x, y, z coordinate by using the parametric equation of a torus
			x = d * Math.cos(theta) + r * Math.cos(phi) * Math.cos(theta);
			y = d * Math.sin(theta) + r * Math.cos(phi) * Math.sin(theta);
			z = r * Math.sin(phi);

			//calculate the tangent vector w/ respect to the "big" circle
			tx = -Math.sin(theta);
			ty = Math.cos(theta);
			tz = 0;

			//calculate the tangent vector w/ respect to the "little" circle
			sx = Math.cos(theta) * (-Math.sin(phi));
			sy = Math.sin(theta) * (-Math.sin(phi));
			sz = Math.cos(phi);
			
			//calculate the normal vector simply applying the cross product
			nx = ty * sz - tz * sy;
			ny = tz * sx - tx * sz;
			nz = tx * sy - ty * sx;

			norm6[q] = [nx, ny, nz];
			q++;
			//put them into the vertices array
			vert6[w] = [x, y, z];
			w++;
		}
	}

	var ind6 = [];
	k = 0;
	//First lateral part
	//must start from 0, taking vertices like 0, 1, 36

	for(i = 0; i < 1296; i++) {
		
		ind6[k++] = (i + 36) % 1296;
		ind6[k++] = (i + 1) % 1296;
		ind6[k++] = i;		
	}

	//Second lateral part
	//must start from -1, taking vertices like 0, 36, 37
	for(i = -1; i < 1295; i++) {		
		ind6[k++] = (i + 36) % 1296;
		ind6[k++] = (i + 36 + 1) % 1296;
		ind6[k++] = (i + 1);
	}	

	var color6 = [1.0, 1.0, 0.0];
	addMesh(vert6, norm6, ind6, color6);
	
}

