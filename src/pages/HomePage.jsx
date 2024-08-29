import ContentContainer from "../components/ContentContainer";
import MenuTest from "../components/MenuTest";

const HomePage = () => {
  return (
    <div className="min-h-screen mx-auto my-0">
      <h1>Home Page</h1>
      <MenuTest />
      <ContentContainer />
    </div>
  );
}

export default HomePage;