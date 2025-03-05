import { useState, useEffect } from "react"
import { useParams, Link, useLocation, Navigate } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"

// Sample data
const ARTISTS = [
  {
    id: "1",
    name: "Alex Rivera",
    bio: "Specializing in traditional Japanese style tattoos with over 10 years of experience. Alex brings a unique perspective to traditional motifs, blending classic techniques with contemporary sensibilities.",
    style: "Traditional Japanese",
    instagram: "@alexrivera_tattoo",
    email: "alex@tattoostudio.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estos%20fueron%20los%20ganadores%20del%20primer%20concurso%20de%20collages%20%201er%20lugar-%20@matiasestrace%20%202ndo%20lugar-%20@_gabiq_%20%203er%20lugar-%20@ross_dvh%20%20Gracias%20a%20todxs%20lxs%20que%20participaron,%20nos%20vemos%20a%20la%20proxima%20!%20(2).jpg-XvXHR30QDq3z81R7Az6uXECKqgWIMF.jpeg",
  },
  {
    id: "2",
    name: "Maria Chen",
    bio: "Contemporary minimalist designs with a focus on line work. Maria's approach emphasizes clean, elegant designs that stand the test of time while maintaining a modern aesthetic.",
    style: "Minimalist",
    instagram: "@mariachen_ink",
    email: "maria@tattoostudio.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estos%20fueron%20los%20ganadores%20del%20primer%20concurso%20de%20collages%20%201er%20lugar-%20@matiasestrace%20%202ndo%20lugar-%20@_gabiq_%20%203er%20lugar-%20@ross_dvh%20%20Gracias%20a%20todxs%20lxs%20que%20participaron,%20nos%20vemos%20a%20la%20proxima%20!.jpg-Sgf6zocF0FWHQnaX4YJ7XPBBQOtfjL.jpeg",
  },
]

const WORKS = [
  {
    id: "1",
    artistId: "1",
    type: "tattoo",
    title: "Traditional Sleeve",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jrrKyz0dRCnqYynaAavCKgtP6pxGHv.png",
    tags: ["Traditional", "Sleeve", "Blackwork"],
  },
  {
    id: "2",
    artistId: "1",
    type: "tattoo",
    title: "Detailed Arm Work",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oLVoYzyQM0yjA4YWXHtbIAKK55D2nh.png",
    tags: ["Detailed", "Arm", "Blackwork"],
  },
  {
    id: "3",
    artistId: "2",
    type: "tattoo",
    title: "Minimalist Collection",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spTLctZxEiMLyXnr1soZDxdRvs8sTh.png",
    tags: ["Minimalist", "Small", "Blackwork"],
  },
  {
    id: "4",
    artistId: "2",
    type: "design",
    title: "Abstract Design",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IeCQOl8J4jl5Xy6iYNIHdtV3yrYrsZ.png",
    tags: ["Abstract", "Design", "Available"],
  },
  {
    id: "5",
    artistId: "1",
    type: "design",
    title: "Japanese Dragon",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estos%20fueron%20los%20ganadores%20del%20primer%20concurso%20de%20collages%20%201er%20lugar-%20@matiasestrace%20%202ndo%20lugar-%20@_gabiq_%20%203er%20lugar-%20@ross_dvh%20%20Gracias%20a%20todxs%20lxs%20que%20participaron,%20nos%20vemos%20a%20la%20proxima%20!%20(2).jpg-XvXHR30QDq3z81R7Az6uXECKqgWIMF.jpeg",
    tags: ["Japanese", "Dragon", "Available"],
  },
  {
    id: "6",
    artistId: "2",
    type: "design",
    title: "Geometric Pattern",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estos%20fueron%20los%20ganadores%20del%20primer%20concurso%20de%20collages%20%201er%20lugar-%20@matiasestrace%20%202ndo%20lugar-%20@_gabiq_%20%203er%20lugar-%20@ross_dvh%20%20Gracias%20a%20todxs%20lxs%20que%20participaron,%20nos%20vemos%20a%20la%20proxima%20!.jpg-Sgf6zocF0FWHQnaX4YJ7XPBBQOtfjL.jpeg",
    tags: ["Geometric", "Pattern", "Available"],
  },
]

export default function ArtistDetail() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("works")

  useEffect(() => {
    // Extract tab from URL if present
    const searchParams = new URLSearchParams(location.search)
    const tab = searchParams.get("tab")
    if (tab && ["works", "designs", "info"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [location])

  const artist = ARTISTS.find((a) => a.id === id)

  if (!artist) {
    return <Navigate to="/artists" />
  }

  const artistWorks = WORKS.filter((work) => work.artistId === id && work.type === "tattoo")
  const artistDesigns = WORKS.filter((work) => work.artistId === id && work.type === "design")

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link to="/artists" className="font-mono hover:underline">
          ← Back to Artists
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="aspect-square overflow-hidden">
          <img src={artist.avatar || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-6xl font-mono mb-4">{artist.name}</h1>
          <p className="text-xl font-mono mb-2">{artist.style}</p>
        </div>
      </div>

      <div className="border-b border-black mb-8">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("works")}
            className={`py-4 px-2 font-mono text-lg relative ${activeTab === "works" ? "font-bold" : ""}`}
          >
            Works
            {activeTab === "works" && <span className="absolute bottom-0 left-0 w-full h-1 bg-black" />}
          </button>
          <button
            onClick={() => setActiveTab("designs")}
            className={`py-4 px-2 font-mono text-lg relative ${activeTab === "designs" ? "font-bold" : ""}`}
          >
            Designs
            {activeTab === "designs" && <span className="absolute bottom-0 left-0 w-full h-1 bg-black" />}
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`py-4 px-2 font-mono text-lg relative ${activeTab === "info" ? "font-bold" : ""}`}
          >
            Info
            {activeTab === "info" && <span className="absolute bottom-0 left-0 w-full h-1 bg-black" />}
          </button>
        </nav>
      </div>

      {activeTab === "works" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artistWorks.map((work) => (
            <div key={work.id} className="group relative aspect-square overflow-hidden">
              <img
                src={work.src || "/placeholder.svg"}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-white text-xl font-mono mb-2">{work.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {work.tags.map((tag) => (
                    <span key={tag} className="text-white text-sm font-mono bg-black/50 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "designs" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artistDesigns.map((design) => (
            <div key={design.id} className="group relative aspect-square overflow-hidden">
              <img
                src={design.src || "/placeholder.svg"}
                alt={design.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-white text-xl font-mono mb-2">{design.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {design.tags.map((tag) => (
                    <span key={tag} className="text-white text-sm font-mono bg-black/50 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "info" && (
        <div className="max-w-2xl">
          <h2 className="text-2xl font-mono mb-4">About {artist.name}</h2>
          <p className="font-mono mb-8 leading-relaxed">{artist.bio}</p>

          <h2 className="text-2xl font-mono mb-4">Style</h2>
          <p className="font-mono mb-8 leading-relaxed">{artist.style}</p>

          <h2 className="text-2xl font-mono mb-4">Contact</h2>
          <div className="space-y-2">
            {artist.instagram && (
              <a
                href={`https://instagram.com/${artist.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono hover:underline"
              >
                <Instagram size={20} />
                {artist.instagram}
              </a>
            )}
            {artist.email && (
              <a href={`mailto:${artist.email}`} className="flex items-center gap-2 font-mono hover:underline">
                <Mail size={20} />
                {artist.email}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

