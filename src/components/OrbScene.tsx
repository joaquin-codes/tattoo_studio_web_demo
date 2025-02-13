import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere } from "@react-three/drei"
import { Suspense } from "react"

export function OrbScene() {
  return (
    <div className="orb-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} envMapIntensity={1} />
          </Sphere>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}

