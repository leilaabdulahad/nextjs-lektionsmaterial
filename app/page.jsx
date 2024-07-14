'use client'
import { AllLessons } from "./admin/_components/all-lessons"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

function LandingPage() {
  return (
    <div className="bg-backgroundColor">
      <Header />
      <div className="flex justify-center items-center mt-10 gap-4">
        <AllLessons />
      </div>
      <Footer />
    </div>
  )
}
export default LandingPage