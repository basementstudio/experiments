import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const Lights = () => {
  const pointLightRef = useRef<THREE.PointLight>(null)

  useFrame(({ pointer }) => {
    if (!pointLightRef.current) return

    pointLightRef.current.position.set(pointer.x, -1.5, -pointer.y * 1.5)
  })

  return (
    <>
      <hemisphereLight intensity={0.1} color={'red'} />
      <directionalLight intensity={0.02} position={[-4.5, 5, 4.5]} />
      <spotLight
        decay={0}
        position={[-20, 10, 20]}
        angle={0.4}
        penumbra={0.9}
        intensity={1}
        castShadow
        shadow-mapSize={2048}
      />

      <pointLight
        position={[5, -1.5, 5]}
        intensity={2.5}
        color={'red'}
        ref={pointLightRef}
      />
    </>
  )
}

export default Lights
