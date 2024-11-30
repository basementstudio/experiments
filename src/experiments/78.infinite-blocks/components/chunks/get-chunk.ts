import { BlockChunk } from './block-chunk'
import { Chunk } from './use-chunks'

export const getNewChunk = (): Chunk => {
  const randomId = crypto.randomUUID()

  return {
    id: randomId,
    Component: BlockChunk
  }
}
