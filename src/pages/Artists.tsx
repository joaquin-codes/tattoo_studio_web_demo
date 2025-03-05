"use client"
import { Link } from "react-router-dom"

const ARTISTS = [
  {
    id: "1",
    name: "Alex Rivera",
    bio: "Specializing in traditional Japanese style tattoos",
    style: "Traditional Japanese",
    instagram: "@alexrivera_tattoo",
    email: "alex@tattoostudio.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estos%20fueron%20los%20ganadores%20del%20primer%20concurso%20de%20collages%20%201er%20lugar-%20@matiasestrace%20%202ndo%20lugar-%20@_gabiq_%20%203er%20lugar-%20@ross_dvh%20%20Gracias%20a%20todxs%20lxs%20que%20participaron,%20nos%20vemos%20a%20la%20proxima%20!%20(2).jpg-XvXHR30QDq3z81R7Az6uXECKqgWIMF.jpeg",
  },
  {
    id: "2",
    name: "Maria Chen",
    bio: "Contemporary minimalist designs with a focus on line work",
    style: "Minimalist",
    instagram: "@mariachen_ink",
    email: "maria@tattoostudio.com",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estos%20fueron%20los%20ganadores%20del%20primer%20concurso%20de%20collages%20%201er%20lugar-%20@matiasestrace%20%202ndo%20lugar-%20@_gabiq_%20%203er%20lugar-%20@ross_dvh%20%20Gracias%20a%20todxs%20lxs%20que%20participaron,%20nos%20vemos%20a%20la%20proxima%20!.jpg-Sgf6zocF0FWHQnaX4YJ7XPBBQOtfjL.jpeg",
  },
]

export default function Artists() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-mono mb-12">Artists</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTISTS.map((artist) => (
          <Link key={artist.id} to={`/artists/${artist.id}`} className="group block">
            <div className="aspect-square overflow-hidden mb-4">
              <img
                src={artist.avatar || "/placeholder.svg"}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-mono mb-2">{artist.name}</h2>
            <p className="text-gray-600 font-mono">{artist.style}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

