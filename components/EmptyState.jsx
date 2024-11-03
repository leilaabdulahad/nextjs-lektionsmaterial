import { Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export const EmptyState = () => (
  <Card className="py-16 text-center">
    <div className="flex flex-col items-center gap-4">
      <Clock className="w-12 h-12 text-gray-400" />
      <h3 className="text-xl font-semibold text-gray-800">
        Inget material tillgängligt
      </h3>
      <p className="text-gray-600">
        Justera dina filter för att se fler lektioner
      </p>
    </div>
  </Card>
)