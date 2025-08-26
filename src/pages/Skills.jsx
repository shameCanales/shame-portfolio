import {  coreSkills } from "../data";
import SkillCard from "../components/SkillCard";
import Subheading from "../ui/Subheading";

export default function Skills() {
  return (
    <>
      <div className="grid mt-2 sm:mt-3 md:mt-4 lg:mt-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-3 2xl:gap-6">
        {coreSkills.map((set) => (
          <SkillCard key={set.name} title={set.name} items={set.items} />
        ))}
      </div>
    </>
  );
}
