export default function ContactIcon({ src, alt, href = "#" }) {
  return (
    <div className="bg-stone-950 p-1.5 w-6 sm:w-8 rounded-[6px] ">
      <a href={href}>
        <img className="w-fit" src={src} alt={alt} />
      </a>
    </div>
  );
}
