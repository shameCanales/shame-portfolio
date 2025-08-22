import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "motion/react";
import hamburgerMenu from "../assets/icons/more.png";
import closeMenu from "../assets/icons/close.png";
import LinkText from "../ui/LinkText";
import { uiActions } from "../store/ui-slice";

export default function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();

  const navigationalLinksRoute = [
    {
      to: "/",
      label: "Skill Set",
    },
    {
      to: "/certificates",
      label: "Certificates",
    },
    {
      to: "/projects",
      label: "Projects",
    },
    {
      to: "/experience",
      label: "Experience",
    },
    {
      to: "/about",
      label: "About Me",
    },
  ];

  const routeNameMap = {
    "/": "Skill Set",
    "/certificates": "Certificates",
    "/projects": "Projects",
    "/experience": "Experience",
    "/about": "About Me",
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);

  // monitoring screensize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentSection = routeNameMap[location.pathname] || "wayaGani!";
  const navIsOpen = useSelector((state) => state.ui.navMobileisOpen);
  const shouldShowNav = navIsOpen || isDesktop;

  return (
    <div className="mt-20  relative z-[2]">
      <div className="mobile-nav bg-stone-900 pl-6 rounded-4xl flex items-center justify-between sm:hidden">
        <p className="uppercase text-stone-50 poppins-medium text-xs tracking-wide">
          {currentSection}
        </p>

        <button
          onClick={() => dispatch(uiActions.openNavMobile())}
          className="bg-[#463EB1] p-2.5 rounded-full"
        >
          <img src={hamburgerMenu} alt="hamburger Menu icon" className="w-5" />
        </button>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {shouldShowNav && (
          <motion.nav
            key="nav"
            initial={{ opacity: 0, x: isDesktop ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isDesktop ? 0 : 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`bg-stone-900 sm:bg-transparent text-stone-50 sm:text-stone-950 mt-8 lg:mx-auto px-6 py-10 sm:py-4 rounded-3xl w-46 sm:w-full lg:w-[800px] absolute sm:static top-[-32px] right-0  `}
          >
            {!isDesktop && (
              <div className="w-full flex justify-end sm:hidden">
                <button
                  onClick={() => dispatch(uiActions.closeNavMobile())}
                  className="bg-purple-700 p-2 rounded-full"
                >
                  <img className="w-3" src={closeMenu} alt="Close Menu Icon" />
                </button>
              </div>
            )}

            <ul className="text-center gap-8 sm:flex justify-between">
              {navigationalLinksRoute.map((route) => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-800 poppins-bold text-sm "
                        : "poppins-light"
                    }
                    end
                  >
                    <LinkText active={currentSection === route.label}>
                      {route.label}
                    </LinkText>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
