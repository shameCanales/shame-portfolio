import "./App.css";
import HeaderSection from "./sections/HeaderSection";
import Introduction from "./sections/Introduction";
import Github from "./sections/Github";

function App() {
  return (
    <div className="px-5">
      <div className="hero-section">
        <HeaderSection />
        <Introduction />
      </div>

      <Github />
    </div>
  );
}

export default App;
