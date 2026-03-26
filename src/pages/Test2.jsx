import { Canvas } from '@react-three/fiber'
import { OrbitControls, useFBX } from '@react-three/drei'
import { Suspense } from 'react'

function Avatar() {
  const fbx = useFBX('/models/avatar.fbx')
  return <primitive object={fbx} scale={0.01} position={[0, -1, 0]} />
}

export default function Test2() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a2e' }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 4, 2]} intensity={1} />
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="white" /></mesh>}>
          <Avatar />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}