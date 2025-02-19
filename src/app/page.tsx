import { OrbScene } from "./components/orb-scene"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <OrbScene />

      <div className="content-container min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full space-y-12 text-center">
          <h1 className="brutalist-heading">Tattoo Artistry</h1>

          <nav className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/schedule" className="nav-link">
              Schedule an appointment
            </Link>
            <Link href="/estimate" className="nav-link">
              Get An Estimate
            </Link>
          </nav>
        </div>

        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/479182197_17975991959815683_5235550601323022606_n.jpg-2j1O4GkktLvOOapxuPNPdFq9RMXRhH.jpeg"
            alt="Background Art"
            fill
            className="object-cover blur-sm"
            priority
          />
        </div>
      </div>
    </main>
  )
}

