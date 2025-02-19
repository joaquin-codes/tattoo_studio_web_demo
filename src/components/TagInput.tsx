"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface Props {
  existingTags: string[]
  selectedTags: string[]
  onChange: (tags: string[]) => void
}

export function TagInput({ existingTags, selectedTags, onChange }: Props) {
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    if (input) {
      setSuggestions(
        existingTags.filter((tag) => tag.toLowerCase().includes(input.toLowerCase()) && !selectedTags.includes(tag)),
      )
    } else {
      setSuggestions([])
    }
  }, [input, existingTags, selectedTags])

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onChange([...selectedTags, tag])
    }
    setInput("")
    setSuggestions([])
  }

  const removeTag = (tagToRemove: string) => {
    onChange(selectedTags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-black text-white font-mono text-sm flex items-center gap-1">
            {tag}
            <button onClick={() => removeTag(tag)} className="hover:text-gray-300">
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-black font-mono"
          placeholder="Add tags..."
        />

        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-black mt-1 max-h-40 overflow-auto z-10">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => addTag(suggestion)}
                className="w-full p-2 text-left hover:bg-black hover:text-white font-mono"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

