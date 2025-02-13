import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere } from "@react-three/drei"
import { Suspense } from "react"
import { useRouter } from "next/navigation"

export function OrbScene() {
  const router = useRouter()

  return (
    <div className="orb-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Sphere args={[1, 64, 64]} position={[0, 0, 0]} onClick={() => router.push("/portfolio")}>
            <meshStandardMaterial color="white" metalness={0.9} roughness={0.1} envMapIntensity={1} />
          </Sphere>
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}

