import "./App.css";
import HeaderSection from "./sections/HeaderSection";
import Introduction from "./sections/Introduction";
import Github from "./sections/Github";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <>
      <div className="px-5">
        <div className="hero-section">
          <HeaderSection />
          <Introduction />
        </div>
        <Github />
      </div>
      <TechStack />
    </>
  );
}

export default App;
