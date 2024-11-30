'use client'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Vignette } from '@react-three/postprocessing'
import { useControls } from 'leva'

import { R3FCanvasLayout } from '~/components/layout/r3f-canvas-layout'

import { ChunkManager } from './components/chunks/chunk-manager'
import Lights from './components/lights'

function InfiniteBlocks() {
  const { vignetteEnabled } = useControls('Post Processing', {
    vignetteEnabled: true
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={20} />

      <Lights />
      <ChunkManager />
      {process.env.NODE_ENV === 'development' && <OrbitControls />}
      <EffectComposer enableNormalPass={false}>
        {vignetteEnabled ? (
          <Vignette eskil={false} offset={0.05} darkness={0.9} />
        ) : (
          <></>
        )}
        {/* <ToneMapping /> */}
      </EffectComposer>
    </>
  )
}

InfiniteBlocks.Layout = R3FCanvasLayout
InfiniteBlocks.Title = 'Infinite Blocks'
InfiniteBlocks.Description =
  'Infinite blocks with chunk management, instanced mesh and render texture.'

export default InfiniteBlocks
