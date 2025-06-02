export default function ExperienceItem({ when, as, where, what }) {
  return (
    <>
      <div className="mt-7 md:mt-9 lg:mt-4 lg:grid lg:grid-cols-2">
        <div className="lg:px-6 lg:mt-3">
          <p className="poppins-semibold text-lg md:text-xl uppercase lg:text-right" >{when}</p>
        </div>
        <div className="px-3 sm:px-5 md:px-6 mt-3 border-l-2 border-l-stone-600" >
          <p className="poppins-semibold text-sm sm:text-base md:text-lg lg:text-xl">
            {as}, {where}
          </p >
          <p className="montserrat-regular text-xs sm:text-sm md:text-base leading-4.5 sm:leading-5 md:leading-6 tracking-tight mt-2">{what}</p>
        </div>
      </div>
    </>
  );
}
