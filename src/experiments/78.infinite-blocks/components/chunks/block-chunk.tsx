import { useControls } from 'leva'
import { useMemo } from 'react'

import { InstancedMonitor } from '../instanced-monitor'
import { CHUNK_SIZE } from './use-chunks'

export const BlockChunk = () => {
  const { gap } = useControls('Layout', {
    gap: { value: 0.02, min: 0, max: 0.2, step: 0.01 }
  })

  const { positions } = useMemo(() => {
    const map: number[][] = Array(CHUNK_SIZE)
      .fill(0)
      .map(() => Array(CHUNK_SIZE).fill(0))

    // Initialize with small random variations
    for (let x = 0; x < CHUNK_SIZE; x++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        map[x][z] = (Math.random() - 1.5) * 1.2
      }
    }

    // Smooth the heights by averaging with neighbors
    for (let x = 1; x < CHUNK_SIZE - 1; x++) {
      for (let z = 1; z < CHUNK_SIZE - 1; z++) {
        map[x][z] =
          ((map[x - 1][z] + map[x + 1][z] + map[x][z - 1] + map[x][z + 1]) /
            4) *
            0.5 +
          map[x][z] * 0.5
      }
    }

    const positions: [number, number, number][] = []

    // Calculate positions for all monitors
    for (let x = 0; x < CHUNK_SIZE; x++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        const xPos = x * (1 + gap) - CHUNK_SIZE / 2
        const yPos = map[x][z]
        const zPos = z * (1 + gap * 2) - CHUNK_SIZE / 2
        positions.push([xPos, yPos, zPos])
      }
    }

    return { positions }
  }, [gap])

  return <InstancedMonitor positions={positions} />
}
