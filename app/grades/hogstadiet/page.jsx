'use client'
import { useEffect, useState } from 'react'
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

const Hogstadiet = () => {
    const lessons = useQuery(api.lessons.getAll)
    const [hogstadietLessons, setHogstadietLessons] = useState([])

    useEffect(() => {
        if (lessons) {
            const filteredLessons = lessons.filter(lesson => lesson.grade.toLowerCase() === 'högstadiet')
            setHogstadietLessons(filteredLessons)
        }
    }, [lessons])

    if (!lessons) {
        return <div>Laddar...</div>
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {hogstadietLessons.map((lesson) => (
                    <div key={lesson._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-center mb-2">{lesson.title}</h3>
                            <div className="flex flex-row justify-center space-x-4 mb-4">
                                <p className="text-gray-500">{lesson.subject}</p>
                                <p className="text-gray-500">Årskurs: {lesson.grade}</p>
                            </div>
                            <p className="text-gray-700 mb-4">{lesson.description.substring(0, 300)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hogstadiet
