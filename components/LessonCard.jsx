import Link from "next/link"
import { Book, GraduationCap } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export const LessonCard = ({ lesson }) => (
  <Link
    href={`/detailpage/${lesson._id}`}
    className="block h-full"
  >
    <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {lesson.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Book className="w-4 h-4" />
            <span>{lesson.subject}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="w-4 h-4" />
            <span>Årskurs: {lesson.grade}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-4">
          {lesson.description}
        </p>
      </CardContent>
    </Card>
  </Link>
)
