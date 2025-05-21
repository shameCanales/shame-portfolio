import { careerGoals } from "../data";
import GoalCard from "../components/GoalCard";

export default function CareerGoals() {
  return (
    <div className="mt-12">
      <h1 className="montserrat-bold text-center">My Career Goals</h1>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {careerGoals.map((careerGoal) => (
          <GoalCard
            key={careerGoal.bgColor}
            title={careerGoal.goalTitle}
            description={careerGoal.goalDesc}
            color={careerGoal.bgColor}
          />
        ))}
      </div>
    </div>
  );
}
