import { skillsets } from "../data";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  skillsets.map((set) => console.log(set.name, set.items));

  return (
    <div className="grid mt-4">
      {skillsets.map((set) => (
        <SkillCard key={set.name} title={set.name} items={set.items} />
      ))}
    </div>
  );
}
