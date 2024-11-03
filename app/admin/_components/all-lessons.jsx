import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Filter from "@/components/Filter"
import { subjects, grades } from '@/constants/filter'
import { LessonCard } from "@/components/LessonCard"
import { LoadingSkeleton } from "@/components/LoadingSkeleton"
import { EmptyState } from "@/components/EmptyState"
import { useLessonFilter } from "@/hooks/useLessonFilter"

export const AllLessons = () => {
  const lessons = useQuery(api.lessons.getAll)
  const {
    filteredLessons,
    handleFilterChange,
    selectedSubject,
    selectedGrade
  } = useLessonFilter(lessons)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Filter
            subjects={subjects}
            grades={grades}
            onFilterChange={handleFilterChange}
            selectedSubject={selectedSubject}
            selectedGrade={selectedGrade}
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