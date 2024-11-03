'use client'
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import { FileText, Edit, Book, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DetailPage({ lesson }) {
  const router = useRouter()
  const { user } = useUser()
  const [isHovered, setIsHovered] = useState(false)

  if (!lesson) return null

  return (
    <div className="min-h-screen py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-3xl font-bold text-gray-800">
              {lesson.title}
            </CardTitle>
            {user && (
              <Link href={`/admin/edit/${lesson._id}`}>
                <button
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isHovered 
                      ? 'bg-blue-700 shadow-lg shadow-blue-500/30' 
                      : 'bg-blue-600 shadow-md shadow-blue-500/20'
                  } text-white`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Edit className="w-4 h-4" />
                  <span>Redigera</span>
                </button>
              </Link>
            )}
          </div>
          
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Book className="w-5 h-5" />
              <span className="text-sm">{lesson.subject}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm">{lesson.grade}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-lg">
            <p className="text-gray-600 leading-relaxed">
              {lesson.description}
            </p>
          </div>

          {lesson.pdf && (
            <a
              href={lesson.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 rounded-xl"
            >
              <FileText className="w-4 h-4 text-red-500" />
              <span>View PDF</span>
            </a>
          )}
        </CardContent>
      </Card>
    </div>
  )
}