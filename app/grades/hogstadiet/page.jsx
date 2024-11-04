'use client'
import { useEffect, useState } from 'react'
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { LoadingSkeleton } from "@/components/LoadingSkeleton"
import { LessonCard } from "@/components/LessonCard"
import { Book, BookOpen } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const SUBJECTS = [
  "Svenska som andraspråk",
  "Svenska",
  "Engelska",
]

const HogstadietPage = () => {
  const lessons = useQuery(api.lessons.getAll)
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [filteredLessons, setFilteredLessons] = useState([])

  useEffect(() => {
    if (lessons) {
      let filtered = lessons.filter(
        lesson => lesson.grade.toLowerCase() === 'högstadiet'
      )
      if (selectedSubject !== 'all') {
        filtered = filtered.filter(lesson =>
          lesson.subject === selectedSubject
        )
      }
      setFilteredLessons(filtered)
    }
  }, [lessons, selectedSubject])

  if (!lessons) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2">
            <Book className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Högstadiet</h1>
          </div>
  
          <p className="text-sm text-gray-600 mt-1">
            {filteredLessons.length} lektioner {selectedSubject !== 'all' && `inom ${selectedSubject}`}
          </p>
  
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Välkommen till vårt bibliotek för högstadienivå! Här kan du filtrera bland olika ämnen och hitta lektioner
            som hjälper dig att utveckla dina kunskaper. Använd filtret nedan för att utforska specifika lektioner.
          </p>
  
          <div className="mt-4 flex flex-col items-center">
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Alla ämnen" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-md">
                <SelectItem value="all">Alla ämnen</SelectItem>
                {SUBJECTS.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
  
            {selectedSubject !== 'all' && (
              <Badge 
                variant="secondary"
                className="mt-2 cursor-pointer hover:bg-gray-100 w-fit"
                onClick={() => setSelectedSubject('all')}
              >
                {selectedSubject}
                <span className="ml-2">×</span>
              </Badge>
            )}
          </div>
        </div>
  
   
        {filteredLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson._id} lesson={lesson} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Inga lektioner hittades
            </h3>
            <p className="text-gray-600">
              Prova att välja ett annat ämne.
            </p>
          </div>
        )}
      </div>
    </div>
  )
  
}

export default HogstadietPage
