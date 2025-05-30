import { skillsets } from "../data";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="grid mt-4 sm:grid-cols-2 sm:gap-3">
      {skillsets.map((set) => (
        <SkillCard key={set.name} title={set.name} items={set.items} />
      ))}
    </div>
  );
}
