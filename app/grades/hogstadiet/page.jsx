'use client'

import { useEffect, useState } from 'react'
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import Link from "next/link"
import { Book, GraduationCap } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {[1, 2, 3].map((i) => (
      <Card key={i} className="h-[300px]">
        <CardHeader>
          <Skeleton className="h-6 w-3/4 mx-auto" />
          <div className="flex gap-4 mt-2 justify-center">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-24 w-full" />
        </CardContent>
      </Card>
    ))}
  </div>
)

const LessonCard = ({ lesson }) => (
  <Link 
    href={`/detailpage/${lesson._id}`}
    className="block h-full"
  >
    <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-800 text-center line-clamp-2">
          {lesson.title}
        </h3>
        <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mt-3">
          <div className="flex items-center gap-1">
            <Book className="w-4 h-4" />
            <span>{lesson.subject}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="w-4 h-4" />
            <span>{lesson.grade}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-4">
          {lesson.description}
        </p>
      </CardContent>
    </Card>
  </Link>
)

const Hogstadiet = () => {
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
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
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

export default Hogstadiet