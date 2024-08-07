import { headerText } from "@/constants"

function Header() {
    return (
        <div className="relative max-w-screen-lg mx-auto text-center text-black p-20 bg-header-background bg-cover bg-center bg-no-repeat h-96">
            <p className="text-lg mt-7 font-medium text-white leading-relaxed max-w-xs mx-auto whitespace-pre-wrap">
                Lektionsmaterial för högstadiet och gymnasiet skapade av lärare för lärare.
            </p>
            <button className="button-gy absolute top-0 right-0 m-4">Gymnasiet</button>
            <button className="button-hs absolute top-20 right-0 m-4">Högstadiet</button>
        </div>
    )
}

export default Header
