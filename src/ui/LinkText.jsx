import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { motion, AnimatePresence } from "motion/react";

export default function LinkText({ active, children }) {
  const dispatch = useDispatch();

  const handleSelectButton = () => {
    dispatch(uiActions.closeNavMobile());
  };

  return (
    <motion.button
      onClick={handleSelectButton}
      className="relative uppercase mt-3 sm:mt-0 text-sm md:text-base lg:text-lg 2xl:text-xl sm:pb-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}

      {/* Animate underline only if active */}
      <AnimatePresence>
        {active && (
          <motion.div
            layoutId="underline" // shared animation across links
            className="absolute left-0 right-0 mx-auto bottom-0 h-[2px] sm:h-[3px] 2xl:h-[4px] bg-purple-700 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}


// import { useDispatch } from "react-redux";
// import { uiActions } from "../store/ui-slice";
// import { motion } from "motion/react"

// export default function LinkText({ active, children }) {
//   const activeIndicator = active ? "sm:border-b-purple-700 sm:border-b-2 2xl:border-b-4" : "";
//   const dispatch = useDispatch();

//   const handleSelectButton = () => {
//     dispatch(uiActions.closeNavMobile());
//   };

//   return (
//     <button
//       className={`uppercase mt-3 sm:mt-0 text-sm md:text-base lg:text-lg 2xl:text-xl sm:pb-2  ${activeIndicator}`}
//       onClick={handleSelectButton}
//     >
//       {children}
//     </button>
//   );
// }
