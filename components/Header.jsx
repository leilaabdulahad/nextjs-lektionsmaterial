import { headerText } from "@/constants"

function Header() {
    

    return (
        <>
        <div className="relative max-w-screen-lg mx-auto text-center text-black p-20 bg-header-background bg-cover bg-center bg-no-repeat h-96">
            
                    <p className="">Lektionsmaterial för högstadiet och gymnasiet gjorda av lärare för lärare.</p>                
            <button className="button-gy absolute top-0 right-0 m-4">Gymnasiet</button>
            <button className="button-hs absolute top-20 right-0 m-4">Högstadiet</button>
        </div>
        </>
    )
}

export default Header