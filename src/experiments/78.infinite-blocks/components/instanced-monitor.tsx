import {
  createInstances,
  PerspectiveCamera,
  RenderTexture,
  useGLTF
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef } from 'react'
import * as THREE from 'three'
import { Texture } from 'three'

const MODEL_PATH = '/models/monitor.glb'
useGLTF.preload(MODEL_PATH)

interface Props {
  positions: [number, number, number][]
}

interface MonitorNodes {
  nodes: {
    monitor: THREE.Mesh
    pantalla: THREE.Mesh
    cable: THREE.Mesh
    Cube007: THREE.Mesh
  }
}

export const InstancedMonitor = ({ positions }: Props) => {
  const { nodes } = useGLTF(MODEL_PATH) as unknown as MonitorNodes
  const [MonitorInstances, MonitorInstance] = createInstances()
  const [ScreenInstances, ScreenInstance] = createInstances()

  const renderTextureRef = useRef<Texture>(null)

  const { screenEmissive, screenIntensity } = useControls('Screen Material', {
    screenEmissive: { value: '#000000' },
    screenIntensity: { value: 1, min: 0, max: 2, step: 0.1 }
  })

  return (
    <>
      <MonitorInstances
        limit={positions.length}
        geometry={nodes['Cube007'].geometry}
        material={nodes['Cube007'].material}
      >
        {positions.map((position, i) => (
          <MonitorInstance key={i} position={position} scale={[4, 4, 4]} />
        ))}
      </MonitorInstances>

      <ScreenInstances
        limit={positions.length}
        geometry={nodes.pantalla.geometry}
      >
        <meshStandardMaterial
          attach="material"
          emissive={screenEmissive}
          emissiveIntensity={screenIntensity}
        >
          <RenderTexture attach="map" ref={renderTextureRef}>
            <color attach="background" args={['#000000']} />
            <InnerScene
              aspect={
                renderTextureRef.current?.image.width /
                renderTextureRef.current?.image.height
              }
            />
          </RenderTexture>
        </meshStandardMaterial>

        {positions.map((position, i) => (
          <ScreenInstance
            key={i}
            position={[position[0], position[1] + 0.25, position[2] + 0.45]}
            scale={[4, 4, 4]}
          />
        ))}
      </ScreenInstances>
    </>
  )
}

const InnerScene = ({ aspect }: { aspect: number }) => {
  const boxRef = useRef<THREE.Mesh>(null)

  const {
    boxColor,
    rotationSpeedX,
    rotationSpeedY,
    cameraPosition,
    cameraFov,
    animationSpeed
  } = useControls('Inner Scene', {
    boxColor: '#ff0000',
    rotationSpeedX: { value: 0.5, min: -2, max: 2, step: 0.1 },
    rotationSpeedY: { value: 0.3, min: -2, max: 2, step: 0.1 },
    animationSpeed: { value: 1, min: 0, max: 5, step: 0.1 },
    cameraPosition: {
      value: { x: 0, y: 0, z: 5 },
      step: 0.1
    },
    cameraFov: { value: 75, min: 20, max: 120, step: 1 }
  })

  useFrame((state) => {
    if (boxRef.current) {
      const time = state.clock.elapsedTime * animationSpeed
      boxRef.current.rotation.x = time * rotationSpeedX
      boxRef.current.rotation.y = time * rotationSpeedY
    }
  })

  return (
    <>
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={boxColor} />
      </mesh>

      <PerspectiveCamera
        manual
        aspect={aspect || 1}
        makeDefault
        position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
        fov={cameraFov}
      />
    </>
  )
}
