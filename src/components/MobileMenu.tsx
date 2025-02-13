"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-50 animate-in slide-in-from-top">
          <nav className="flex flex-col items-center py-8 space-y-8">
            <Link to="/" className="text-2xl font-mono hover:text-gray-600" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link to="/portfolio" className="text-2xl font-mono hover:text-gray-600" onClick={() => setIsOpen(false)}>
              WORKS
            </Link>
            <Link to="/schedule" className="text-2xl font-mono hover:text-gray-600" onClick={() => setIsOpen(false)}>
              BOOK
            </Link>
            <Link to="/estimate" className="text-2xl font-mono hover:text-gray-600" onClick={() => setIsOpen(false)}>
              ESTIMATE
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

