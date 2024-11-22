export const fragment = /* glsl */ `
  const float warp = 0.75;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    

    // warp the uv
    // vec2 dc = abs(0.5-uv);
    // dc *= dc;
    // vec2 warpedUv = uv;
    // warpedUv.x -= 0.5; warpedUv.x *= 1.0+(dc.y*(0.3*warp)); warpedUv.x += 0.5;
    // warpedUv.y -= 0.5; warpedUv.y *= 1.0+(dc.x*(0.4*warp)); warpedUv.y += 0.5;
    // if (warpedUv.y > 1.0 || warpedUv.x < 0.0 || warpedUv.x > 1.0 || warpedUv.y < 0.0) {
    //     outputColor = vec4(0.0,0.0,0.0,1.0);
    //     return;
    // }

  outputColor = inputColor;
}
`
