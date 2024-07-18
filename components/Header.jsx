import { headerText } from "@/constants"

function Header() {
    

    return (
        <div className="max-w-screen-lg mx-auto text-center text-black p-20 bg-header-background bg-cover bg-center bg-no-repeat h-96">
            <button className="button">Gymnasiet</button>
            <button className="button">Högstadiet</button>
       
        </div>
    )
}

export default Header