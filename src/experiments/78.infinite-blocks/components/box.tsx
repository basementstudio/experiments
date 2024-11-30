import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'

interface BoxProps {
  positions: [number, number, number][]
}

const Box = ({ positions }: BoxProps) => {
  const ref = useRef<THREE.InstancedMesh>(null)

  useLayoutEffect(() => {
    if (!ref.current) return

    const matrix = new THREE.Matrix4()

    positions.forEach((position, i) => {
      matrix.setPosition(position[0], position[1], position[2])
      ref.current?.setMatrixAt(i, matrix)
    })

    ref.current.instanceMatrix.needsUpdate = true
  }, [positions])

  return (
    <instancedMesh
      ref={ref}
      args={[undefined, undefined, positions.length]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#998b8a" />
    </instancedMesh>
  )
}

export default Box
