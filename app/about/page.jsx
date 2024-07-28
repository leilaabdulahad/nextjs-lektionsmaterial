import { about, employees } from '@/constants/about'

const About = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <img className="w-full h-64 object-cover rounded-md mb-8 shadow-lg bg-about-background" />
      <div className="flex flex-col items-center">
        {about.map((section, index) => (
          <div key={index} className="mb-8 p-6 bg-white bg-opacity-80">
            <h1 className="text-3xl font-bold mb-2 text-black">{section.title}</h1>
            <p className="text-lg text-gray-800">{section.content}</p>
          </div>
        ))}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {employees.map((employee, index) => (
            <div 
              key={index} 
              className="flex items-center p-5 bg-white rounded-lg shadow-md transform transition duration-500 ease-in-out hover:-translate-y-1"
            >
              <img src={employee.image} alt={employee.name} className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
                <a href={`mailto:${employee.email}`} className="text-gray-800 hover:underline">{employee.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
