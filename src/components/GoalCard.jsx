export default function GoalCard({ title, description, color }) {
  console.log(color)
  return (
    <div className={`bg-[#463EB1] text-stone-50 rounded-md sm:rounded-xl md:rounded-2xl text-center p-5 sm:py-6 md:py-8 sm:px-14 md:px-8`}>
      <h3 className="montserrat-bold text-sm sm:text-base md:text-xl tracking-wider">{title}</h3>

      <p className="text-xs sm:text-sm  montserrat-regular mt-2 sm:mt-3 md:mt-4 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
