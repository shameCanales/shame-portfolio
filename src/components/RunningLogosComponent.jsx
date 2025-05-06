import InfiniteScrollRow from "./InfiniteScrollRow";
import { logosRow1, logosRow2, logosRow3 } from "../data";

export default function RunningLogosComponent() {
  return (
    <div>
      <InfiniteScrollRow items={logosRow1} direction="left" speed="20s" />
    </div>
  );
}
