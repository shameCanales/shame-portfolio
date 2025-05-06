import InfiniteScrollRow from "./InfiniteScrollRow";
import { logosRow1, logosRow2, logosRow3 } from "../data";

export default function RunningLogosComponent() {
  return (
    <div className="bg-stone-900 py-6 mt-6">
      <InfiniteScrollRow items={logosRow1} direction="left" speed="40s" />
      <InfiniteScrollRow items={logosRow2} direction="right" speed="40s" />
      <InfiniteScrollRow items={logosRow3} direction="left" speed="40s" />
    </div>
  );
}
