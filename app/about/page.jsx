'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, User } from "lucide-react"
import { about, employees } from "@/constants/about"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="space-y-16 px-6 sm:px-12 lg:px-24 py-12 ">
      {/* About sec */}
      <motion.div
        className="space-y-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {about.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl">
              <CardHeader className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6">
                <CardTitle className="text-3xl font-bold text-center text-white">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 leading-relaxed">
                {section.content}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Team sec */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center lg:text-left">
          Vårt Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {employees.map((employee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center p-4 sm:p-6 space-y-4 sm:space-y-0">
                  {employee.image ? (
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-20 h-20 rounded-full"
                    />
                  ) : (
                    <div className="bg-indigo-100 text-indigo-500 rounded-full w-20 h-20 flex items-center justify-center border-4 border-indigo-500">
                      <User className="w-10 h-10" />
                    </div>
                  )}
                  <div className="text-center flex-1 w-full">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
                      {employee.name}
                    </h3>
                    <div className="flex items-center justify-center text-gray-600 mt-1">
                      <Mail className="w-5 h-5 mr-1" />
                      <span>{employee.email}</span>
                    </div>
                  </div>
                </div>
              </Card>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default About