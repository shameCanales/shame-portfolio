import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function LinkText({ active, children }) {
  const activeIndicator = active ? "sm:border-b-purple-700 sm:border-b-2" : "";
  const dispatch = useDispatch();

  const handleSelectButton = () => {
    dispatch(uiActions.closeNavMobile());
  };

  return (
    <button
      className={`uppercase mt-4 text-sm sm:mt-0 sm:pb-2 ${activeIndicator}`}
      onClick={handleSelectButton}
    >
      {children}
    </button>
  );
}
