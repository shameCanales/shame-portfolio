import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../data";

export default function Experience() {
  return (
    <div className="my-12">
      {experiences.map((exp) => (
        <ExperienceItem
          when={exp.date}
          as={exp.role}
          where={exp.where}
          what={exp.description}
        />
      ))}
    </div>
  );
}
