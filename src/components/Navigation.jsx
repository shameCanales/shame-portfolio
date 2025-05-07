import { Link, NavLink } from "react-router";
import LinkText from "./ui/LinkText";

export default function Navigation() {
  return (
    <nav className="bg-stone-900 text-stone-50 mt-8">
      <ul>
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
            <LinkText>Skill Set</LinkText>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              isActive ? "text-purple-800 poppins-bold" : "poppins-light"
            }
          >
            <LinkText>Certificates</LinkText>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-purple-800 poppins-bold  " : "poppins-light"
            }
          >
            <LinkText>Projects</LinkText>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "text-purple-800 poppins-bold " : "poppins-light"
            }
          >
            <LinkText>Experience</LinkText>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-purple-800 poppins-bold " : "poppins-light"
            }
          >
            <LinkText>About Me</LinkText>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
