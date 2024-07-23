import "./App.css";
import Header from "./components/shared/Header";

function App() {
    return (
        <div className=" mx-auto my-0 h-full w-full text-center flex justify-center items-center">
            <div className="bg-blue-400">
                <Header />
            </div>
            <div className="flex flex-col w-full text-black text-center">
                <div className=" bg-modernDolchLight-caret-color bg-fixed scroll-smooth ">
                    <main id="mainmain" className=" my-0 mx-auto p- ">
                        <section className="fixed left-1 right-1 top-0 z-50 mx-auto my-0 w-1/2">
                            {" "}
                            {/* if scroll to animate the bread, this must be fixed*/}
                            asdd
                        </section>

                        <div className="">asd</div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
