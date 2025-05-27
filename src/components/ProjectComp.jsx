import TechStackItem from "../ui/techStackItem";
import Paragraph from "../ui/paragraph";

export default function ProjectComp({ name, desc, src, projFor, stack }) {
  return (
    <div className="mt-8 sm:mt-0 mb-14 sm:mb-4">
      <div className="rounded-xl overflow-hidden aspect-[18/9] border-1 border-stone-700 relative">
        <img className="" src={src} alt={name} />
        <div className="absolute inset-0 hover:bg-black/70 transition-all ease-in-out index-[9]"></div>
      </div>
      <p className="inter-bold text-xs mt-4">{name}</p>
      <p className="uppercase inter-medium text-xs mt-2">{projFor}</p>
      <p className="leading-4.5 tracking-tight inter-regular text-xs mt-2">{desc}</p>
      <ul className="flex gap-1 mt-2">
        {stack.map((tech) => (
          <li key={tech}>
            <TechStackItem item={tech} />
          </li>
        ))}
      </ul>
    </div>
  );
}
