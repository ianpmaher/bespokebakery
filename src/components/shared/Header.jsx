// import Contacts from "../Contacts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SteamyBread from "../SteamyBread";
import Nav from "./Nav";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header className={`${props.className}`}>
      {/* <header className="flex flex-col bg-modernDolchLight-main-color text-black "> */}
      <div className=" flex self-center justify-self-center bg-modernDolchLight-caret-color text-black rounded-xl h-1/2 w-1/2 ">
        <div className="flex w-screen items-center justify-center">
          <SteamyBread className="p-1" />
          <a href="/" className="mx-auto my-0">
            <h1 className="text-xl md:text-2xl">Bespoke Bakery</h1>
            <div className="flex items-center justify-evenly mx-auto">
              <h3 className="text-md md:text-lg">leaven | local</h3>
            </div>
          </a>
          <Nav />
          <FontAwesomeIcon icon={faCoffee} className="mx-4"/>
        </div>
      </div>

      {/* <Contacts /> */}
    </header>
  );
}

export default Header;
