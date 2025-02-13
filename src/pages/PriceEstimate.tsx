import { useState } from "react"

export default function PriceEstimate() {
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null)

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a simple example - you'd want to make this calculation more sophisticated
    setEstimate({ min: 150, max: 300 })
  }

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Price Estimate</h2>

      <form onSubmit={calculateEstimate} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="size" className="block text-lg">
            Size
          </label>
          <select id="size" className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white" required>
            <option value="">Select size</option>
            <option value="small">Small (2-3 inches)</option>
            <option value="medium">Medium (4-6 inches)</option>
            <option value="large">Large (7-10 inches)</option>
            <option value="xlarge">Extra Large (11+ inches)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="complexity" className="block text-lg">
            Design Complexity
          </label>
          <select id="complexity" className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white" required>
            <option value="">Select complexity</option>
            <option value="simple">Simple (Line work)</option>
            <option value="moderate">Moderate (Some shading)</option>
            <option value="complex">Complex (Detailed shading/color)</option>
            <option value="veryComplex">Very Complex (Photorealistic/Multiple colors)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="block text-lg">
            Body Location
          </label>
          <select id="location" className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white" required>
            <option value="">Select location</option>
            <option value="arm">Arm</option>
            <option value="leg">Leg</option>
            <option value="back">Back</option>
            <option value="chest">Chest</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="colors" className="block text-lg">
            Number of Colors
          </label>
          <select id="colors" className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white" required>
            <option value="">Select number of colors</option>
            <option value="blackwork">Black only</option>
            <option value="twothree">2-3 colors</option>
            <option value="fourfive">4-5 colors</option>
            <option value="sixplus">6+ colors</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
        >
          Calculate Estimate
        </button>
      </form>

      {estimate && (
        <div className="mt-8 p-6 bg-gray-900 rounded-lg text-center">
          <h3 className="text-xl mb-4">Estimated Price Range</h3>
          <p className="text-3xl font-bold">
            ${estimate.min} - ${estimate.max}
          </p>
          <p className="mt-4 text-sm text-gray-400">
            This is a rough estimate. Final price may vary based on specific design details and consultation.
          </p>
        </div>
      )}
    </div>
  )
}

