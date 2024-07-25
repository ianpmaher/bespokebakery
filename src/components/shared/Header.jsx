// import Contacts from "../Contacts";

import SteamyBread from "../SteamyBread";
import SteamyCoffee from "../SteamyCoffee";

function Header() {
    return (
        <header className="flex flex-col bg-modernDolchLight-main-color text-black fixed top-0 left-0">
            <div className=" flex self-center justify-self-center bg-modernDolchLight-main-color text-black rounded-xl h-1/2 w-1/2 outline">
                <div className="flex w-screen items-center justify-center">
                    <SteamyBread />
                    <a href="/" className="mx-auto my-0">
                        <h1 className="text-2xl md:text-3xl">Bespoke Bakery</h1>
                        <div className="flex items-center justify-evenly mx-auto">
                            <h3 className="text-md md:text-xl">leaven | local</h3>
                        </div>
                    </a>
                    <SteamyCoffee />
                </div>
            </div>

            {/* <Contacts /> */}
        </header>
    );
}

export default Header;
