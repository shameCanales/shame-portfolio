export default function MainParagraph({ children }) {
  return (
    <p className="mt-4 lg:mt-0 lg:mb-4 leading-4.5 sm:leading-5 md:leading-6 2xl:leading-7 tracking-tight md:tracking-tighter 2xl:tracking text-center inter-medium text-xs sm:text-left sm:text-sm md:text-base 2xl:text-lg ">
      {children}
    </p>
  );
}
