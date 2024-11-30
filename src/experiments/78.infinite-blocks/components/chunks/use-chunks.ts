/** The road store will handle the obstacles that the player runs into. */
import { create } from 'zustand'

import { getNewChunk } from './get-chunk'

export const LINES = 2
export const lineWidth = 7

export const CHUNK_SIZE = LINES * lineWidth
export const TOTAL_CHUNKS = 2

export interface ChunnkProps {
  id: string
  isLastChunk?: boolean
}

export interface Chunk {
  id: string
  Component: (props: ChunnkProps) => JSX.Element
}

export interface Store {
  speedRef: { current: number }
  pivotRef: { current: number }
  chunks: Chunk[]
  updateChunks: () => void
}

export const getMovementAmount = (speed: number, delta: number) =>
  delta * speed * CHUNK_SIZE

const initialChunks = Array.from({ length: TOTAL_CHUNKS }, () => getNewChunk())

export const DEFAULT_SPEED = 4 * 0.0001

export const useChunks = create<Store>((set) => ({
  speedRef: { current: DEFAULT_SPEED },
  pivotRef: { current: 0 },
  chunks: initialChunks,
  updateChunks: () => {
    set((state) => {
      const newChunks = [...state.chunks.slice(1), getNewChunk()]
      return { chunks: newChunks }
    })
  }
}))
