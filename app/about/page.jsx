import { about } from '@/constants/about';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <img src="" alt="" className="w-full h-64 object-cover rounded-md mb-8" />
      {about.map((section, index) => (
        <div key={index} className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{section.title}</h1>
          <p className="text-lg text-gray-700">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
