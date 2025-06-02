export default function EducationCard({ title, year, name, address }) {
  return (
    <div className="bg-[#07061B] text-white p-4 sm:px-10 sm:py-5 md:py-7 lg:py-8 rounded-lg sm:rounded-xl md:rounded-3xl">
      <h1 className="poppins-bold text-sm sm:text-base md:text-xl lg:text-2xl">{title}</h1>
      <p className="montserrat-regular text-xs sm:text-sm lg:text-base leading-relaxed mt-2 md:mt-3 sm:mt-1">
        {name}
        <br />
        {year}
        <br />
        {address}
      </p>
    </div>
  );
}
