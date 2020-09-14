function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;			// Position of the point in 3D space
//
//vec3 LAPos;			// Position of first (or single) light
//vec3 LADir;			// Direction of first (or single) light
//float LAConeOut;		// Outer cone (in degree) of the light (if spot)
//float LAConeIn;		// Inner cone (in percentage of the outher cone) of the light (if spot)
//float LADecay;		// Decay factor (0, 1 or 2)
//float LATarget;		// Target distance
//vec4 LAlightColor;	// color of the first light
//		
//vec3 LBPos;			// Same as above, but for the second light
//vec3 LBDir;
//float LBConeOut;
//float LBConeIn;
//float LBDecay;
//float LBTarget;
//vec4 LBlightColor;
//
//vec3 LCPos;			// Same as above, but for the third one
//vec3 LCDir;
//float LCConeOut;
//float LCConeIn;
//float LCDecay;
//float LCTarget;
//vec4 LClightColor;
//
//vec4 ambientLightColor;		// Ambient light color. For hemispheric, this is the color on the top
//vec4 ambientLightLowColor;	// For hemispheric ambient, this is the bottom color
//vec3 ADir;					// For hemispheric ambient, this is the up direction
//
//vec3 normalVec;				// direction of the normal vector to the surface
//
//
// Final direction and colors are returned into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution is returned into
//
// vec4 ambientColor;

// Single directional light (like sunlight, hits all the objects with the same inclination)
var S1 = `
	lightDirA = LADir;
	lightColorA = LAlightColor;
`;

// Single point light without decay (it has its own position, so to calculate the position I have to normalize the diff between the light and the pixel im considering)
var S2 = `
	lightDirA = normalize(LAPos - fs_pos);
	lightColorA = LAlightColor;
`;

// Single directional light, constant ambient
var S3 = `
	lightDirA   = LADir;
	lightColorA = LAlightColor;
	ambientColor = ambientLightColor;
`;

// Single point light with decay (decay = light intensity), target == distance at which the light has the desired "power"
var S4 = `
	lightDirA = normalize(LAPos - fs_pos);
	lightColorA = LAlightColor * pow(LATarget / length(LAPos - fs_pos), LADecay); 
	ambientColor = ambientLightColor;
`;

// Single spot light (with decay) --> light model with pos, ray of view and decay ray (imagine to be on stage) "CONO DI LUCE"
var S5 = `
	float LCosOut = cos(radians(LAConeOut / 2.0));
	float LCosIn = cos(radians(LAConeOut * LAConeIn / 2.0));
	lightDirA = normalize(LAPos - fs_pos);
	float CosAngle = dot(lightDirA, LADir);
	lightColorA = LAlightColor * pow(LATarget / length(LAPos - fs_pos), LADecay) *
	clamp((CosAngle - LCosOut) / (LCosIn - LCosOut), 0.0, 1.0);
	ambientColor = ambientLightColor;
`;

// Single directional light, hemispheric ambient (color from top and bottom)
var S6 = `
	float amBlend = (dot(normalVec, ADir) + 1.0) / 2.0;
	lightDirA = LADir;
	lightColorA = LAlightColor;
	ambientColor = (ambientLightColor * amBlend + ambientLightLowColor * (1.0 - amBlend));
`;


// Three lights: a directional, a point and a spot
var S7 = `
	lightDirA = LADir;
	lightColorA = LAlightColor;

	lightDirB = normalize(LBPos - fs_pos);
	lightColorB = LBlightColor * pow(LBTarget / length(LBPos - fs_pos), LBDecay);

	float LCCosOut = cos(radians(LCConeOut / 2.0));
	float LCCosIn = cos(radians(LCConeOut * LCConeIn / 2.0));

	lightDirC = normalize(LCPos - fs_pos);
	lightColorC = LClightColor * pow(LCTarget / length(LCPos - fs_pos), LCDecay) * 
	clamp((dot(normalize(LCPos - fs_pos), LCDir)-LCCosOut)/(LCCosIn-LCCosOut), 0.0, 1.0);
`;
	return [S1, S2, S3, S4, S5, S6, S7];
}


    
