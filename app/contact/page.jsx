'use client'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Send, Mail, User, MessageSquare } from "lucide-react"

export default function Contact() {
  const submitContactForm = useMutation(api.contact.submitContactForm)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.values(formData).some(field => field.trim() === '')) {
      setErrorMessage('Alla fält är obligatoriska')
      setSuccessMessage('')
      return
    }
    setErrorMessage('')
    try {
      await submitContactForm(formData)
      console.log('Form data submitted', formData)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setSuccessMessage('Meddelande skickat!')
    } catch (error) {
      console.error(error)
      setErrorMessage('Misslyckades med att skicka meddelande')
      setSuccessMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Image */}
          <div className="relative h-48 bg-slate-800">
            <img 
              className="w-full h-full object-cover opacity-60" 
              alt="Contact background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-900/90" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <Mail className="w-12 h-12 mb-4 text-slate-200" />
              <h1 className="text-3xl font-bold text-center">Kontakta oss</h1>
            </div>
          </div>

          {/* Form container */}
          <div className="p-8">
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Namn
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Epostadress
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="message" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Meddelande
                </Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all min-h-[150px] resize-y"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                Skicka meddelande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}