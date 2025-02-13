"use client"

import { useState } from "react"
import { Calendar } from "react-calendar"
import "react-calendar/dist/Calendar.css"

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const TIME_SLOTS = Array.from({ length: 24 }, (_, i) => {
  const hour = Math.floor(i / 2) + 10
  const minutes = i % 2 === 0 ? "00" : "30"
  return `${hour}:${minutes}`
})

export default function Schedule() {
  const [date, setDate] = useState<Value>(new Date())
  const [time, setTime] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const bookingData = {
      name: formData.get("name"),
      email: formData.get("email"),
      date: date,
      time: time,
      notes: formData.get("notes"),
    }

    alert(JSON.stringify(bookingData, null, 2))
  }

  return (
    <div className="container mx-auto px-4 max-w-2xl py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-mono">Schedule Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-mono">
            Name
          </label>
          <input type="text" id="name" className="w-full p-2 bg-white border border-black font-mono" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-mono">
            Email
          </label>
          <input type="email" id="email" className="w-full p-2 bg-white border border-black font-mono" required />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-mono">Date</label>
          <div className="border border-black p-4">
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full"
              minDate={new Date()}
              tileClassName="font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-mono">Time</label>
          <div className="grid grid-cols-4 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={`p-2 text-sm border border-black font-mono transition-colors
                  ${time === slot ? "bg-black text-white" : "hover:bg-black/5"}`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="block text-lg font-mono">
            Additional Notes
          </label>
          <textarea id="notes" rows={4} className="w-full p-2 bg-white border border-black font-mono"></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-bold font-mono hover:bg-black/80 transition-colors"
        >
          Request Appointment
        </button>
      </form>
    </div>
  )
}

