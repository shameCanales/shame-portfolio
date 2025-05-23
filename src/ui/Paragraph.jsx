export default function Paragraph({ children }) {
  return (
    <>
      <p className="mt-4 leading-4.5 sm:leading- tracking-tight text-center inter-medium text-xs sm:text-sm sm:w-[450px] sm:mx-auto">
        {children}
      </p>
    </>
  );
}
