export default function Paragraph({ children }) {
  return (
    <>
      <p className="mt-4 2xl:mt-6 leading-4.5 sm:leading-5 md:leading-6 2xl:leading-7 tracking-tight text-center inter-medium text-xs sm:text-sm md:text-base 2xl:text-lg sm:w-[450px] md:w-[550px] 2xl:w-[650px] sm:mx-auto">
        {children}
      </p>
    </>
  );
}
