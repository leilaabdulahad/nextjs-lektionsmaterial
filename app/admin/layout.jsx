'use client'
import { useConvexAuth } from "convex/react"
import { Loader2 } from "lucide-react"

function AdminLayout({ children }) {
  const { isLoading } = useConvexAuth()

  if(isLoading) return (
    <div className="bg-backgroundColor h-screen flex items-center justify-center">
      <Loader2 className="animate-spin size-10" />
    </div>
  )

  return (
    <div className="bg-backgroundColor">
      { children }
    </div>
  )
}
export default AdminLayout