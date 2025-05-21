export default function GoalCard({ title, description, color }) {
  return (
    <div className={`bg-[${color}] text-stone-50 rounded-md text-center p-5`}>
      <h3 className="montserrat-bold text-sm tracking-wider">{title}</h3>

      <p className="text-xs montserrat-regular mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
