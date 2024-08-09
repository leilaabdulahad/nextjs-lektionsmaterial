'use client'
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'

export default function DetailPage({ lesson }) {
  const router = useRouter()
  const { user } = useUser()
  const [isHovered, setIsHovered] = useState(false)

  if (!lesson) return null

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
      <div className="mb-4">
        <p className="text-lg text-gray-700">{lesson.subject}</p>
        <p className="text-lg text-gray-700">{lesson.grade}</p>
      </div>
      <p className="text-gray-800 mb-6">{lesson.description}</p>
      <div className="flex items-center space-x-4">
        {lesson.pdf && (
          <a 
            href={lesson.pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            PDF
          </a>
        )}
        {user && (
          <Link href={`/admin/edit/${lesson._id}`}>
            <a 
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ${isHovered ? 'bg-blue-800' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Redigera
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
