import { OrbitControls } from '@react-three/drei'
import { EffectComposer, wrapEffect } from '@react-three/postprocessing'
import { Effect } from 'postprocessing'
import React, { forwardRef } from 'react'

import { fragment } from '../shaders/shaders'

class CrtEffect extends Effect {
  constructor() {
    super('CrtEffect', fragment, {
      uniforms: new Map([])
    })
  }
}

const CrtMonitorEffect = wrapEffect(CrtEffect)

const CrtMonitorEffectComponent = forwardRef((props, ref) => (
  <primitive ref={ref} object={CrtMonitorEffect} {...props} />
))

export function Scene() {
  return (
    <>
      <OrbitControls />

      <mesh scale={2}>
        <boxGeometry />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <EffectComposer>
        <CrtMonitorEffectComponent />
      </EffectComposer>
    </>
  )
}
