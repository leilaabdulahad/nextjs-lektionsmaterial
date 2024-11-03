import { subjects } from '@/constants/årsplanering'
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, BookOpen } from "lucide-react"

const Grovplanering = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header sec */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold ">
            Årsplanering
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Planera året med våra omfattande ämnesguider
          </p>
        </div>

        {/* Image sec */}
        <Card className="mb-16 overflow-hidden bg-white/70 backdrop-blur shadow-md border-slate-200">
          <CardContent className="p-0">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-50 to-gray-50">
              <img
                src='/images/arsplanering.jpg'
                alt="Årsplanering"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </CardContent>
        </Card>

        {/* Info sec */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-slate-50 to-gray-50 border-slate-200">
            <CardContent className="py-6">
              <p className="text-base text-slate-700 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Klicka på ett ämne för att ladda ner årsplaneringen i PDF-format
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Subjects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <a
              key={subject.name}
              href={subject.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/90 rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative bg-black p-4 h-full rounded-2xl">
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                      <FileText className="w-10 h-10 text-slate-200" />
                      <span className="text-lg font-medium text-slate-100">
                        {subject.name}
                      </span>
                      <div className="absolute bottom-4 right-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Download className="w-6 h-6 text-slate-200" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Grovplanering