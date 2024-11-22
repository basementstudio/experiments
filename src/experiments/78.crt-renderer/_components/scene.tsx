import { OrbitControls, useTexture } from '@react-three/drei'
import { EffectComposer, wrapEffect } from '@react-three/postprocessing'
import { Effect } from 'postprocessing'
import * as THREE from 'three'

import bn from '../shaders/bluen-128.png'
import { fragment } from '../shaders/shaders'

class CrtEffectImpl extends Effect {
  constructor(uBNoise: THREE.Texture) {
    super('CrtEffect', fragment, {
      uniforms: new Map([['uBNoise', new THREE.Uniform(uBNoise)]])
    })
  }

  update(renderer: any, inputBuffer: any, deltaTime: number) {
    // @ts-expect-error
    this.uniforms.get('uTime').value += deltaTime
  }
}

export const CrtEffect = wrapEffect(CrtEffectImpl)

export function Scene() {
  const bluenoise = useTexture(bn.src)
  bluenoise.wrapS = THREE.RepeatWrapping
  bluenoise.wrapT = THREE.RepeatWrapping

  return (
    <>
      <OrbitControls />

      <mesh receiveShadow castShadow scale={2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <EffectComposer>
        {/* @ts-expect-error */}
        <CrtEffect bluenoise={bluenoise} />
      </EffectComposer>
    </>
  )
}
