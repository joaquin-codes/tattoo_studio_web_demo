"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const WORKS = [
  {
    id: 1,
    type: "tattoo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jrrKyz0dRCnqYynaAavCKgtP6pxGHv.png",
    title: "Traditional Sleeve",
  },
  {
    id: 2,
    type: "tattoo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oLVoYzyQM0yjA4YWXHtbIAKK55D2nh.png",
    title: "Detailed Arm Work",
  },
  {
    id: 3,
    type: "design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spTLctZxEiMLyXnr1soZDxdRvs8sTh.png",
    title: "Minimalist Collection",
  },
  {
    id: 4,
    type: "design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IeCQOl8J4jl5Xy6iYNIHdtV3yrYrsZ.png",
    title: "Traditional Flash",
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState("all")

  const filteredWorks = WORKS.filter((work) => filter === "all" || work.type === filter)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-mono mb-8">WORKS / 作品</h1>

        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 font-mono border border-black transition-colors
              ${filter === "all" ? "bg-black text-white" : "hover:bg-black/5"}`}
          >
            ALL
          </button>
          <button
            onClick={() => setFilter("tattoo")}
            className={`px-4 py-2 font-mono border border-black transition-colors
              ${filter === "tattoo" ? "bg-black text-white" : "hover:bg-black/5"}`}
          >
            TATTOOS
          </button>
          <button
            onClick={() => setFilter("design")}
            className={`px-4 py-2 font-mono border border-black transition-colors
              ${filter === "design" ? "bg-black text-white" : "hover:bg-black/5"}`}
          >
            DESIGNS
          </button>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="aspect-square group relative overflow-hidden"
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-mono">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

