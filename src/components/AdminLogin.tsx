"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function AdminLogin() {
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const username = (form.elements.namedItem("username") as HTMLInputElement).value
    const password = (form.elements.namedItem("password") as HTMLInputElement).value

    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAdmin", "true")
      navigate("/admin")
      setIsOpen(false)
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-2 text-sm font-mono text-gray-500 hover:text-black"
      >
        Admin
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-mono mb-4">Admin Login</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-mono mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-2 border border-black font-mono"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-mono mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-black font-mono"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm font-mono">{error}</p>}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 font-mono border border-black hover:bg-black/5"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 font-mono bg-black text-white hover:bg-black/80">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

