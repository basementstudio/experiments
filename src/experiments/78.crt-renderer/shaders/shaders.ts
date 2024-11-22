export const fragment = /* glsl */ `
  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    // Just output red to test if the effect is working
    outputColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`

export const vertex = /* glsl */ `
  void mainSupport(const in vec2 uv) {
    // Empty but required
  }
`
