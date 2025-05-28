export default function Paragraph({ children }) {
  return (
    <>
      <p className="mt-4 leading-4.5 sm:leading-5 md:leading-6 tracking-tight text-center inter-medium text-xs sm:text-sm md:text-base sm:w-[450px] md:w-[550px] sm:mx-auto">
        {children}
      </p>
    </>
  );
}
