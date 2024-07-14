'use client'
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { useUser } from '@clerk/clerk-react'

export default function DetailPage({ lesson }) {
  const router = useRouter()
  const { user } = useUser()

  if (!lesson) return null

  return (
    <div className="max-w-3xl mx-auto shadow-md rounded-lg p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-1 text-center">{lesson.title}</h1>
      <div className="flex flex-row space-x-6 place-content-center mb-3">
        <p className="text-gray-600">{lesson.subject}</p>
        <p className="text-gray-600"><span className="font-semibold">Årskurs: </span>{lesson.grade}</p>
      </div>
      <p className="text-gray-700 mb-4 text-center">{lesson.description}</p>
      <div className="mb-4">
      </div>

      <div className="flex flex-row place-content-center mt-12">
        {lesson.pdf && (
          <a 
            href={lesson.pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-white bg-backgroundColor-darkButton rounded-lg hover:bg-backgroundColor-lightButton transition-all duration-200"
          >
            PDF
          </a>
        )}
        {user && (
            <button className="ml-4 inline-block px-6 py-2 text-white bg-backgroundColor-darkButton rounded-lg hover:bg-backgroundColor-lightButton transition-all duration-200">
              <Link href={`/admin/edit/${lesson._id}`}>
                Redigera
              </Link>
            </button>
        )}
      </div>
    </div>
  )
}
