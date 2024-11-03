'use client'
import { useEffect, useState } from 'react'
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { LoadingSkeleton } from "@/components/LoadingSkeleton"
import { LessonCard } from "@/components/LessonCard"

const GymnasietPage = () => {
  const lessons = useQuery(api.lessons.getAll)
  const [gymnasietLessons, setGymnasietLessons] = useState([])

  useEffect(() => {
    if (lessons) {
      const filteredLessons = lessons.filter(
        lesson => lesson.grade.toLowerCase() === 'gymnasiet'
      )
      setGymnasietLessons(filteredLessons)
    }
  }, [lessons])

  if (!lessons) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gymnasietLessons.map((lesson) => (
            <LessonCard key={lesson._id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GymnasietPage