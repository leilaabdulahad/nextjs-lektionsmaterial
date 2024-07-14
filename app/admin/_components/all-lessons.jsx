import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import React, { useState, useEffect } from "react"
import Filter from "@/components/Filter"
import Link from "next/link"
import { subjects, grades } from '@/constants/filter'

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
      filtered = filtered.filter(lesson => lesson.subject.toLowerCase() === subject.toLowerCase())
    }

    if (grade) {
      filtered = filtered.filter(lesson => lesson.grade === Number(grade))
    }

    setFilteredLessons(filtered)
  };

  if (!lessons) {
    return <div>Loading...</div>
  }

  return (
    <div className="relative rounded-2xl">
      <div className="p-4 flex place-content-center">
        <Filter subjects={subjects} grades={grades} onFilterChange={handleFilterChange} />
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <div key={lesson._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-center">{lesson.title}</h3>
                <div className="flex flex-row place-content-center space-x-4">
                <p className="text-gray-500"><strong>Ämne:</strong> {lesson.subject}</p>
                <p className="text-gray-500 mb-4"><strong>Årskurs:</strong> {lesson.grade}</p>
                </div>
                <p className="text-gray-700 mb-4">{lesson.description.substring(0, 300)}</p>
                <Link href={`/detailpage/${lesson._id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">View Lesson Plan</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
