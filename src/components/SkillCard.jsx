export default function SkillCard({ title, items }) {
  return (
    <div className="bg-[#07061B] text-stone-50 mt-2 p-4 rounded-md">
      <p className="text-base poppins-semibold mb-2">{title}</p>

      {items.map((item) => (
        <p key={item} className="poppins-light text-xs mt-0.5">
          {item}
        </p>
      ))}
    </div>
  );
}
