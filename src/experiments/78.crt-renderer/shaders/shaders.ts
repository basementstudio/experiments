export const fragment = /* glsl */ `
uniform sampler2D uBNoise;

precision highp float;

float random(vec2 c) {
    return fract(sin(dot(c.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  vec3 basicDither(vec2 uv, float lum) {
    vec3 color = vec3(0.0);
  
    if (lum < random(uv)) {
        color = vec3(0.0);
    } else {
        color = vec3(1.0);
    }
  
    return color;
  }

  const mat4x4 bayerMatrix4x4 = mat4x4(
    0.0,  8.0,  2.0, 10.0,
    12.0, 4.0,  14.0, 6.0,
    3.0,  11.0, 1.0, 9.0,
    15.0, 7.0,  13.0, 5.0) / 16.0;
  
  vec3 orderedDither(vec2 uv, float lum) {
    vec3 color = vec3(0.0);
    float threshold = 0.0;

    int x = int(uv.x * resolution.x) % 4;
    int y = int(uv.y * resolution.y) % 4;

    threshold = bayerMatrix4x4[x][y];
    
    if (lum < threshold) {
        color = vec3(0.0);
    } else {
        color = vec3(1.0);
    }

    return color;
  }

  float bias = 0.15;



  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec4 color = texture2D(inputBuffer, uv);
  
    float lum = dot(vec3(0.2126, 0.7152, 0.0722), color.rgb);
    color.rgb = basicDither(uv, lum);
  
    outputColor = color;
  }
`
