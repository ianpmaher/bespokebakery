// import Contacts from "../Contacts";

import SteamyBread from "../SteamyBread";
import SteamyCoffee from "./SteamyCoffee";

function Header() {
    return (
        <header className=" flex flex-row justify-center items-center bg-modernDolchLight-main-color w-full sm:min-h-30 md:max-h-32 text-black rounded-2xl outline outline-modernDolchLight-text-color">
            <div className="flex items-end justify-evenly md:w-1/4 py-1">
                <SteamyBread />
                <SteamyCoffee />
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
