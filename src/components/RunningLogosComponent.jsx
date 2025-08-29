import InfiniteScrollRow from "./InfiniteScrollRow";
import { logosRow1, logosRow2, logosRow3 } from "../data";

export default function RunningLogosComponent() {
  return (
    <div className="bg-stone-900 py-4 md:py-6 lg:py-8 2xl:py-10 mt-6 sm:mt-8 2xl:mx-auto 2xl:rounded-4xl 2xl:max-w-[1390px]  ">
      <InfiniteScrollRow items={logosRow1} direction="left" speed="70s" />
      <InfiniteScrollRow items={logosRow2} direction="right" speed="70s" />
      <InfiniteScrollRow items={logosRow3} direction="left" speed="70s" />
    </div>
  );
}
