function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction
//
//
// Lighr directions can be found into:
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
// Ambient light contribution can be found into
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material
var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular
var S2 = `
	vec4 dLAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 dLBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 dLCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 diffuse = diffColor * (dLAcontr + dLBcontr + dLCcontr);

	vec4 sLAcontr = pow(clamp(dot(normalize(eyedirVec+lightDirA), normalVec),0.0,1.0), SpecShine) * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(normalize(eyedirVec+lightDirB), normalVec),0.0,1.0), SpecShine) * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(normalize(eyedirVec+lightDirC), normalVec),0.0,1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	out_color = clamp(diffuse + specular, 0.0, 1.0);
`;

// No diffuse, ambient and Blinn specular
var S3 = `
	vec4 sLAcontr = pow(clamp(dot(normalize(eyedirVec+lightDirA), normalVec),0.0,1.0), SpecShine) * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(normalize(eyedirVec+lightDirB), normalVec),0.0,1.0), SpecShine) * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(normalize(eyedirVec+lightDirC), normalVec),0.0,1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	out_color = clamp(specular + ambientLight * ambColor, 0.0, 1.0);
`;

// Diffuse and Phong specular
var S4 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 sLAcontr = pow(clamp(dot(-reflect(lightDirA, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(-reflect(lightDirB, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(-reflect(lightDirC, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorC;
	vec4 phong = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + phong, 0.0, 1.0);
`;

// Diffuse, ambient, emission and Phong specular
var S5 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 sLAcontr = pow(clamp(dot(-reflect(lightDirA, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(-reflect(lightDirB, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(-reflect(lightDirC, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorC;
	vec4 phong = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + phong + emit + ambientLight * ambColor, 0.0, 1.0);
`;

// Ambient + Oren-Nayar with roughness sigma=0.5 (consider only Light A)
var S6 = `
	float LdotN = max(0.0, dot(normalVec, lightDirA));
	vec4 LDcol = lightColorA * diffColor;
	vec4 diffuseLambert = LDcol * LdotN;
	float VdotN = max(0.0, dot(normalVec, eyedirVec));
	float theta_i = acos(LdotN);
	float theta_r = acos(VdotN);
	float alpha = max(theta_i, theta_r);
	float beta = min(min(theta_i, theta_r), 1.57);
	float sigma = 0.5;
	float A = 1.0 - 0.5 * sigma / (sigma + 0.33);
	float B = 0.45 * sigma / (sigma + 0.09);
	vec3 v_i = normalize(lightDirA - normalVec * LdotN);
	vec3 v_r = normalize(eyedirVec - normalVec * VdotN);
	float G = max(0.0, dot(v_i, v_r));
	vec4 diffuseOrenNayar = diffuseLambert * (A + B * G * sin(alpha) * tan(beta));
	out_color = clamp(diffuseOrenNayar + ambientLight * ambColor, 0.0, 1.0);
`;

	return [S1, S2, S3, S4, S5, S6];
}

