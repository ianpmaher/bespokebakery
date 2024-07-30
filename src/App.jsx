import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ContentContainer from "./components/ContentContainer";
import MenuTest from "./components/MenuTest";
import Header from "./components/shared/Header";

function App() {

    useEffect(() => {
        Aos.init({});
    });

    return (
        <div className=" mx-auto my-0 text-center font-sans">
            <div className="">
                <Header />
            </div>
            <main id="mainmain" className=" my-0 mx-auto">
                <div className="flex flex-col w-full text-black text-center  bg-modernDolchLight-caret-color bg-fixed scroll-smooth">
                    <div className=" w-screen flex justify-center items-center">
                        <MenuTest />
                    </div>
                    <div className="h-screen flex justify-center items-center">
                        <ContentContainer />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
