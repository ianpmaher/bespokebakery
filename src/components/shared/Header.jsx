// import Contacts from "../Contacts";

import SteamyBread from "../SteamyBread";
import SteamyCoffee from "../SteamyCoffee";

function Header() {
    return (
        <header className="flex flex-col bg-modernDolchLight-main-color text-black rounded-2xl">
            <div className=" flex self-center justify-self-center bg-modernDolchLight-main-color text-black rounded-2xl">
                <div className="flex w-screen items-center justify-center py-1">
                    <SteamyBread />
                    <SteamyCoffee />
                </div>
            </div>
            <a href="/">
                <h1 className="text-3xl md:text-4xl">Bespoke Bakery</h1>
                <div className="flex items-center justify-evenly mx-auto">
                    <h3 className="text-md md:text-xl">leaven | local</h3>
                </div>
            </a>
            {/* <Contacts /> */}
        </header>
    );
}

export default Header;
