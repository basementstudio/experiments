import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'

import { normalizeDelta } from '~/lib/utils/math'

import { CHUNK_SIZE, getMovementAmount, useChunks } from './use-chunks'

export const ChunkManager = () => {
  const groupRef = useRef<Group>(null)
  const { chunks, speedRef, updateChunks } = useChunks()
  const positionRef = useRef(0)

  useFrame((_, d) => {
    const group = groupRef.current
    if (!group) return
    const delta = normalizeDelta(d)

    const movementAmount = getMovementAmount(speedRef.current, delta)
    positionRef.current += movementAmount

    if (positionRef.current > CHUNK_SIZE) {
      positionRef.current -= CHUNK_SIZE
      updateChunks()
    }

    group.position.z = positionRef.current
  })

  return (
    <group ref={groupRef}>
      {chunks.map((chunk, index) => (
        <group key={chunk.id} position={[0, 0, -index * CHUNK_SIZE - 5]}>
          <chunk.Component id={chunk.id} />
        </group>
      ))}
    </group>
  )
}
