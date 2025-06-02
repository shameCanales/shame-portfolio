export default function JourneyItem({ title, desc, color }) {
  console.log(color);
  return (
    <div className={`mt-4 border-l-[${color}] border-l-3 lg:border-l-0 pl-4 lg:pl-0 lg:grid lg:grid-cols-2 `}>
      <div>
        <p className="montserrat-medium text-sm sm:text-base lg:text-right lg:pr-4">{title}</p>
      </div>
      <div>
        <p className="montserrat-regular text-xs sm:text-sm leading-normal mt-1.5 lg:border-l-3 lg:pl-4">
          {desc}
        </p>
      </div>
    </div>
  );
}
