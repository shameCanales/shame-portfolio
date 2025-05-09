export default function ExperienceItem({ when, as, where, what }) {
  return (
    <>
      <div className="mt-7">
        <div>
          <p className="poppins-semibold text-lg uppercase">{when}</p>
        </div>
        <div className="px-3 mt-3 border-l-2 border-l-stone-600" >
          <p className="poppins-semibold text-sm">
            {as}, {where}
          </p >
          <p className="montserrat-regular text-xs leading-4.5 tracking-tight mt-2">{what}</p>
        </div>
      </div>
    </>
  );
}
