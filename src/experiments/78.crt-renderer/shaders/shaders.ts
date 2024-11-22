export const fragment = /* glsl */ `
    uniform float uTime;

    uniform float uNoiseIntensity;

    uniform float uWarpStrength;

    uniform float uScanlineIntensity;
    uniform float uScanlineFrequency;


    // Add noise function
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

        // warp the uv
        vec2 dc = abs(0.5-uv);
        dc *= dc;
        vec2 warpedUv = uv;
        warpedUv.x -= 0.5; warpedUv.x *= 1.0+(dc.y*(0.3*uWarpStrength)); warpedUv.x += 0.5;
        warpedUv.y -= 0.5; warpedUv.y *= 1.0+(dc.x*(0.4*uWarpStrength)); warpedUv.y += 0.5;
        if (warpedUv.y > 1.0 || warpedUv.x < 0.0 || warpedUv.x > 1.0 || warpedUv.y < 0.0) {
            outputColor = vec4(0.0,0.0,0.0,1.0);
            return;
        }

        // Add scanlines
        float scanLine = sin(warpedUv.y * uScanlineFrequency) * uScanlineIntensity;
        vec4 color = inputColor;
        color.rgb -= scanLine;

        // Add noise
        float noise = random(uv + uTime) * uNoiseIntensity;
        color.rgb += noise;

        outputColor = color;
    }
`
