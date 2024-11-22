import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  ChromaticAberration,
  EffectComposer,
  wrapEffect
} from '@react-three/postprocessing'
import { useControls } from 'leva'
import { Effect } from 'postprocessing'
import { useRef } from 'react'
import * as THREE from 'three'

import { fragment } from '../shaders/shaders'

class CrtEffectImpl extends Effect {
  constructor() {
    super('CrtEffect', fragment, {
      uniforms: new Map([
        ['uColorNum', new THREE.Uniform(4.0)],
        ['uPixelSize', new THREE.Uniform(4.0)],
        ['uTime', new THREE.Uniform(0)],
        ['uNoiseIntensity', new THREE.Uniform(0.15)],
        ['uWarpStrength', new THREE.Uniform(0.75)],
        ['uScanlineIntensity', new THREE.Uniform(0.25)],
        ['uScanlineFrequency', new THREE.Uniform(1024.0)]
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
  const crtEffect = useRef<CrtEffectImpl>(null)
  const { scene } = useGLTF('/models/monitor.glb')

  const { colorNum, pixelSize } = useControls({
    colorNum: {
      value: 2.0,
      min: 2.0,
      max: 8.0,
      step: 1.0
    },
    pixelSize: {
      value: 3.0,
      min: 1.0,
      max: 16.0,
      step: 1.0
    }
  })

  useFrame(() => {
    if (!crtEffect.current) return

    // @ts-expect-error
    crtEffect.current.uniforms.get('uColorNum').value = colorNum
    // @ts-expect-error
    crtEffect.current.uniforms.get('uPixelSize').value = pixelSize
  })

  return (
    <>
      <OrbitControls />

      <PerspectiveCamera makeDefault position={[1, 1, 2]} fov={65} />

      <ambientLight intensity={1} />
      <directionalLight position={10} intensity={3} />

      <primitive object={scene} position={[0, -0.5, 0]} />

      <EffectComposer>
        <ChromaticAberration offset={[0.0025, 0.0025]} />
        {/* @ts-expect-error */}
        <CrtEffect ref={crtEffect} />
      </EffectComposer>
    </>
  )
}
