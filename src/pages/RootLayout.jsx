import { Outlet } from "react-router";
import HeaderSection from "../sections/HeaderSection";
import Introduction from "../sections/Introduction";
import Github from "../sections/Github";
import TechStack from "../sections/TechStack";
import Navigation from "../components/Navigation";
import Footer from "../sections/Footer";

export default function RootLayout() {
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
      <div className="px-5">
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
