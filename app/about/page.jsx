import { about, employees } from '@/constants/about'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, User, Users } from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-[400px] mb-16">
        <div className="absolute inset-0 bg-about-background bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Om oss</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              text
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* About sec */}
        <div className="grid gap-8 mb-16">
          {about.map((section, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-black">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team sec */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Vårt Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Möt personerna som gör det möjligt
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((employee, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      {employee.image ? (
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="w-8 h-8 text-blue-500" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {employee.name}
                      </h3>
                      <a
                        href={`mailto:${employee.email}`}
                        className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        {employee.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About