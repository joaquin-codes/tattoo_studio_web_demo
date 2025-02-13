import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Image {
  id: string
  src: string
  type: "tattoo" | "design"
  title: string
}

export default function AdminDashboard() {
  const [images, setImages] = useState<Image[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin")
    if (!isAdmin) {
      navigate("/")
    }
  }, [navigate])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newImage: Image = {
          id: Date.now().toString(),
          src: reader.result as string,
          type: "tattoo", // default type
          title: file.name.replace(/\.[^/.]+$/, ""),
        }
        setImages((prev) => [...prev, newImage])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id))
  }

  const updateImageType = (id: string, type: "tattoo" | "design") => {
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, type } : img)))
  }

  const handleLogout = () => {
    localStorage.removeItem("isAdmin")
    navigate("/")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-mono">Admin Dashboard</h1>
        <button onClick={handleLogout} className="px-4 py-2 font-mono border border-black hover:bg-black/5">
          Logout
        </button>
      </div>

      <div className="mb-8">
        <label className="block mb-4">
          <span className="font-mono">Upload Images</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="block w-full mt-2 font-mono"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="border border-black p-4">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              className="w-full aspect-square object-cover mb-4"
            />
            <div className="space-y-2">
              <input
                type="text"
                value={image.title}
                onChange={(e) => {
                  setImages((prev) =>
                    prev.map((img) => (img.id === image.id ? { ...img, title: e.target.value } : img)),
                  )
                }}
                className="w-full p-2 border border-black font-mono"
              />
              <select
                value={image.type}
                onChange={(e) => updateImageType(image.id, e.target.value as "tattoo" | "design")}
                className="w-full p-2 border border-black font-mono"
              >
                <option value="tattoo">Tattoo</option>
                <option value="design">Design</option>
              </select>
              <button
                onClick={() => removeImage(image.id)}
                className="w-full py-2 bg-red-500 text-white font-mono hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

