export default function ContactIcon({ src, alt, href = "#" }) {
  return (
    <div className="bg-stone-950 p-1.5 w-6 sm:w-8 2xl:w-10 rounded-[6px] 2xl:rounded-[12px] ">
      <a href={href}>
        <img className="w-fit" src={src} alt={alt} />
      </a>
    </div>
  );
}
