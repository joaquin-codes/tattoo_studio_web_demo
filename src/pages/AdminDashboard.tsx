"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TagInput } from "../components/TagInput"

interface Image {
  id: string
  src: string
  type: "tattoo" | "design"
  title: string
  artistId: string
  tags: string[]
}

const ARTISTS = [
  { id: "1", name: "Alex Rivera" },
  { id: "2", name: "Maria Chen" },
]

const EXISTING_TAGS = [
  "Traditional",
  "Japanese",
  "Minimalist",
  "Blackwork",
  "Color",
  "Floral",
  "Geometric",
  "Portrait",
  "Animal",
  "Abstract",
]

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
          type: "tattoo",
          title: file.name.replace(/\.[^/.]+$/, ""),
          artistId: ARTISTS[0].id,
          tags: [],
        }
        setImages((prev) => [...prev, newImage])
      }
      reader.readAsDataURL(file)
    })
  }

  const updateImage = (id: string, updates: Partial<Image>) => {
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, ...updates } : img)))
  }

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-mono">Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("isAdmin")
            navigate("/")
          }}
          className="px-4 py-2 font-mono border border-black hover:bg-black/5"
        >
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
            <div className="space-y-4">
              <input
                type="text"
                value={image.title}
                onChange={(e) => updateImage(image.id, { title: e.target.value })}
                className="w-full p-2 border border-black font-mono"
              />

              <select
                value={image.type}
                onChange={(e) =>
                  updateImage(image.id, {
                    type: e.target.value as "tattoo" | "design",
                  })
                }
                className="w-full p-2 border border-black font-mono"
              >
                <option value="tattoo">Tattoo</option>
                <option value="design">Design</option>
              </select>

              <select
                value={image.artistId}
                onChange={(e) => updateImage(image.id, { artistId: e.target.value })}
                className="w-full p-2 border border-black font-mono"
              >
                {ARTISTS.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.name}
                  </option>
                ))}
              </select>

              <TagInput
                existingTags={EXISTING_TAGS}
                selectedTags={image.tags}
                onChange={(tags) => updateImage(image.id, { tags })}
              />

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

