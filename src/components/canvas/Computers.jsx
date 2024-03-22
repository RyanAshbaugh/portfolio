import React, { Suspense, useEffect, useState } from 'react'
import { Canvas,extend } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
        decay={0}
      />
      <pointLight intensity={2} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.4}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize-width={1024}
        decay={0}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75: 1.1}
        position={isMobile ? [0, -2, -2.2] : [0, -3.5, -1.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas