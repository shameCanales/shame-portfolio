import { NavLink, useLocation } from "react-router";
import LinkText from "../ui/LinkText";
import hamburgerMenu from "../assets/icons/more.png";
import closeMenu from "../assets/icons/close.png";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();

  const routeNameMap = {
    "/": "Skill Set",
    "/certificates": "Certificates",
    "/projects": "Projects",
    "/experience": "Experience",
    "/about": "About Me",
  };

  const currentSection = routeNameMap[location.pathname] || "wayaGani!";
  const navIsOpen = useSelector((state) => state.ui.navMobileisOpen);
  const OpenNav = navIsOpen ? "block" : "hidden";

  const handleOpenNav = () => {
    dispatch(uiActions.openNavMobile());
  };

  const handleCloseNav = () => {
    dispatch(uiActions.closeNavMobile());
  };

  return (
    <div className="mt-20  relative z-[2]">
      <div className="mobile-nav bg-stone-900 pl-6 rounded-4xl flex items-center justify-between sm:hidden">
        <p className="uppercase text-stone-50 poppins-medium text-xs tracking-wide">
          {currentSection}
        </p>

        <button
          onClick={handleOpenNav}
          className="bg-[#463EB1] p-2.5 rounded-full"
        >
          <img src={hamburgerMenu} alt="hamburger Menu icon" className="w-5" />
        </button>
      </div>

      <nav
        className={`bg-stone-900 sm:bg-transparent text-stone-50 sm:text-stone-950 mt-8 lg:mx-auto px-6 py-10 sm:py-4 rounded-3xl w-46 sm:w-full lg:w-[800px] absolute sm:static top-[-32px] right-0 ${OpenNav}  sm:block `}
      >
        <div className="w-full flex justify-end sm:hidden">
          <button
            onClick={handleCloseNav}
            className="bg-purple-700 p-2 rounded-full"
          >
            <img className="w-3" src={closeMenu} alt="Close Menu Icon" />
          </button>
        </div>

        <ul className="text-center gap-8 sm:flex justify-between">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-800 poppins-bold text-sm "
                  : "poppins-light"
              }
              end
            >
              <LinkText active={currentSection === "Skill Set"}>
                Skill Set
              </LinkText>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                isActive ? "text-purple-800 poppins-bold" : "poppins-light"
              }
            >
              <LinkText active={currentSection === "Certificates"}>
                Certificates
              </LinkText>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-purple-800 poppins-bold  " : "poppins-light"
              }
            >
              <LinkText active={currentSection === "Projects"}>
                Projects
              </LinkText>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "text-purple-800 poppins-bold " : "poppins-light"
              }
            >
              <LinkText active={currentSection === "Experience"}>
                Experience
              </LinkText>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-purple-800 poppins-bold " : "poppins-light"
              }
            >
              <LinkText active={currentSection === "About Me"}>
                About Me
              </LinkText>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
