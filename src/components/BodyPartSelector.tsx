"use client"

import { useState } from "react"

interface BodyPart {
  id: string
  name: string
  coords: string // SVG coordinates for the area
  price: number
}

const bodyParts: BodyPart[] = [
  { id: "head", name: "Head", coords: "50,20,70,40", price: 1.5 },
  { id: "neck", name: "Neck", coords: "50,40,70,50", price: 1.2 },
  { id: "chest", name: "Chest", coords: "30,50,90,80", price: 1.3 },
  { id: "arm-left", name: "Left Arm", coords: "20,50,30,100", price: 1 },
  { id: "arm-right", name: "Right Arm", coords: "90,50,100,100", price: 1 },
  { id: "stomach", name: "Stomach", coords: "40,80,80,110", price: 1.4 },
  { id: "leg-left", name: "Left Leg", coords: "40,110,50,200", price: 1.1 },
  { id: "leg-right", name: "Right Leg", coords: "70,110,80,200", price: 1.1 },
]

interface Props {
  onSelect: (part: BodyPart) => void
  selected?: string
}

export function BodyPartSelector({ onSelect, selected }: Props) {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative aspect-[1/2] w-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1VNrJHhkVzx7KJQQzE56n0zLHlGRiU.png"
          alt="Body diagram"
          className="w-full h-full object-contain"
        />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 220">
          {bodyParts.map((part) => (
            <area
              key={part.id}
              shape="rect"
              coords={part.coords}
              className={`cursor-pointer ${
                hoveredPart === part.id || selected === part.id ? "fill-black/20" : "fill-transparent"
              } transition-colors`}
              onMouseEnter={() => setHoveredPart(part.id)}
              onMouseLeave={() => setHoveredPart(null)}
              onClick={() => onSelect(part)}
            />
          ))}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {bodyParts.map((part) => (
          <button
            key={part.id}
            onClick={() => onSelect(part)}
            className={`p-2 text-sm font-mono border border-black transition-colors
              ${selected === part.id ? "bg-black text-white" : "hover:bg-black/5"}`}
          >
            {part.name}
          </button>
        ))}
      </div>
    </div>
  )
}

