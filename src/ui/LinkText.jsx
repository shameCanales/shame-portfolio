import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function LinkText({ active, children }) {
  const activeIndicator = active ? "sm:border-b-purple-700 sm:border-b-2 2xl:border-b-4" : "";
  const dispatch = useDispatch();

  const handleSelectButton = () => {
    dispatch(uiActions.closeNavMobile());
  };

  return (
    <button
      className={`uppercase mt-3 sm:mt-0 text-sm md:text-base lg:text-lg 2xl:text-xl sm:pb-2  ${activeIndicator}`}
      onClick={handleSelectButton}
    >
      {children}
    </button>
  );
}
