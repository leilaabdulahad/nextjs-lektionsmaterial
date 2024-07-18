'use client'
import { useEffect, useState } from 'react'
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

const Gymnasiet = () => {
    const lessons = useQuery(api.lessons.getAll)
    const [gymnasietLessons, setGymnasietLessons] = useState([])

    useEffect(() => {
        if (lessons) {
            const filteredLessons = lessons.filter(lesson => lesson.grade.toLowerCase() === 'gymnasiet')
            setGymnasietLessons(filteredLessons)
        }
    }, [lessons])

    if (!lessons) {
        return <div>Laddar...</div>
    }

    return (
        <div>
            {gymnasietLessons.map((lesson) => (
                <div key={lesson._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-center">{lesson.title}</h3>
                  <div className="flex flex-row place-content-center space-x-4">
                  <p className="text-gray-500">{lesson.subject}</p>
                  <p className="text-gray-500 mb-4">Årskurs: {lesson.grade}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{lesson.description.substring(0, 300)}</p>
                </div>
              </div>
            ))}
        </div>
    )
}

export default Gymnasiet
