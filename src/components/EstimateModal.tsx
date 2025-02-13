"use client"

interface EstimateResult {
  min: number
  max: number
  selectedPart: string
}

interface Props {
  estimate: EstimateResult
  onClose: () => void
}

export function EstimateModal({ estimate, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-black rounded-lg max-w-lg w-full mx-auto p-6 animate-in zoom-in duration-200">
        <h3 className="text-xl mb-4 text-white font-mono">Estimated Price Range</h3>
        <p className="text-3xl font-bold text-white font-mono">
          ${estimate.min} - ${estimate.max}
        </p>
        <p className="mt-4 text-sm text-gray-300 font-mono">
          This is a rough estimate for a tattoo on the {estimate.selectedPart}.
          <br />
          Final price may vary based on specific design details and consultation.
        </p>
        <button onClick={onClose} className="mt-6 w-full py-2 bg-white text-black font-mono hover:bg-gray-100">
          Close
        </button>
      </div>
    </div>
  )
}

