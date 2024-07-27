import { about } from '@/constants/about';

const About = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 text-white ">
      <img className="w-full h-64 object-cover rounded-md mb-8 shadow-lg bg-about-background" />
      <div className="flex flex-col items-center">
        {about.map((section, index) => (
          <div key={index} className="mb-8 p-6 bg-white bg-opacity-80">
            <h1 className="text-3xl font-bold mb-2 text-black">{section.title}</h1>
            <p className="text-lg text-gray-800">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
