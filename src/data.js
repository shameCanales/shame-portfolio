// CTA icons ///////////////
import facebookIcon from "./assets/icons/facebook.png";
import githubIcon from "./assets/icons/github.png";
import gmailIcon from "./assets/icons/gmail.png";
import linkedinIcon from "./assets/icons/linkedin.png";
import phoneCallIcon from "./assets/icons/phone-call.png";

// logos ///////////////////
import css from "./assets/logos/css3.png";
import git from "./assets/logos/git.png";
import github from "./assets/logos/github.png";
import html5 from "./assets/logos/html5.png";
import javascript from "./assets/logos/javascript.png";
import mongodb from "./assets/logos/monggodb.png";
import nodejs from "./assets/logos/nodejs.png";
import react from "./assets/logos/reactjs.png";
import rtk from "./assets/logos/reduxtoolkit.png";
import shadcn from "./assets/logos/shadcn.png";
import tailwindcss from "./assets/logos/tailwindcss.png";
import typescript from "./assets/logos/typescript.png";
import vite from "./assets/logos/vite.png";
import vscode from "./assets/logos/vscode.png";
import nextjs from "./assets/logos/nextjs.png";

//certificates ////////////////
import HtmlAndCss from "./assets/certificates/HtmlandCSSUdemy.jpg";
import webDesign from "./assets/certificates/webDesignUdemy.jpg";
import javascripts from "./assets/certificates/javascriptUdemy.png";

// projects ///////////////////
import waterbillingsystem from "./assets/projects/waterbillingsystem.png";

//footer links ////////////////
import linkedInWhite from "./assets/icons/linkedinW.png";
import emailWhite from "./assets/icons/email.png";
import facebookWhite from "./assets/icons/facebookW.png";
import gitHubWhite from "./assets/icons/githubW.png";
import phone from "./assets/icons/phone-call.png";

export const contactCTAs = [
  {
    name: "github",
    url: "#",
    src: githubIcon,
    alt: "github icon",
  },
  {
    name: "email",
    url: "#",
    src: gmailIcon,
    alt: "gmail icon",
  },
  {
    name: "linkedin",
    url: "#",
    src: linkedinIcon,
    alt: "linkedin Icon",
  },
  {
    name: "facebook",
    url: "#",
    src: facebookIcon,
    alt: "facebook icon",
  },
  {
    name: "phone",
    url: "09813030091",
    src: phoneCallIcon,
    alt: "phone call icon",
  },
];

//logos for the tech stack section
export const logosRow1 = [
  {
    name: "ReactJS",
    logosrc: react,
    alt: "ReactJS logo",
  },
  {
    name: "Vite",
    logosrc: vite,
    alt: "Vite logo",
  },
  {
    name: "Css3",
    logosrc: css,
    alt: "Css3 logo",
  },
  {
    name: "Html5",
    logosrc: html5,
    alt: "Html5 logo",
  },
  {
    name: "Javascript",
    logosrc: javascript,
    alt: "Javascript logo",
  },
];

export const logosRow2 = [
  {
    name: "VSCode",
    logosrc: vscode,
    alt: "VSCode logo",
  },
  {
    name: "TailwindCSS",
    logosrc: tailwindcss,
    alt: "TailwindCSS logo",
  },
  {
    name: "Git",
    logosrc: git,
    alt: "Git logo",
  },
  {
    name: "TypeScript",
    logosrc: typescript,
    alt: "TypeScript logo",
  },
  {
    name: "Redux Toolkit",
    logosrc: rtk,
    alt: "Redux Toolkit logo",
  },
];

export const logosRow3 = [
  {
    name: "MongoDB",
    logosrc: mongodb,
    alt: "MongoDB logo",
  },
  {
    name: "NextJS",
    logosrc: nextjs,
    alt: "NextJS logo",
  },
  {
    name: "ShadCN",
    logosrc: shadcn,
    alt: "ShadCN logo",
  },
  {
    name: "GitHub",
    logosrc: github,
    alt: "GitHub logo",
  },
  {
    name: "NodeJS",
    logosrc: nodejs,
    alt: "NodeJS logo",
  },
];

