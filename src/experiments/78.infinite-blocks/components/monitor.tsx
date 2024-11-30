import { useCursor, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useControls } from 'leva'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Mesh, Texture } from 'three'

import { RenderTexture } from './render-texture'
import { screenMaterial } from './screen-material'

interface MonitorNodes {
  nodes: {
    monitor: Mesh
    pantalla: Mesh
    cable: Mesh
  }
}

// Load the model once and reuse it
const MODEL_PATH = '/models/monitor.glb'
useGLTF.preload(MODEL_PATH)

export const Computer = () => {
  const { nodes } = useGLTF(MODEL_PATH) as unknown as MonitorNodes

  const [isOn, setIsOn] = useState(true)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  // Here we will store the texture from the inner scene.
  const [screenTexture, setScreenTexture] = useState<Texture | null>(null)

  useEffect(() => {
    screenMaterial.uniforms.map.value = screenTexture
  }, [screenTexture])

  const [{ rgbActive, screenSize }] = useControls(() => ({
    rgbActive: {
      label: 'RGB',
      value: true
    },
    screenSize: {
      label: 'Resolution',
      value: 200,
      step: 10,
      min: 10,
      max: 300
    }
  }))

  useEffect(() => {
    screenMaterial.uniforms.screenSize.value = [screenSize, screenSize]
    screenMaterial.uniforms.rgbActive.value = rgbActive
  }, [screenSize, rgbActive])

  const isTvOn = useRef(true)

  const currentTl = useRef<gsap.core.Timeline | null>(null)
  const turnTv = useCallback(() => {
    isTvOn.current = !isTvOn.current

    if (currentTl.current) {
      currentTl.current.kill()
    }

    if (isTvOn.current) {
      const tl = gsap.timeline()
      setIsOn(true)
      tl.set(screenMaterial.uniforms.screenOn.value, {
        z: 1
      })
      tl.to(screenMaterial.uniforms.screenOn.value, {
        x: 1,
        duration: 0.1
      })

      tl.to(screenMaterial.uniforms.screenOn.value, {
        y: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
      currentTl.current = tl
    } else {
      const tl = gsap.timeline()
      tl.to(screenMaterial.uniforms.screenOn.value, {
        y: 100,
        duration: 0.2
      })

      tl.to(screenMaterial.uniforms.screenOn.value, {
        x: 100,
        delay: 0.3,
        duration: 0.2
      })
      tl.to(screenMaterial.uniforms.screenOn.value, {
        z: 0,
        duration: 0.1,
        onComplete: () => setIsOn(false)
      })
      currentTl.current = tl
    }
  }, [])

  // Clone the meshes for each instance
  const monitorMesh = useMemo(() => nodes.monitor.clone(), [nodes.monitor])
  const pantallaMesh = useMemo(() => nodes.pantalla.clone(), [nodes.pantalla])

  return (
    <>
      <group scale={0.6}>
        <mesh
          position={[-0.28, 0.27, 0.5]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={turnTv}
        >
          <boxGeometry args={[0.1, 0.05, 0.1]} />
          <meshStandardMaterial color="black" />
        </mesh>

        <group>
          <primitive object={monitorMesh}>
            <meshStandardMaterial color="#555" />
          </primitive>
          <primitive object={pantallaMesh}>
            <primitive object={screenMaterial}>
              <RenderTexture
                width={screenSize}
                height={screenSize}
                isPlaying={isOn}
                onMapTexture={setScreenTexture}
              >
                <InnerScene />
              </RenderTexture>
            </primitive>
          </primitive>
        </group>
      </group>
    </>
  )
}

const InnerScene = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  )
}
