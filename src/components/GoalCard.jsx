export default function GoalCard({ title, description, color }) {
  console.log(color)
  return (
    <div className={`bg-[#463EB1] text-stone-50 rounded-md sm:rounded-xl text-center p-5 sm:py-6 sm:px-14`}>
      <h3 className="montserrat-bold text-sm sm:text-base tracking-wider">{title}</h3>

      <p className="text-xs sm:text-sm montserrat-regular mt-2 sm:mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
