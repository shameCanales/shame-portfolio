import Subheading from "../ui/Subheading";
import { devJourney } from "../data";
import JourneyItem from "../components/JourneyItem";

export default function DevJourney() {
  return (
    <div className="mb-10">
      <Subheading>Developer Journey</Subheading>

      <div>
        {devJourney.map((journ) => (
          <JourneyItem
            key={journ.title}
            title={journ.title}
            desc={journ.desc}
            color={journ.color}
          />
        ))}
      </div>
    </div>
  );
}
