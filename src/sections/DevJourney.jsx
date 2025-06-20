import Subheading from "../ui/Subheading";
import { devJourney } from "../data";
import JourneyItem from "../components/JourneyItem";

export default function DevJourney() {
  return (
    <div className="mb-10 lg:mb-15">
      <Subheading>Developer Journey</Subheading>

      <div className="mt-10 2xl:mt-15 2xl:max-w-[1120px] 2xl:mx-auto">
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
