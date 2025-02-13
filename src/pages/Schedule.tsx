export default function Schedule() {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Schedule Appointment</h2>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block text-lg">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="time" className="block text-lg">
            Preferred Time
          </label>
          <select id="time" className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white" required>
            <option value="">Select a time</option>
            <option value="morning">Morning (10:00 - 12:00)</option>
            <option value="afternoon">Afternoon (13:00 - 17:00)</option>
            <option value="evening">Evening (18:00 - 20:00)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="block text-lg">
            Additional Notes
          </label>
          <textarea
            id="notes"
            rows={4}
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
        >
          Request Appointment
        </button>
      </form>
    </div>
  )
}

