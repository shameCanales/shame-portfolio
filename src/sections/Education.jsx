import { education } from "../data";
import EducationCard from "../components/EducationCard";
import Subheading from "../ui/Subheading";

export default function Education() {
  return (
    <div className="">
      <Subheading>Educational Background</Subheading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 sm:gap-3 mt-4 sm:mt-6 ">
        {education.map((educ) => (
          <EducationCard
            key={educ.schoolYear}
            title={educ.title}
            year={educ.schoolYear}
            name={educ.schoolName}
            address={educ.address}
          />
        ))}
      </div>
    </div>
  );
}