export const certificates = [
  {
    name: "Build Responsive Real-World Websites with HTML and CSS",
    certifiedBy: "Jonas Schmedtmann",
    certSrc: HtmlAndCss,
    platform: "Udemy",
    time: 37.5,
  },
  {
    name: "Web Design for Web Developers: Build Beautiful Websites!",
    certifiedBy: "Jonas Schmedtmann",
    certSrc: webDesign,
    platform: "Udemy",
    time: 2.5,
  },
  {
    name: "The Complete JavaScript Course 2024: From Zero to Expert!",
    certifiedBy: "Jonas Schmedtmann",
    certSrc: javascripts,
    platform: "Udemy",
    time: 71,
  },
];

export const skillsets = [
  {
    name: "Frontend",
    items: [
      "HTML, CSS, VanillaJS",
      "Sass",
      "React JS",
      "Tailwind CSS",
      "ShadCN",
    ],
  },
  {
    name: "State Management",
    items: ["React UseState", "React Context", "Redux Toolkit"],
  },
  {
    name: "FullStack",
    items: ["NextJS"],
  },
  {
    name: "BaaS",
    items: ["FireBase"],
  },
  {
    name: "Backend",
    items: ["Node.JS"],
  },
  {
    name: "Build Tools",
    items: ["Vite for React", "Babel: MVC for Vanilla JS"],
  },
  {
    name: "Paradigms",
    items: [
      "Component Base Arch.",
      "Functional Programming",
      "Object Oriented Programming",
      "MVC Architecture",
    ],
  },
  {
    name: "Design Tools",
    items: ["Figma", "Photoshop"],
  },
  {
    name: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    name: "Database",
    items: ["MySQL"],
  },
];

export const projects = [
  {
    name: "Water Billing Management System",
    for: "Capstone Project - 4th Year",
    description:
      "Built and maintained critical components for the Water Billing System's frontend and backend, collaborating with cross-functional teams to implement web accessibility best practices.",
    stack: ["JavaScript", "Php", "MySQL"],
    imagesrc: waterbillingsystem,
  },
  {
    name: "Water Billing Management System",
    for: "Capstone Project - 4th Year",
    description:
      "Built and maintained critical components for the Water Billing System's frontend and backend, collaborating with cross-functional teams to implement web accessibility best practices.",
    stack: ["JavaScript", "Php", "MySQL"],
    imagesrc: waterbillingsystem,
  },
  
];

export const footerLinks = [
  {
    name: "GitHub",
    link: "#",
    src: gitHubWhite,
  },
  {
    name: "Email",
    link: "#",
    src: emailWhite,
  },
  {
    name: "Facebook",
    link: "#",
    src: facebookWhite,
  },
  {
    name: "LinkedIn",
    link: "#",
    src: linkedInWhite,
  },
  {
    name: "Mobile",
    link: "09813030091",
    src: phone,
  },
];

export const experiences = [
  {
    date: "Feb 2025 - June 2025",
    role: "Intern / OJT",
    where: "ComWorks Inc",
    description:
      "Recreated the Comwork company website using ReactJS, TailwindCSS, Redux Toolkit, and TanStack. Redesigned it with a minimalist, modern UI focused on clarity and user experience. Ensured a clear content hierarchy to guide visitor attention effectively. Also built several small projects during this period to strengthen my skills.",
  },
  {
    date: "Feb 2025 - June 2025",
    role: "Intern / OJT",
    where: "ComWorks Inc",
    description:
      "Recreated the Comwork company website using ReactJS, TailwindCSS, Redux Toolkit, and TanStack. Redesigned it with a minimalist, modern UI focused on clarity and user experience. Ensured a clear content hierarchy to guide visitor attention effectively. Also built several small projects during this period to strengthen my skills.",
  },
  {
    date: "Feb 2025 - June 2025",
    role: "Intern / OJT",
    where: "ComWorks Inc",
    description:
      "Recreated the Comwork company website using ReactJS, TailwindCSS, Redux Toolkit, and TanStack. Redesigned it with a minimalist, modern UI focused on clarity and user experience. Ensured a clear content hierarchy to guide visitor attention effectively. Also built several small projects during this period to strengthen my skills.",
  },
];

