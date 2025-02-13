import { useState } from "react"
import { BodyPartSelector } from "../components/BodyPartSelector"
import { EstimateModal } from "../components/EstimateModal"

interface EstimateResult {
  min: number
  max: number
  selectedPart: string
}

export default function PriceEstimate() {
  const [estimate, setEstimate] = useState<EstimateResult | null>(null)
  const [selectedPart, setSelectedPart] = useState("")

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const size = formData.get("size") as string
    const complexity = formData.get("complexity") as string
    const colors = formData.get("colors") as string

    // Basic calculation logic
    let basePrice = 150
    if (size === "medium") basePrice *= 1.5
    if (size === "large") basePrice *= 2
    if (size === "xlarge") basePrice *= 2.5

    if (complexity === "moderate") basePrice *= 1.3
    if (complexity === "complex") basePrice *= 1.6
    if (complexity === "veryComplex") basePrice *= 2

    if (colors === "twothree") basePrice *= 1.2
    if (colors === "fourfive") basePrice *= 1.4
    if (colors === "sixplus") basePrice *= 1.6

    setEstimate({
      min: Math.floor(basePrice * 0.9),
      max: Math.ceil(basePrice * 1.1),
      selectedPart,
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-mono">Price Estimate</h2>

      <form onSubmit={calculateEstimate} className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <label className="block text-lg font-mono">Body Location</label>
          <BodyPartSelector onSelect={(part) => setSelectedPart(part.id)} selected={selectedPart} />
        </div>

        <div className="space-y-2">
          <label htmlFor="size" className="block text-lg font-mono">
            Size
          </label>
          <select id="size" name="size" className="w-full p-2 bg-white border border-black font-mono" required>
            <option value="">Select size</option>
            <option value="small">Small (2-3 inches)</option>
            <option value="medium">Medium (4-6 inches)</option>
            <option value="large">Large (7-10 inches)</option>
            <option value="xlarge">Extra Large (11+ inches)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="complexity" className="block text-lg font-mono">
            Design Complexity
          </label>
          <select
            id="complexity"
            name="complexity"
            className="w-full p-2 bg-white border border-black font-mono"
            required
          >
            <option value="">Select complexity</option>
            <option value="simple">Simple (Line work)</option>
            <option value="moderate">Moderate (Some shading)</option>
            <option value="complex">Complex (Detailed shading/color)</option>
            <option value="veryComplex">Very Complex (Photorealistic/Multiple colors)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="colors" className="block text-lg font-mono">
            Number of Colors
          </label>
          <select id="colors" name="colors" className="w-full p-2 bg-white border border-black font-mono" required>
            <option value="">Select number of colors</option>
            <option value="blackwork">Black only</option>
            <option value="twothree">2-3 colors</option>
            <option value="fourfive">4-5 colors</option>
            <option value="sixplus">6+ colors</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-bold font-mono hover:bg-black/80 transition-colors"
        >
          Calculate Estimate
        </button>
      </form>

      {estimate && <EstimateModal estimate={estimate} onClose={() => setEstimate(null)} />}
    </div>
  )
}

