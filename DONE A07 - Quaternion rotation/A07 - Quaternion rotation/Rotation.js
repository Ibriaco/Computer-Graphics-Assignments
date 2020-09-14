// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT
var quaternion = Quaternion();

var initial_quaternion = [0, 0, 0, 1]
// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the -1 .. +1 range that tells the angular velocity of the world.
// rvx, rvy, rvz are angular velocities, so it is enough just to create a Quaternion with those given velocities
function updateWorld(rvx, rvy, rvz) {

	var delta_q = Quaternion(1, rvx * Math.PI / 180, rvy * Math.PI / 180, rvz * Math.PI / 180 ) //computation of the rotation quaternion

	quaternion = delta_q.mul(quaternion); //get correct rotation according to world "orientation"

	// compute the rotation matrix
	var out = quaternion.toMatrix4(); //q' = delta_q * q	 

	return out;
}

