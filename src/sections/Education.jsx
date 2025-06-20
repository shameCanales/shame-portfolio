import { education } from "../data";
import EducationCard from "../components/EducationCard";
import Subheading from "../ui/Subheading";

export default function Education() {
  return (
    <div className="">
      <Subheading>Educational Background</Subheading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 2xl:gap-6 mt-4 sm:mt-6 2xl:mt-12 2xl:mx-auto 2xl:max-w-[1180px]">
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
