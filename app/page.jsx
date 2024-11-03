'use client'
import { AllLessons } from "./admin/_components/all-lessons"
import Header from "@/components/Header"

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-10 gap-4">
        <AllLessons />
      </div>
    </div>
  )
}
export default LandingPage