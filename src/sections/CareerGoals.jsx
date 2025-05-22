import { careerGoals } from "../data";
import GoalCard from "../components/GoalCard";
import Subheading from "../ui/Subheading";

export default function CareerGoals() {
  return (
    <div className="mt-12">
      <Subheading>My Career Goals</Subheading>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {careerGoals.map((careerGoal) => (
          <GoalCard
            key={careerGoal.goalTitle}
            title={careerGoal.goalTitle}
            description={careerGoal.goalDesc}
            color={careerGoal.bgColor}
          />
        ))}
      </div>
    </div>
  );
}
