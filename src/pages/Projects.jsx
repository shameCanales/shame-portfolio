import { projects } from "../data";
import ProjectComp from "../components/ProjectComp";

export default function Projects() {
  return (
    <div className="mt-8 sm:mt-02 sm:grid sm:grid-cols-2 sm:gap-5 md:gap-6">
      {projects.map((proj) => (
        <ProjectComp
          key={proj.name}
          name={proj.name}
          desc={proj.description}
          src={proj.imagesrc}
          projFor={proj.for}
          stack={proj.stack}
        />
      ))}
    </div>
  );
}
