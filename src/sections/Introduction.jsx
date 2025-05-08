import Paragraph from "../ui/paragraph";
import Subheading from "../ui/Subheading";
export default function Introduction() {
  return (
    <div>
      <Subheading>Introduction</Subheading>
      <div className="text ">
        <Paragraph>
          I’m a soon-to-be IT graduate and self-taught developer passionate
          about turning ideas into interactive, user-friendly web experiences.
          With multiple
          <a href="#" className="underline">
            {" certifications"}
          </a>
          in HTML, CSS, JavaScript, and UI/UX design. I’m currently focused on
          mastering frontend development using React, Next.js, Tailwind CSS, and
          ShadCN — building clean, component-driven interfaces that perform
          beautifully across devices. Check out my
          <a href="#" className="underline">
            {" Resume"}
          </a>
          .
        </Paragraph>
        <Paragraph>
          I thrive at the intersection of design and development — crafting
          sleek, minimalist UIs that feel as good as they look. Whether I’m
          prototyping in Figma or coding dynamic components, I aim for
          intuitive, accessible interfaces backed by thoughtful logic. I enjoy
          solving real-world problems, writing clean, reusable code, and
          constantly sharpening my skills through hands-on
          <a href="#" className="underline">
            {" projects"}
          </a>
          .
        </Paragraph>
        <Paragraph>
          From leading the development of our Water Billing Management System
          capstone to rebuilding a company site during my internship, I bring
          creativity, consistency, and curiosity to everything I build. I’m
          eager to contribute, grow, and turn challenges into opportunities. one
          project at a time.
        </Paragraph>
      </div>
    </div>
  );
}
