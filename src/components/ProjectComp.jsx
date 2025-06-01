import TechStackItem from "../ui/techStackItem";
import Paragraph from "../ui/paragraph";

export default function ProjectComp({ name, desc, src, projFor, stack }) {
  return (
    <div className="mt-8 sm:mt-0 mb-14 sm:mb-4 lg:mb-2 lg:grid lg:grid-cols-2 items-center justify-center lg:gap-10">
      <div className="rounded-xl overflow-hidden aspect-[15/9] border-1 border-stone-700 relative lg:w-[340px] justify-self-end">
        <img className="" src={src} alt={name} />
        <div className="absolute inset-0 hover:bg-black/70 transition-all ease-in-out index-[9]"></div>
      </div>
      <div className="lg:max-w-[447px]">
        <p className="inter-bold text-xs lg:text-base mt-4 lg:mt-0">{name}</p>
        <p className="uppercase inter-medium text-xs lg:text-base mt-2">{projFor}</p>
        <p className="leading-4.5 lg:leading-6 tracking-tight inter-regular text-xs lg:text-base mt-2">
          {desc}
        </p>
        <ul className="flex gap-1 mt-2 lg:mt-4 md:gap-2">
          {stack.map((tech) => (
            <li key={tech}>
              <TechStackItem item={tech} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
