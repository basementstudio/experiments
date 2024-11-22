import { OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer, wrapEffect } from '@react-three/postprocessing'
import { Effect } from 'postprocessing'
import { Uniform } from 'three'

import { fragment } from '../shaders/shaders'

class CrtEffectImpl extends Effect {
  constructor() {
    super('CrtEffect', fragment, {
      uniforms: new Map([
        ['uTime', new Uniform(0)],
        ['uNoiseIntensity', new Uniform(0.15)],
        ['uWarpStrength', new Uniform(0.75)],
        ['uScanlineIntensity', new Uniform(0.1)],
        ['uScanlineFrequency', new Uniform(128.0)]
      ])
    })
  }

  update(renderer: any, inputBuffer: any, deltaTime: number) {
    // @ts-expect-error
    this.uniforms.get('uTime').value += deltaTime
  }
}

export const CrtEffect = wrapEffect(CrtEffectImpl)

export function Scene() {
  return (
    <>
      <OrbitControls />

      <group>
        <mesh receiveShadow castShadow position={[-2, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshStandardMaterial
            color="hotpink"
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        <mesh receiveShadow castShadow position={[2, 0, 0]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="lime" roughness={0.2} metalness={0.8} />
        </mesh>

        <mesh receiveShadow castShadow position={[0, 2, 0]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="orange"
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>
      </group>

      <EffectComposer>
        <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.8} />
        {/* @ts-expect-error */}
        <CrtEffect />
      </EffectComposer>
    </>
  )
}
