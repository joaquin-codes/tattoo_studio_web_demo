const CHICKEN_EMOJIS = Array(100).fill("🐔")

export default function Chickens() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-mono mb-4">Chickens!</h1>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nwc1bOjBP7vgTCnVWb3Oh66weDb6gK.png"
          alt="Real Chicken"
          className="max-w-md mx-auto rounded-lg mb-8"
        />
      </div>

      <div className="grid grid-cols-6 md:grid-cols-10 gap-4 text-4xl md:text-6xl animate-in slide-in-from-bottom duration-700">
        {CHICKEN_EMOJIS.map((emoji, index) => (
          <div
            key={index}
            className="aspect-square flex items-center justify-center hover:scale-125 transition-transform cursor-pointer"
          >
            {emoji}
          </div>
        ))}
      </div>
    </div>
  )
}

