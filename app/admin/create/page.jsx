'use client'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { PdfPicker } from "@/components/pdf-picker"

export default function Create() {
    const generateUploadUrl = useMutation(api.pdfs.generateUploadUrl)
    const createLesson = useMutation(api.lessons.createLesson)

    const [selectedPdf, setSelectedPdf] = useState(null)
    const [pdfSrc, setPdfSrc] = useState(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subject, setSubject] = useState('')
    const [grade, setGrade] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!selectedPdf) {
            setErrorMessage('Ingen PDF vald')
            return
        }

        if (title.trim() === '' || description.trim() === '' || subject.trim() === '' || grade.trim() === '') {
            setErrorMessage('Alla fält är obligatoriska')
            return
        }
        setErrorMessage('')

        let pdfId

        try {
            const postUrl = await generateUploadUrl()
            const result = await fetch(postUrl, {
                method: "POST",
                headers: { "content-type": selectedPdf.type },
                body: selectedPdf,
            })
            const { storageId } = await result.json();
            pdfId = storageId;
        } catch (error) {
            console.error(error)
            setErrorMessage('Misslyckades med att ladda upp PDF');
            return
        }

        try {
            await createLesson({ pdfId, title, description, subject, grade: parseFloat(grade) })
            console.log('Lektion skapad framgångsrikt')
        } catch (error) {
            console.error(error)
            setErrorMessage('Misslyckades med att skapa lektion')
            return
        }

        //Resets states
        setTitle('')
        setDescription('')
        setSubject('')
        setGrade('')
        setSelectedPdf(null)
        setPdfSrc(null)
    }

    const handleSubjectChange = (e) => {
        const subject = e.target.value;
        const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1)
        setSubject(capitalizedSubject)
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-2xl w-full p-6 shadow-md rounded-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Skapa lektionsplanering</h1>
                <PdfPicker 
                    setSelectedPdf={file => { 
                        setSelectedPdf(file); 
                        setErrorMessage(''); 
                    }} 
                    pdfSrc={pdfSrc} 
                    setPdfSrc={setPdfSrc} 
                />
                {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <Label htmlFor="title" className="block text-sm font-medium text-gray-700">Titel:</Label>
                        <Input 
                            id="title" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        />
                        <Label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">Beskrivning:</Label>
                        <Input 
                            id="description" 
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        />
                        <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mt-4">Ämne:</Label>
                        <Input 
                            id="subject" 
                            value={subject} 
                            onChange={handleSubjectChange} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        />
                        <Label htmlFor="grade" className="block text-sm font-medium text-gray-700 mt-4">Årskurs:</Label>
                        <Input 
                            id="grade" 
                            value={grade} 
                            onChange={e => setGrade(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        />
                    </div>
                    <Button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6">Lägg till lektion</Button>
                </form>
            </div>
        </div>
    )
}
