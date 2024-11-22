import { OrbitControls } from '@react-three/drei'
import { EffectComposer, wrapEffect } from '@react-three/postprocessing'
import { Effect } from 'postprocessing'

import { fragment } from '../shaders/shaders'

class CrtEffectImpl extends Effect {
  constructor() {
    super('CrtEffect', fragment, {
      uniforms: new Map([])
    })
  }
}

export const CrtEffect = wrapEffect(CrtEffectImpl)

export function Scene() {
  return (
    <>
      <OrbitControls />

      <mesh receiveShadow castShadow scale={2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <EffectComposer>
        {/* @ts-expect-error */}
        <CrtEffect />
      </EffectComposer>
    </>
  )
}
