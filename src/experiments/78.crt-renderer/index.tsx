'use client'

import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

import { R3FCanvasLayout } from '~/components/layout/r3f-canvas-layout'

import { Scene } from './_components/scene'

function CrtRenderer() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[-8.544, -0.922, 9.638]}
        fov={65}
      />
      <Suspense fallback={null}>
        <Environment
          preset="city"
          backgroundBlurriness={1}
          backgroundIntensity={3}
          environmentIntensity={2}
          background
        />
        <Scene />
      </Suspense>
    </>
  )
}

CrtRenderer.Layout = R3FCanvasLayout
CrtRenderer.Title = 'CRT Renderer'
CrtRenderer.Description = 'CRT Renderer'

export default CrtRenderer
