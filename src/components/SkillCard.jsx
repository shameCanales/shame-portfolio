export default function SkillCard({ title, items }) {
  return (
    <div className="bg-[#07061B] text-stone-50 mt-2 sm:mt-0 p-4 rounded-md sm:min-h-[180px]">
      <p className="text-base sm:text-xl poppins-semibold mb-2 sm:mb-4">{title}</p>

      {items.map((item) => (
        <p key={item} className="poppins-light text-xs sm:text-sm mt-0.5">
          {item}
        </p>
      ))}
    </div>
  );
}
