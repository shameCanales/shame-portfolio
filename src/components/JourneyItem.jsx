export default function JourneyItem({ title, desc, color }) {
  console.log(color);
  return (
    <div className={`mt-4 border-l-[${color}] border-l-3 pl-4  `}>
      <div>
        <p className="montserrat-medium text-sm sm:text-base ">{title}</p>
      </div>
      <div>
        <p className="montserrat-regular text-xs sm:text-sm leading-normal mt-1.5">
          {desc}
        </p>
      </div>
    </div>
  );
}
