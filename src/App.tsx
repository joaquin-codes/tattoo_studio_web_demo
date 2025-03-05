import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { MobileMenu } from "./components/MobileMenu"
import { AdminLogin } from "./components/AdminLogin"
import Schedule from "./pages/Schedule"
import PriceEstimate from "./pages/PriceEstimate"
import AdminDashboard from "./pages/AdminDashboard"
import Artists from "./pages/Artists"
import ArtistDetail from "./pages/ArtistDetail"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black">
        <header className="fixed w-full z-50 bg-white border-b border-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-xl font-mono">
                TATTOO STUDIO
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link to="/artists" className="hover:text-gray-600 font-mono">
                  ARTISTS
                </Link>
                <Link to="/schedule" className="hover:text-gray-600 font-mono">
                  BOOK
                </Link>
                <Link to="/estimate" className="hover:text-gray-600 font-mono">
                  ESTIMATE
                </Link>
              </nav>
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<ArtistDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/estimate" element={<PriceEstimate />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <AdminLogin />
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-mono tracking-tighter leading-none">
            TATTOO
            <br />
            ARTISTRY
          </h1>
          <p className="text-lg font-mono">
            Traditional & Contemporary
            <br />
            Custom Designs
          </p>
          <Link
            to="/artists"
            className="inline-block px-6 py-3 bg-black text-white font-mono hover:bg-black/80 transition-colors"
          >
            Meet Our Artists
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jrrKyz0dRCnqYynaAavCKgtP6pxGHv.png"
            alt="Tattoo Art"
            className="w-full h-64 object-cover animate-in fade-in duration-500"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oLVoYzyQM0yjA4YWXHtbIAKK55D2nh.png"
            alt="Tattoo Art"
            className="w-full h-64 object-cover animate-in fade-in duration-500 delay-100"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spTLctZxEiMLyXnr1soZDxdRvs8sTh.png"
            alt="Tattoo Art"
            className="w-full h-64 object-cover animate-in fade-in duration-500 delay-200"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IeCQOl8J4jl5Xy6iYNIHdtV3yrYrsZ.png"
            alt="Tattoo Art"
            className="w-full h-64 object-cover animate-in fade-in duration-500 delay-300"
          />
        </div>
      </div>
    </div>
  )
}

export default App

