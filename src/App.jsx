import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ContentContainer from "./components/ContentContainer";
import MenuTest from "./components/MenuTest";
import Header from "./components/shared/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

function App() {
  useEffect(() => {
    Aos.init({});
  });

  return (
    // <Theme
    //   accentColor="mint"
    //   backgroundColor="gray"
    //   panelBackground="translucent"
    //   radius="full"
    // >
      <div className="mx-auto my-0 text-center font-sans overflow-hidden min-h-screen bg-bake-dusty-rose">
        <div className="">
          <Header className="static flex flex-col text-black top-0 left-0" />
        </div>
        <main id="mainmain" className="my-0 mx-auto bg-fixed text-center">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuTest />} />
            <Route path="/content" element={<ContentContainer />} />
          </Routes>
        </main>
      </div>
      /* <ThemePanel />
    </Theme> */
  );
}

export default App;
