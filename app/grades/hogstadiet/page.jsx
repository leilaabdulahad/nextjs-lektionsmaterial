'use client'
import { useEffect, useState } from 'react'
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Book } from "lucide-react"
import { Card } from "@/components/ui/card"
import { LoadingSkeleton } from "@/components/LoadingSkeleton"
import { LessonCard } from "@/components/LessonCard"

const HogstadietPage = () => {
  const lessons = useQuery(api.lessons.getAll)
  const [hogstadietLessons, setHogstadietLessons] = useState([])

  useEffect(() => {
    if (lessons) {
      const filteredLessons = lessons.filter(
        lesson => lesson.grade.toLowerCase() === 'högstadiet'
      )
      setHogstadietLessons(filteredLessons)
    }
  }, [lessons])

  if (!lessons) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hogstadietLessons.length === 0 ? (
          <Card className="py-16 text-center">
            <div className="flex flex-col items-center gap-4">
              <Book className="w-12 h-12 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-800">
                Inga lektioner tillgängliga
              </h3>
              <p className="text-gray-600">
                Det finns inga lektioner för högstadiet just nu
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hogstadietLessons.map((lesson) => (
              <LessonCard key={lesson._id} lesson={lesson} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HogstadietPage
