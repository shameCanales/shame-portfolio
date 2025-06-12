import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/RootLayout";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Certificates from "./pages/Certificates";
// import Experience from "./pages/Experience";
// import About from "./pages/About";
import { lazy, Suspense } from "react";

const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Experience = lazy(() => import("./pages/Experience"));
const About = lazy(() => import("./pages/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Skills />
          </Suspense>
        ),
      },
      {
        path: "certificates",
        element: (
          <Suspense fallback={<p>Loading Certificates...</p>}>
            <Certificates />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<p>Loading Projects...</p>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "experience",
        element: (
          <Suspense fallback={<p>Loading Experiences...</p>}>
            <Experience />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<p>Loading About Me...</p>}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
