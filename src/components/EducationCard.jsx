export default function EducationCard({ title, year, name, address }) {
  return (
    <div className="bg-[#07061B] text-white p-4 rounded-lg">
      <h1 className="poppins-bold text-sm">{title}</h1>
      <p className="montserrat-regular text-xs leading-relaxed mt-2">
        {name}
        <br />
        {year}
        <br />
        {address}
      </p>
    </div>
  );
}
