import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  profession: string
  testimonial: string
  imageUrl: string
  rating: number
}

export default function TestimonialCard({ name, profession, testimonial, imageUrl, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">

            <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500 text-xl font-bold">
                {name.charAt(0).toUpperCase()}
            </div>
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-600 text-sm">{profession}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={`${i + 1}`} className={`h-4 w-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  )
}
