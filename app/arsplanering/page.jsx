import { subjects } from '@/constants/årsplanering'

const Grovplanering = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 ">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
        Årsplanering
      </h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
        Årsplaneringarna är framtagna för dig som är ny inom läraryrket och kanske inte fått möjlighet under studietiden att just skapa en årsplanering eller terminplanering, men också för dig som vid terminsstart söker inspiration. Låt dig inspireras av planeringarna nedan, som omsorgsfullt utvecklats av erfarna lärare. Klicka på ett ämne för att ladda ner årsplaneringen som PDF.
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {subjects.map((subject) => (
          <a
            key={subject.name}
            href={subject.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <button className="w-full bg-black text-white font-semibold py-5 px-6 rounded-2xl shadow-md hover:shadow-lg">
              {subject.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Grovplanering