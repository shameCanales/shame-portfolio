export default function MainParagraph({ children }) {
  return (
    <p className="mt-4 leading-4.5 sm:leading-5 md:leading-6 tracking-tight md:tracking-tighter text-center inter-medium text-xs sm:text-left sm:text-sm md:text-base ">
      {children}
    </p>
  );
}
