import { headerText } from "@/constants"

function Header() {
    const text = headerText[0]

    return (
            <div className="max-w-screen-lg mx-auto text-center text-black p-20">
                <h1 className="text-4xl text-black md:text-6xl font-bold">{text.title}</h1>
                <h2 className="text-2xl mb-4">{text.subtitle}</h2>
                <p className="text-lg md:text-xl mb-8">{text.description}</p>
                <button className="bg-backgroundColor-darkButton text-white hover:bg-backgroundColor-lightButton py-3 px-6 rounded-xl font-semibold transition-colors">{text.buttonText}</button>
            </div>
    )
}

export default Header