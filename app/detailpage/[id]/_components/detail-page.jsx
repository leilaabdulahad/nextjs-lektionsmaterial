'use client'
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { useUser } from '@clerk/clerk-react'

export default function DetailPage({ lesson }) {
  const router = useRouter()
  const { user } = useUser()

  if (!lesson) return null

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{lesson.title}</h1>
      <p className="text-gray-700 mb-4">{lesson.description}</p>
      <div className="mb-4">
        <p className="text-gray-600"><span className="font-semibold">Ämne:</span> {lesson.subject}</p>
        <p className="text-gray-600"><span className="font-semibold">Årskurs:</span> {lesson.grade}</p>
      </div>
      {lesson.pdf && (
        <a 
          href={lesson.pdf} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          View PDF
        </a>
      )}
      {user && (
        <button className="ml-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200">
          <Link href={`/admin/edit/${lesson._id}`}>
            Edit lesson plan
          </Link>
        </button>
      )}
    </div>
  )
}
