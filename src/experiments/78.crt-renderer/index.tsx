'use client'

import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

import { R3FCanvasLayout } from '~/components/layout/r3f-canvas-layout'

function CrtRenderer() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[-8.544, -0.922, 9.638]}
        fov={65}
      />
      <Suspense fallback={null}></Suspense>
    </>
  )
}

CrtRenderer.Layout = R3FCanvasLayout
CrtRenderer.Title = 'CRT Renderer'
CrtRenderer.Description = 'CRT Renderer'

export default CrtRenderer
