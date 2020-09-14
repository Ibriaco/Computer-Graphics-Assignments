 function buildGeometry() {
	var i;
	
    // Draws a cube (replace the vertices)
    // Cube has 6 faces, represented as squares
    // Each square is represented as the justaxposition of two triangles, leading to a cube made of 12 triangles.
    // Each triangles is described as a set of 3 points, leading to a total of 36 points
	var vert1 = [
        [0.0, 0.0, 0.0],
        [0.0, 1.0, 0.0],
        [1.0, 1.0, 0.0],

        [0.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
        [1.0, 1.0, 0.0],

        [0.0, 0.0, 1.0],
        [0.0, 1.0, 1.0],
        [1.0, 1.0, 1.0],

        [0.0, 0.0, 1.0],
        [1.0, 0.0, 1.0],
        [1.0, 1.0, 1.0],

        [0.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
        [0.0, 0.0, 1.0],

        [1.0, 0.0, 0.0],
        [0.0, 0.0, 1.0],
        [1.0, 0.0, 1.0],

        [0.0, 1.0, 0.0],
        [1.0, 1.0, 0.0],
        [0.0, 1.0, 1.0],

        [1.0, 1.0, 0.0],
        [0.0, 1.0, 1.0],
        [1.0, 1.0, 1.0],

        [0.0, 0.0, 0.0],
        [0.0, 0.0, 1.0],
        [0.0, 1.0, 0.0],

        [0.0, 1.0, 1.0],
        [0.0, 0.0, 1.0],
        [0.0, 1.0, 0.0],

        [1.0, 0.0, 0.0],
        [1.0, 0.0, 1.0],
        [1.0, 1.0, 0.0],

        [1.0, 1.0, 1.0],
        [1.0, 0.0, 1.0],
        [1.0, 1.0, 0.0],
        
    ];

	addMesh(vert1, "L", [1.0, 0.0, 0.0]);


    // Draws a flat L-shaped pattern (replace the vertices)
    // I have used 4 triangles, hence I have 6 vertices
    var vert2 = [
        [1.0, 3.0, 0.0],
        [0.0, 3.0, 0.0],
        [1.0, 1.0, 0.0],
        [0.0, 0.0, 0.0],
        [2.0, 1.0, 0.0],
        [2.0, 0.0, 0.0]
    ];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]);


    // Draws a flat hexagon (replace the vertices) N+2
    // I have used 6 triangles, hence I have 8 vertices
    var vert3 = [
        [0.0 , 0.0, 0.0],
        [0.5, 1.0, 0.0],
        [1.0, 0.0, 0.0],
        [0.5, -1.0, 0.0],
        [-0.5, -1.0, 0.0],
        [-1.0, 0.0, 0.0],
        [-0.5, 1.0, 0.0],
        [0.5, 1.0, 0.0]
	];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}