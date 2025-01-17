import SimplexNoise from 'simplex-noise'

const simplex = new SimplexNoise(Math.random)

export function getYPosition(x: number, z: number) {
  let y = 2 * simplex.noise2D(x / 50, z / 50)
  y += 4 * simplex.noise2D(x / 100, z / 100)
  y += 0.2 * simplex.noise2D(x / 10, z / 10)
  return y
}

export const grassVertexShader = /* glsl */ `
precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 offset;
attribute float scale;
attribute float rotation;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uWindStrength;
uniform float uWindFrequency;
uniform vec3 uPlanePosition;
uniform vec3 uPlaneOffset;
varying vec2 vUv;
varying float vWindStrength;

vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

vec3 calculateWind(vec3 pos, float time) {
  float bendFactor = pow(uv.y, 2.0);

  vec3 adjustedPlanePosition = uPlanePosition + uPlaneOffset;

  float planeFactor = 1.0 - smoothstep(0.0, 10.0, length(pos - adjustedPlanePosition));
  float planeDist = distance(pos.xz, adjustedPlanePosition.xz);

  float windPlaneBlend = smoothstep(0.0, 10.0, planeDist);

  float timeOffset = cnoise(vec3(pos.xz * 0.1, uTime * 0.05)) * 5.0;
  float uniqueTime = uTime + timeOffset;
  
  float windWave = sin(pos.x * 0.5 + uniqueTime) * 
                  cos(pos.z * 0.5 + uniqueTime * 1.2) * 
                  sin(uniqueTime * 0.3);
  
  float posVariation = cnoise(vec3(pos.xz * 0.3, uTime * 0.1));
  
  float windStrength = (windWave * 0.5 + 0.5) * 
                      (posVariation * 0.5 + 0.5) * 
                      uWindStrength;

  windStrength -= planeFactor * 1.5;
  
  float windAngle = cnoise(vec3(pos.xz * 0.1, uTime * 0.2)) * 3.14159;
  vec3 windDir = vec3(cos(windAngle), 0.0, sin(windAngle));
  
  return windDir * windStrength * bendFactor;
}

void main() {
  vUv = uv;
  
  vec3 transformed = position * vec3(1.0, scale, 1.0);
  
  // Blade's rotation
  float c = cos(rotation);
  float s = sin(rotation);
  transformed.xz = mat2(c, -s, s, c) * transformed.xz;
  
  // Wind effect
  vec3 worldPos = transformed + offset;
  vec3 windEffect = calculateWind(worldPos, uTime);
  transformed += windEffect;

  // Let there be life
  // float planeFactor = 1.0 - smoothstep(0.0, 10.0, length(worldPos - uPlanePosition));
  // transformed *= planeFactor;
  
  vWindStrength = length(windEffect) * 2.5;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed + offset, 1.0);
}
`

export const grassFragmentShader = /* glsl */ `
precision highp float;

uniform sampler2D map;
uniform sampler2D alphaMap;
uniform float uTime;
uniform vec3 uPlanePosition;
uniform vec3 uPlaneOffset;
varying vec2 vUv;
varying float vWindStrength;

void main() {
  vec4 diffuseColor = texture2D(map, vUv);
  float alpha = texture2D(alphaMap, vUv).r;
  float planeFactor = 1.0 - smoothstep(0.0, 10.0, length(gl_FragCoord.xyz - uPlanePosition));
  
  if (alpha < 0.15) discard;
  
  diffuseColor.rgb /= (.8 + vWindStrength * 0.2);

  // darken area under the plane
  // alpha *= planeFactor;
  
  gl_FragColor = diffuseColor;
}
`
