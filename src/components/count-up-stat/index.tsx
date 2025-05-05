"use client"

import { useState, useEffect } from "react"

interface CountUpStatProps {
  value: number
  suffix?: string
  duration?: number
}

export default function CountUpStat({ value, suffix = "", duration = 2000 }: CountUpStatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const percentage = Math.min(progress / duration, 1)
      setCount(Math.floor(percentage * value))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [value, duration])

  return (
    <div className="font-bold text-2xl md:text-3xl text-white">
      {count}
      {suffix}
    </div>
  )
}
