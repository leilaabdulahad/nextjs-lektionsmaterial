'use client'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { PdfPicker } from "@/components/pdf-picker"
import { BookOpen, Type, FileText, Book, GraduationCap, Upload } from "lucide-react"

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
            await createLesson({ pdfId, title, description, subject, grade })
            console.log('Lektion skapad framgångsrikt')
            
            setTitle('')
            setDescription('')
            setSubject('')
            setGrade('')
            setSelectedPdf(null)
            setPdfSrc(null)
        } catch (error) {
            console.error(error)
            setErrorMessage('Misslyckades med att skapa lektion')
        }
    }

    const handleSubjectChange = (e) => {
        const subject = e.target.value;
        const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1)
        setSubject(capitalizedSubject)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="relative bg-slate-800 p-8 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-90" />
                        <div className="relative">
                            <BookOpen className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Skapa lektionsplanering
                            </h1>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* PDF section */}
                        <div className="mb-8 bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-200">
                            <PdfPicker 
                                setSelectedPdf={file => { 
                                    setSelectedPdf(file); 
                                    setErrorMessage(''); 
                                }} 
                                pdfSrc={pdfSrc} 
                                setPdfSrc={setPdfSrc} 
                            />
                        </div>

                        {errorMessage && (
                            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                                {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="title" className="flex items-center gap-2 text-slate-700 mb-2">
                                        <Type className="w-4 h-4" />
                                        Titel
                                    </Label>
                                    <Input 
                                        id="title" 
                                        value={title} 
                                        onChange={e => setTitle(e.target.value)} 
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all" 
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="description" className="flex items-center gap-2 text-slate-700 mb-2">
                                        <FileText className="w-4 h-4" />
                                        Beskrivning
                                    </Label>
                                    <Input 
                                        id="description" 
                                        value={description} 
                                        onChange={e => setDescription(e.target.value)} 
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all" 
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="subject" className="flex items-center gap-2 text-slate-700 mb-2">
                                        <Book className="w-4 h-4" />
                                        Ämne
                                    </Label>
                                    <Input 
                                        id="subject" 
                                        value={subject} 
                                        onChange={handleSubjectChange} 
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all" 
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="grade" className="flex items-center gap-2 text-slate-700 mb-2">
                                        <GraduationCap className="w-4 h-4" />
                                        Årskurs
                                    </Label>
                                    <Input 
                                        id="grade" 
                                        value={grade} 
                                        onChange={e => setGrade(e.target.value)} 
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all" 
                                    />
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <Upload className="w-4 h-4" />
                                Lägg till lektion
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}