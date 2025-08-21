import { Outlet } from "react-router";
import HeaderSection from "../sections/HeaderSection";
import Introduction from "../sections/Introduction";
import Github from "../sections/Github";
import TechStack from "../sections/TechStack";
import Navigation from "../components/Navigation";
import Footer from "../sections/Footer";
import CertificateViewer from "../components/CertificateViewer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout() {
  return (
    <div className="relative scroll-smooth">
      <Analytics/>
      <div className="px-5 sm:px-8 md:px-13 lg:px-12.5 xl:px-30 2xl:px-50">
        <div className="hero-section lg:grid lg:grid-cols-2 lg:mt-26 xl:mt-30 2xl:mt-45 2xl:gap-5 2xl:max-w-[1138px] 2xl:mx-auto">
          <HeaderSection />
          <Introduction />
        </div>
        <Github />
      </div>
      <TechStack />
      <div className="px-5 sm:px-8 md:px-13 xl:px-30 2xl:max-w-[1630px] 2xl:mx-auto">
        <Navigation />
        <Outlet />
      </div>
      <Footer />

      <CertificateViewer />
    </div>
  );
}
