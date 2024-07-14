'use client'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAction, useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"
import { PdfPicker } from "@/components/pdf-picker"

export default function Edit({ lesson }) {
  const router = useRouter();

  const generateUploadUrl = useMutation(api.pdfs.generateUploadUrl);
  const updateLesson = useMutation(api.lessons.updateLesson);
  const deleteLesson = useAction(api.lessons.deleteLesson);
  const deleteImage = useMutation(api.pdfs.deleteImage);

  const [pdfSrc, setPdfSrc] = useState(lesson?.pdf || null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [title, setTitle] = useState(lesson.title);
  const [description, setDescription] = useState(lesson.description);
  const [subject, setSubject] = useState(lesson.subject);
  const [grade, setGrade] = useState(lesson.grade);

  const handleSubmit = async (e) => {
    e.preventDefault()

    let pdfData

    if (selectedPdf !== null) {
      try {
        await deleteImage({ storageId: lesson.pdfId })
      } catch (error) {
        console.log(error.message)
      }

      const postUrl = await generateUploadUrl()
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedPdf.type },
        body: selectedPdf,
      });

      pdfData = await result.json()
    }

    await updateLesson({
      id: lesson._id,
      title: title,
      description: description,
      subject: subject,
      grade: grade,
      pdfId: pdfData?.storageId ? pdfData.storageId : lesson.pdfId,
    })

    setTitle("")
    setDescription("")
    setSubject("")
    setGrade("")
    router.push("/")
  };

  const handleDelete = async () => {
    await deleteLesson({ id: lesson._id })
    router.push("/")
  };

  if (!lesson) return null

  return (
    


    <div>
      <PdfPicker
        pdfSrc={pdfSrc}
        setSelectedPdf={setSelectedPdf}
        setPdfSrc={setPdfSrc}
      />

      <form onSubmit={handleSubmit} className="mt-6">
        <div>
          <Label htmlFor="title">Title:</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Label htmlFor="description">Description:</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Label htmlFor="subject">Ämne:</Label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Label htmlFor="grade">Årskurs:</Label>
          <Input
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <Button className="mt-6">Update Lesson</Button>
          <Button variant="destructive" onClick={handleDelete} className="mt-6">
            Delete Lesson
          </Button>
        </div>
      </form>
    </div>
  )
}
