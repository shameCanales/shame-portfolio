export default function MainParagraph({ children }) {
  return (
    <p className="mt-4 leading-4.5 tracking-tight text-center inter-medium text-xs sm:text-left sm:text-sm sm:leading-5">
      {children}
    </p>
  );
}
