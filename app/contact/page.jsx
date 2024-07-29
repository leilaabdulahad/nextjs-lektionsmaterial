'use client'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl w-full p-6 shadow-md rounded-md">
        <img className="w-full h-64 object-cover rounded-md mb-8 shadow-lg bg-contact-background" />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Kontakta oss</h1>
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Namn:</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              required
            />
          </div>
          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700">Meddelande:</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              rows="6"
              required
            />
          </div>
          <Button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none mt-6">
            Skicka meddelande
          </Button>
        </form>
      </div>
    </div>
  )
}
