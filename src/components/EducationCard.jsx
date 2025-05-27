export default function EducationCard({ title, year, name, address }) {
  return (
    <div className="bg-[#07061B] text-white p-4 sm:px-10 sm:py-5 rounded-lg">
      <h1 className="poppins-bold 5text-sm sm:text-base">{title}</h1>
      <p className="montserrat-regular text-xs sm:text-sm leading-relaxed mt-2 sm:mt-1">
        {name}
        <br />
        {year}
        <br />
        {address}
      </p>
    </div>
  );
}
