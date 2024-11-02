import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { useState, useEffect } from "react"
import Filter from "@/components/Filter"
import Link from "next/link"
import { subjects, grades } from '@/constants/filter'
import { Book, GraduationCap, Clock } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const LessonCard = ({ lesson }) => (
  <Link 
    href={`/detailpage/${lesson._id}`}
    className="block h-full"
  >
    <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {lesson.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Book className="w-4 h-4" />
            <span>{lesson.subject}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="w-4 h-4" />
            <span>Årskurs: {lesson.grade}</span>
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

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <Card key={i} className="h-[300px]">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <div className="flex gap-4 mt-2">
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

const EmptyState = () => (
  <Card className="py-16 text-center">
    <div className="flex flex-col items-center gap-4">
      <Clock className="w-12 h-12 text-gray-400" />
      <h3 className="text-xl font-semibold text-gray-800">
        Inget material tillgängligt
      </h3>
      <p className="text-gray-600">
        Justera dina filter för att se fler lektioner
      </p>
    </div>
  </Card>
)

export const AllLessons = () => {
  const lessons = useQuery(api.lessons.getAll)
  const [filteredLessons, setFilteredLessons] = useState([])
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")

  useEffect(() => {
    if (lessons) {
      setFilteredLessons(lessons)
    }
  }, [lessons])

  const handleFilterChange = (subject, grade) => {
    setSelectedSubject(subject)
    setSelectedGrade(grade)
    let filtered = lessons
    if (subject) {
      filtered = filtered.filter(
        lesson => lesson.subject.toLowerCase() === subject.toLowerCase()
      )
    }
    if (grade) {
      filtered = filtered.filter(
        lesson => lesson.grade.toLowerCase() === grade.toLowerCase()
      )
    }
    setFilteredLessons(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Filter
            subjects={subjects}
            grades={grades}
            onFilterChange={handleFilterChange}
            noLessonPlans={filteredLessons.length === 0}
          />
        </div>

        {!lessons ? (
          <LoadingSkeleton />
        ) : filteredLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson._id} lesson={lesson} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

export default AllLessons