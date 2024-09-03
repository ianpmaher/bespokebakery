import ContentContainer from "../components/ContentContainer";
import MenuTest from "../components/MenuTest";
import SteamyCoffee from "../components/SteamyCoffee";

const HomePage = () => {
  return (
    <div className="min-h-screen mx-auto my-0 center-center">
      <div className="flex flex-col min-h-screen">
        <MenuTest />
      </div>
      <div className="flex flex-col min-h-screen">
        <ContentContainer />
      </div>
      <div className="fixed bottom-0 right-0">
        <SteamyCoffee className="" />
      </div>
    </div>
  );
};

export default HomePage;
