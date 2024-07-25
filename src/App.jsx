import "./App.css";
import ContentContainer from "./components/ContentContainer";
import Header from "./components/shared/Header";

function App() {
    return (
        <div className=" mx-auto my-0 text-center">
            <div className="mx-auto my-0 fixed top-0 left-0">
                <Header />
            </div>
            <main id="mainmain" className=" my-0 mx-auto">
                <div className="flex flex-col w-full text-black text-center">
                    <div className=" bg-modernDolchLight-caret-color bg-fixed scroll-smooth ">
                        <div className="h-screen flex justify-center items-center">

                        <ContentContainer />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
