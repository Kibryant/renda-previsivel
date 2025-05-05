"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ hours, minutes, seconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours < 0 ? 23 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className="flex justify-center space-x-4 my-4">
      <div className="bg-zinc-700 rounded-lg p-3 w-20 text-center">
        <div className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
        <div className="text-xs text-gray-400">Horas</div>
      </div>
      <div className="bg-zinc-700 rounded-lg p-3 w-20 text-center">
        <div className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-xs text-gray-400">Minutos</div>
      </div>
      <div className="bg-zinc-700 rounded-lg p-3 w-20 text-center">
        <div className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-xs text-gray-400">Segundos</div>
      </div>
    </div>
  )
}