export const careerGoals = [
  {
    goalTitle: "Learn Constantly",
    goalDesc:
      "Fuel my growth through curiosity. I aim to keep learning new tools, patterns, and technologies to stay sharp and relevant in a fast-evolving field.",
    bgColor: "#463EB1",
  },
  {
    goalTitle: "Grow Skillset",
    goalDesc:
      "Strengthen both technical and soft skills by diving deeper into frontend development, expanding my backend knowledge, and building full-stack confidence.",
    bgColor: "#419453",
  },
  {
    goalTitle: "Contribute Value",
    goalDesc:
      "Whether through clean code, thoughtful design, or teamwork, I want to create meaningful impact and bring value to projects and teams I work with.",
    bgColor: "#1B997C",
  },
  {
    goalTitle: "Solve Problem",
    goalDesc:
      "I enjoy breaking down challenges and finsing solutions, not just to make things work, but to make them work better, smarter, and smoother.",
    bgColor: "#C72427",
  },
];

export const education = [
  {
    title: "Tertiary Education",
    schoolName: "Romblon State University - SFC",
    schoolYear: "S.Y. 2021-2025",
    address: "Poblacion, San Fernando, Romblon",
  },
  {
    title: "Secondary Education - Senior",
    schoolName: "Don Carlos M. Mejias Memorial NHS",
    schoolYear: "S.Y. 2019-2021",
    address: "Panangcalan, San Fernando, Romblon",
  },
  {
    title: "Secondary Education - Junior",
    schoolName: "Don Carlos M. Mejias Memorial NHS",
    schoolYear: "S.Y. 2015-2019",
    address: "Panangcalan, San Fernando, Romblon",
  },
  {
    title: "Primary Education",
    schoolName: "Campalingo Elementary School",
    schoolYear: "S.Y. 2008-2015",
    address: "Campalingo, San Fernando, Romblon",
  },
];

export const devJourney = [
  {
    title: "Curiosity Sparked It All",
    desc: "I first got curious about how beautiful websites and apps were made — that curiosity quickly turned into excitement when I learned the basics of programming. Writing code felt fun and empowering, and I began imagining all the things I could build.",
    color: "#E91A1A",
  },
  {
    title: "First Line of Code",
    desc: "I wrote my first line of code in Grade 11 using Visual Basic to build a basic calculator. Around the same time, I was introduced to HTML and CSS — and built my first website. That early exposure made me realize I wanted to keep going deeper.",
    color: "#E2E91A",
  },
  {
    title: "Learning Beyond the Classroom",
    desc: "In college, I went beyond the curriculum—learning advanced HTML and CSS early to build a standout portfolio. I explored Python, C, C#, PHP, and MySQL, and later deepened my skills through Udemy courses in web development, UI/UX, and React.",
    color: "#1AE940",
  },
  {
    title: "First Real Projects & Building with Purpose",
    desc: "I began with a PHP & MySQL CRUD app, then led the development of a Water Billing Management System for our capstone. I'm now rebuilding it with React and Node.js to modernize the stack and showcase my full stack skills—this portfolio highlights that journey.",
    color: "#1A4AE9",
  },
  {
    title: "Growing Into a Full Stack Developer",
    desc: "I'm a frontend-focused developer specializing in responsive, component-based UIs with React, Next.js, and Tailwind CSS. I'm also advancing my backend skills with Node.js and MongoDB, aiming to become a well-rounded full stack engineer committed to purposeful learning and development.",
    color: "#AE1AE9",
  },
];
