'use client'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Edit from './_components/edit-lesson'

export default function EditPage({ params }) {
  const lessonId = params.id
  const lesson = useQuery(api.lessons.getById, { lessonId })

  if (!lesson) {
    return (
      <div>
        <p>Lesson not found</p>
      </div>
    )
  }

  return (
    <div className="mx-10">
      <h1 className="text-4xl font-semibold text-center mt-8">Redigera</h1>
      <Edit lesson={lesson} />
    </div>
  )
}
