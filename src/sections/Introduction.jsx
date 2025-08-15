import MainParagraph from "../ui/MainParagraph";
export default function Introduction() {
  return (
    <div className="mt-17 sm:mt-18 md:mt-20 lg:mt-0">
      <p className="text-center sm:text-left montserrat-bold mt-15 sm:text-lg md:uppercase lg:hidden">
        Introduction
      </p>
      <div className="text ">
        <MainParagraph>
          I’m a fresh IT graduate and a self-taught developer passionate about
          turning ideas into interactive, user-friendly web experiences. With
          multiple
          <a href="#" className="underline underline-offset-4">
            {" certifications "}
          </a>
          in HTML, CSS, JavaScript, and UI/UX design. I’m currently focused on
          mastering frontend development using React, Next.js, Tailwind CSS,
          Redux Toolkit, and Routing. building clean, component-driven
          interfaces that perform beautifully across devices. Check out my
          <a href="#" className="underline underline-offset-4">
            {" Resume"}
          </a>
          .
        </MainParagraph>
        <MainParagraph>
          I thrive at the intersection of design and development — crafting
          sleek, minimalist UIs that feel as good as they look. Whether I’m
          prototyping in Figma or coding dynamic components, I aim for
          intuitive, accessible interfaces backed by thoughtful logic. I enjoy
          solving real-world problems, writing clean, reusable code, and
          constantly sharpening my skills through hands-on
          <a href="#" className="underline underline-offset-4">
            {" projects"}
          </a>
          .
        </MainParagraph>
        <MainParagraph>
          From leading the development of our Water Billing Management System
          capstone to rebuilding a company site during my internship and
          building experimental projects. I bring creativity, consistency, and
          curiosity to everything I build. I’m eager to contribute, grow, and
          turn challenges into opportunities. one project at a time.
        </MainParagraph>
      </div>
    </div>
  );
}
