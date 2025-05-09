import { projects } from "../data";
import ProjectComp from "../components/ProjectComp";

export default function Projects() {
  return (
    <div className="mt-8">
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
